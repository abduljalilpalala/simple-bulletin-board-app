<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Resources\ArticleListResource;

class ArticleController extends Controller
{
  public function index()
  {
    return ArticleListResource::collection(Article::orderByDesc('created_at')->get());
  }

  public function store(StoreArticleRequest $request)
  {
    Article::create($request->validated());
    return response()->noContent();
  }


  public function show(Article $article)
  {
    //
  }

  public function update(UpdateArticleRequest $request, Article $article)
  {
    //
  }

  public function destroy(Article $article)
  {
    //
  }
}
