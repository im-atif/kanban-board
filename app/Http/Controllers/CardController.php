<?php

namespace App\Http\Controllers;

use App\Http\Resources\CardResource;
use App\Models\Card;
use App\Models\Column;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index(Request $request)
    {
        $cards = Card::all();
        return CardResource::collection($cards);
    }

    public function store(Request $request)
    {
        $request->validate([
            'column_id' => 'required|exists:columns,id',
            'title' => 'required|string|max:255'
        ]);

        $column = Column::find($request->column_id);
        $lastCard = $column->cards()->latest()->first();

        $data = $request->only('title', 'column_id');
        $data['after'] = $lastCard ? $lastCard->id : null;

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

    public function destroy(Card $card)
    {
        $card->delete();
        return response()->json(true, 200);
    }
}
