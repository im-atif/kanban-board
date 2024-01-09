<?php

namespace App\Http\Controllers;

use App\Http\Resources\ColumnResource;
use App\Models\Column;
use Illuminate\Http\Request;

class ColumnController extends Controller
{
    public function index(Request $request)
    {
        $columns = Column::all();
        return ColumnResource::collection($columns);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255'
        ]);

        $column = Column::create($request->only('title'));
        return new ColumnResource($column);
    }

    public function update(Request $request, Column $column)
    {
        $request->validate([
            'title' => 'required|string|max:255'
        ]);

        $column->title = $request->title;
        $column->save();

        return new ColumnResource($column);
    }

    public function destroy(Column $column)
    {
        $cardIds = [];
        foreach($column->cards as $card) $cardIds[] = $card->id;
        // bulk delete cards
        $column->delete();
        return response()->json(true, 200);
    }
}
