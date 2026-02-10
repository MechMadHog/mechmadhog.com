---
layout: default
title: Art
permalink: /art/
description: "Sketches, branding, experiments, visual stuff I'm making."
---

<section class="art-page">
  <header class="art-hero">
    <h1 class="section-title">Art / Visual Work</h1>
    <p class="art-lede">
      Sketches, branding, UI bits, typography experiments. Some polished, some rough. All useful.
    </p>
    <nav class="art-filters" aria-label="Art categories">
      <a class="chip is-active" href="#all">All</a>
      <a class="chip" href="#branding">Branding</a>
      <a class="chip" href="#sketches">Sketches</a>
      <a class="chip" href="#ui">UI</a>
      <a class="chip" href="#type">Type</a>
      <a class="chip" href="#experiments">Experiments</a>
    </nav>
  </header>
  <div class="art-grid" id="all">
    <!-- Card 1 -->
    <article class="art-card" id="branding">
      <a class="art-card-media" href="{{ '/assets/images/logo.png' | relative_url }}">
        <img
          src="{{ '/assets/images/logo.png' | relative_url }}"
          alt="Mechanical Mad Hog logo mark"
          loading="lazy"
        >
      </a>
      <div class="art-card-body">
        <h2 class="art-title">Mechanical Mad Hog Branding</h2>
        <p class="art-kind">Branding · Logo · Identity</p>
        <p class="art-description">
          Logo work and icon tests for the “Mechanical Mad Hog” identity. Industrial, bootleg, DIY.
          This is the mark you’ll see around the site.
        </p>
        <ul class="art-tags" aria-label="Tags">
          <li>Branding</li>
          <li>Logo</li>
          <li>Cyberpunk</li>
        </ul>
        <p class="muted art-note">
          Direction: cyberpunk + scrapyard + DIY badge you’d stencil on gear.
        </p>
      </div>
    </article>
    <!-- Card 2 -->
    <article class="art-card" id="sketches">
      <a class="art-card-media" href="{{ '/assets/images/art/placeholder-sketch.jpg' | relative_url }}">
        <img
          src="{{ '/assets/images/art/placeholder-sketch.jpg' | relative_url }}"
          alt="Placeholder sketch area for upcoming work"
          loading="lazy"
        >
      </a>
      <div class="art-card-body">
        <h2 class="art-title">Other Work</h2>
        <p class="art-kind">Sketches · Studies · Experiments</p>
        <p class="art-description">
          Sketches, studies, UI layouts, paint tests, typography ideas, random bits I like.
          This page is allowed to be rough.
        </p>
        <ul class="art-tags" aria-label="Tags">
          <li>Sketches</li>
          <li>Studies</li>
          <li>Experiments</li>
        </ul>
        <p class="muted art-note">
          I am not pretending this stuff is finished.
        </p>
      </div>
    </article>
  </div>
</section>
