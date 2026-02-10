---
layout: default
title: Art
permalink: /art/
description: "Sketches, branding, experiments, visual stuff I'm making."
---

<section class="art-page">
  <header class="art-hero">
    <h1 class="section-title">Studio Log</h1>
    <p class="art-lede">
      Ongoing visual work. Sketches, branding experiments, layout tests.
      Some finished. Most in progress.
    </p>
  </header>
  <div class="art-feed-list">
    <!-- Branding entry -->
    <article class="art-entry">
      <figure class="art-entry-media">
        <img
          src="{{ '/assets/images/logo.png' | relative_url }}"
          alt="Mechanical Mad Hog logo mark"
          class="art-main-img"
          loading="lazy"
        >
      </figure>
      <div class="art-entry-body">
        <header class="art-entry-header">
          <h2 class="art-title">Mechanical Mad Hog Branding</h2>
          <span class="art-status">Active Identity Work</span>
        </header>
        <p class="art-kind">
          Logo · Branding · Visual System
        </p>
        <p class="art-description">
          Iterations around the Mechanical Mad Hog identity. Exploring industrial
          shapes, stencil logic, and badge-style layouts that scale across stickers,
          favicons, and site marks.
        </p>
        <p class="muted">
          Direction: cyberpunk + scrapyard + DIY utility mark.
        </p>
        <ul class="art-tags">
          <li>Branding</li>
          <li>Logo</li>
          <li>Identity</li>
        </ul>
      </div>
    </article>
    <!-- Sketchbook entry -->
    <article class="art-entry">
      <figure class="art-entry-media">
        <img
          src="{{ '/assets/images/art/placeholder-sketch.jpg' | relative_url }}"
          alt="Sketch placeholder"
          class="art-main-img"
          loading="lazy"
        >
      </figure>
      <div class="art-entry-body">
        <header class="art-entry-header">
          <h2 class="art-title">Sketchbook / Experiments</h2>
          <span class="art-status draft">Open Studies</span>
        </header>
        <p class="art-kind">
          Sketches · Layout Tests · Visual Notes
        </p>
        <p class="art-description">
          Rough sketches, typography play, UI fragments, and visual reps.
          This space exists to ship ideas quickly without polish pressure.
        </p>
        <p class="muted">
          The goal is iteration, not presentation.
        </p>
        <ul class="art-tags">
          <li>Sketches</li>
          <li>Studies</li>
          <li>Experiments</li>
        </ul>
      </div>
    </article>
  </div>
</section>
