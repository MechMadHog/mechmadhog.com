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
      A digital version of the wisdom wall. Films, books, TV, games,
      and odd scraps of useful thinking.
      Not everything here is profound.
      Some of it just works.
    </p>
  </header>

  {% assign quotes = site.data.quotes %}
  {% assign authors = site.data.quotes | map: "author" | uniq | sort %}

  <div class="quote-controls" aria-label="Quote filters">
    <button
      class="quote-filter is-active"
      type="button"
      data-author="all">
      All
    </button>

    {% for author in authors %}
      <button
        class="quote-filter"
        type="button"
        data-author="{{ author | slugify }}">
        {{ author }}
      </button>
    {% endfor %}
  </div>

  <div class="quotes-grid" id="quotesGrid">
    {% for quote in quotes %}
      <article
        class="quote-card"
        data-author="{{ quote.author | slugify }}">
        <blockquote>
          {{ quote.text }}
        </blockquote>
        <div class="quote-meta">
          <span class="quote-author">
            {{ quote.author }}
          </span>
          {% if quote.source %}
            <span class="quote-source">
              {{ quote.source }}
            </span>
          {% endif %}
        </div>
        {% if quote.note %}
          <p class="quote-note">
            {{ quote.note }}
          </p>
        {% endif %}
        {% if quote.tags %}
          <div class="quote-tags">
            {% for tag in quote.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
  </div>

  <div class="quotes-actions">
    <button
      id="quotesShowMore"
      class="quote-show-more"
      type="button">
      Show more
    </button>
  </div>

  <noscript>
    <p class="muted">
      JavaScript is disabled, so all quotes are shown without filtering.
    </p>
  </noscript>
</section>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".quote-filter");
  const cards = document.querySelectorAll(".quote-card");
  const showMoreButton = document.getElementById("quotesShowMore");

  const INITIAL_COUNT = 6;

  let activeAuthor = "all";
  let visibleCount = INITIAL_COUNT;

  function updateQuotes() {
    let visibleCards = 0;

    cards.forEach(card => {
      const matches =
        activeAuthor === "all" ||
        card.dataset.author === activeAuthor;

      if (matches && visibleCards < visibleCount) {
        card.style.display = "block";
        visibleCards++;
      } else {
        card.style.display = "none";
      }
    });

    const matchingCards = [...cards].filter(card =>
      activeAuthor === "all" ||
      card.dataset.author === activeAuthor
    );

    if (matchingCards.length <= visibleCount) {
      showMoreButton.style.display = "none";
    } else {
      showMoreButton.style.display = "inline-flex";
    }
  }
  
  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(btn =>
        btn.classList.remove("is-active")
      );

      button.classList.add("is-active");
      activeAuthor = button.dataset.author;
      visibleCount = INITIAL_COUNT;
      updateQuotes();
    });
  });

  showMoreButton.addEventListener("click", () => {
    visibleCount += INITIAL_COUNT;
    updateQuotes();
  });

  updateQuotes();
});
</script>

