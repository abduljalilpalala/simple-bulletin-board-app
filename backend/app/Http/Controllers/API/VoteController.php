<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class VoteController extends Controller
{
  public function store(Request $request)
  {
    $article = Article::find($request->id);
    $article->update(['votes' => $article->votes + 1]);
    return response()->noContent();
  }

  public function update(Request $request, Article $vote)
  {
    $vote->update(['votes' => $vote->votes - 1]);
    return response()->noContent();
  }
}
