@extends('layouts.base')
@section('title', $page->title)

@section('content')
    <article class="prose base-container mt-16">
        {!! $template_content !!}
    </article>
@endsection
