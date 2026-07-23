---
layout: default
title: Contact
permalink: /contact/
description: "Get in touch."
---

<section class="panel panel--contact">
  <h1 class="section-title">Contact</h1>
  <div class="contact-grid">
    <!-- Intro / context -->
    <article class="contact-card contact-card--intro">
      <h2>Two Sites, Same Person</h2>
      <p>
        I maintain two websites with slightly different purposes:
      </p>
      <ul class="contact-sites">
        <li>
          <strong>mechmadhog.com</strong>
          <span>
            The personal one: art, comedy, projects, experiments,
            training logs, and occasional controlled chaos.
          </span>
        </li>
        <li>
          <a href="https://michaelmacdonagh.net"
            target="_blank"
            rel="noopener noreferrer">
            <strong>michaelmacdonagh.net</strong>
          </a>
          <span>
            The professional one: my CV, experience, skills,
            portfolio, and employable typography.
          </span>
        </li>
      </ul>
      <p class="muted small-note">
        Same person. Different tone.
      </p>
      <p class="muted small-note">
        Easiest way to reach me is the form or email below.
      </p>
      <div class="contact-direct">
        <h3>Direct email</h3>
        <p class="muted">
          Prefer to write from your own inbox?
          <br>
          <a href="mailto:michael@mechmadhog.com?subject=Hi%20Mike!">michael@mechmadhog.com</a>
        </p>
      </div>
    </article>
    <!-- Contact form -->
    <article class="contact-card contact-card--form">
      <h2>Send a Message</h2>
      <form
        class="contact-form"
        action="https://formspree.io/f/xblzyjdn"
        method="POST"
      >
        <div class="field-group">
          <label class="field-label" for="contact-name">Your name</label>
          <input
            id="contact-name"
            class="field-input"
            type="text"
            name="name"
            required
            autocomplete="name"
          >
        </div>
        <div class="field-group">
          <label class="field-label" for="contact-email">Your email</label>
          <input
            id="contact-email"
            class="field-input"
            type="email"
            name="_replyto"
            required
            autocomplete="email"
            inputmode="email"
          >
        </div>
        <div class="field-group">
          <label class="field-label" for="contact-message">Message</label>
          <textarea
            id="contact-message"
            class="field-textarea"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>
        <!-- Subject line for you -->
        <input type="hidden" name="_subject" value="Website contact from mechmadhog.com">
        <!-- Honeypot (spam trap) -->
        <label class="honeypot">
          Website
          <input type="text" name="website" tabindex="-1" autocomplete="off">
        </label>
        <!-- Consent checkbox -->
        <label class="consent-row">
         <input
            type="checkbox"
            name="reply_requested"
            value="yes"
            class="consent-checkbox"
          >
          <span>
            I consent to being contacted in response to this message.
          </span>
        </label>
        <div class="form-actions">
          <button type="submit" class="cta cta--primary">
            Send message
          </button>
          <p class="form-note muted">
            Your message goes to my inbox. No newsletter, no marketing.
          </p>
        </div>
      </form>
    </article>

  </div>
</section>
