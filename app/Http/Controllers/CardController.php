<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Resources\CardResource;
use App\Models\Card;
use App\Models\Column;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index(Request $request)
    {
        $trashed = $request->has('status') && $request->status == 0;
        $dated = $request->has('date') && Carbon::parse($request->date);
        $cards = $trashed ? Card::onlyTrashed() : Card::withoutTrashed();

        if ($dated) {
            $date = Carbon::parse($request->date)->format('Y-m-d');
            $start = $date . ' 00:00:00';
            $end = $date . ' 23:59:59';
            $cards = $cards->whereBetween('created_at', [$start, $end]);
        }

        $cards = $cards->get();
        return CardResource::collection($cards);
    }

    public function store(Request $request)
    {
        $request->validate([
            'column_id' => 'required|exists:columns,id',
            'title' => 'required|string|max:255'
        ]);

        $column = Column::find($request->column_id);

        $data = $request->only('title', 'column_id');
        $data['order'] = $column->cards->count() + 1;

        $card = Card::create($data);
        return new CardResource($card);
    }

    public function update(Request $request, Card $card)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $card->title = $request->title;
        $card->description = $request->description;
        $card->save();
        return new CardResource($card);
    }

    public function updateOrder(Request $request, Card $card)
    {
        $request->validate([
            'column_id' => 'required|exists:columns,id',
            'index' => 'required|numeric'
        ]);
        // return $request->all();

        DB::beginTransaction();
        $order = $request->index + 1;
        $nextCards = Card::where('column_id', $request->column_id)->where('order', '>=', $order)->get();
        foreach ($nextCards as $nc) {
            $order += 1;
            $nc->order = $order;
            $nc->save();
        }

        $card->column_id = $request->column_id;
        $card->order = $request->index + 1;
        $card->save();
        DB::commit();

        return response()->json(true, 200);
    }

    public function destroy(Card $card)
    {
        $card->delete();
        return response()->json(true, 200);
    }
}
