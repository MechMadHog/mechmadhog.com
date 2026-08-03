---
layout: default
title: Favourite Jokes
permalink: /comedy/jokes/
description: "Favourite jokes, bits, premises, and comedy that helped me develope my sense of humor."
---

<section class="panel panel--quotes">
  <header class="quotes-header">
    <p class="section-title">Joke Library</p>
    <h1>Favourite Jokes</h1>
    <p class="quotes-intro">
      A collection of jokes, bits, and comedy that have stuck with me over the years.
      Some are brilliantly written, some are completely ridiculous,
      and some make me laugh simply because of how committed they are to the bit.
    </p>
  </header>

  {% assign jokes = site.data.jokes %}
  {% assign comedians = site.data.jokes | map: "comedian" | uniq | sort %}

  <div class="quote-controls-wrapper">
    <p class="quote-controls-title">
      Filter By Comedian
    </p>

    <div class="quote-controls" aria-label="Joke filters">
      <button
        class="quote-filter is-active"
        type="button"
        data-comedian="all">
        All
      </button>

      {% for comedian in comedians %}
        <button
          class="quote-filter"
          type="button"
          data-comedian="{{ comedian | slugify }}">
          {{ comedian }}
        </button>
      {% endfor %}
    </div>
  </div>

  <div class="quotes-grid" id="jokesGrid">
    {% for joke in jokes %}
      <article
        class="quote-card"
        data-comedian="{{ joke.comedian | slugify }}">

        <blockquote>
          {{ joke.text }}
        </blockquote>

        <div class="quote-meta">
          <span class="quote-author">
            {{ joke.comedian }}
          </span>

          {% if joke.source %}
            <span class="quote-source">
              {{ joke.source }}
            </span>
          {% endif %}
        </div>

        {% if joke.note %}
          <p class="quote-note">
            {{ joke.note }}
          </p>
        {% endif %}

        {% if joke.tags %}
          <div class="quote-tags">
            {% for tag in joke.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
  </div>

  <div class="quotes-actions">
    <button
      id="jokesShowMore"
      class="quote-show-more"
      type="button">
      Show more
    </button>
  </div>

  <noscript>
    <p class="muted">
      JavaScript is disabled, so all jokes are shown without filtering.
    </p>
  </noscript>
</section>

<script>
document.addEventListener("DOMContentLoaded", () => {

  const filters = document.querySelectorAll(".quote-filter");
  const cards = document.querySelectorAll(".quote-card");
  const showMoreButton = document.getElementById("jokesShowMore");

  const INITIAL_COUNT = 6;

  let activeComedian = "all";
  let visibleCount = INITIAL_COUNT;

  function updateJokes() {

    let visibleCards = 0;

    cards.forEach(card => {

      const matches =
        activeComedian === "all" ||
        card.dataset.comedian === activeComedian;

      if (matches && visibleCards < visibleCount) {
        card.style.display = "block";
        visibleCards++;
      } else {
        card.style.display = "none";
      }

    });

    const matchingCards = [...cards].filter(card =>
      activeComedian === "all" ||
      card.dataset.comedian === activeComedian
    );

    showMoreButton.style.display =
      matchingCards.length <= visibleCount
        ? "none"
        : "inline-flex";
  }

  filters.forEach(button => {

    button.addEventListener("click", () => {

      filters.forEach(btn =>
        btn.classList.remove("is-active")
      );

      button.classList.add("is-active");

      activeComedian = button.dataset.comedian;
      visibleCount = INITIAL_COUNT;

      updateJokes();

    });

  });

  showMoreButton.addEventListener("click", () => {

    visibleCount += INITIAL_COUNT;
    updateJokes();

  });

  updateJokes();

});
</script>