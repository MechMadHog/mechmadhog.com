---
layout: default
title: Favourite Quotes
permalink: /quotes/
description: "A digital wisdom wall of favourite quotes from films, books, TV, games, and other places worth stealing wisdom from."
---

<section class="panel panel--quotes">
  <header class="quotes-header">
    <p class="section-title">Wisdom Wall</p>
    <h1>Favourite Quotes</h1>
    <p class="quotes-intro">
      A digital version of the wisdom wall. Films, books, TV, games, and odd scraps of useful thinking.
      Not everything here is profound. Some of it just works.
    </p>
  </header>

  {% assign quotes = site.data.quotes %}
  {% assign authors = quotes | map: "author" | uniq | sort %}

  <div class="quote-controls" aria-label="Quote filters">
    <button class="quote-filter is-active" type="button" data-author="all">All</button>
    {% for author in authors %}
      <button class="quote-filter" type="button" data-author="{{ author | slugify }}">{{ author }}</button>
    {% endfor %}
  </div>

  <div class="quotes-grid" id="quotesGrid">
    {% for quote in quotes %}
      <article class="quote-card" data-author="{{ quote.author | slugify }}">
        <blockquote>
          <p>“{{ quote.text }}”</p>
        </blockquote>

        <footer class="quote-meta">
          <strong>{{ quote.author }}</strong>
          {% if quote.source %}
            <span>{{ quote.source }}</span>
          {% endif %}
        </footer>

        {% if quote.note %}
          <p class="quote-note">{{ quote.note }}</p>
        {% endif %}

        {% if quote.tags %}
          <ul class="quote-tags" aria-label="Quote tags">
            {% for tag in quote.tags %}
              <li>{{ tag }}</li>
            {% endfor %}
          </ul>
        {% endif %}
      </article>
    {% endfor %}
  </div>

  <div class="quotes-actions">
    <button id="quotesShowMore" class="quote-show-more" type="button">Show more</button>
  </div>

  <noscript>
    <p class="muted">JavaScript is disabled, so all quotes are shown without filtering.</p>
  </noscript>
</section>
