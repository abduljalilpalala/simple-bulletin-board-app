<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;

class ArticleController extends Controller
{
  public function index()
  {
    //
  }

  public function store(StoreArticleRequest $request)
  {
    //
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
