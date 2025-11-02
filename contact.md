---
layout: default
title: Contact
permalink: /contact/
description: "Get in touch."
---

<section class="panel panel--projects">
  <h1 class="section-title">Contact</h1>
  <div class="projects-grid">
    <!-- Intro / context -->
    <article class="card">
      <h3>Before You Send Anything</h3>
      <p>
        I run two sites:
      </p>
      <ul>
        <li><strong>mechmadhog.com</strong> — this one. Personal. Training, art, systems, experiments, journal.</li>
        <li><strong>michaelmacdonagh.net</strong> — the more professional side. CV, skills, cleaner presentation.</li>
      </ul>
      <p class="muted" style="font-size:0.8rem;">
        Same person. Different tone.
      </p>
      <p class="muted" style="font-size:0.8rem;">
        Easiest way to reach me is the form below or email.
      </p>
    </article>
    <!-- Contact form -->
    <article class="card">
      <h3>Send a Message</h3>
      <form action="https://formspree.io/f/xblzyjdn" method="POST" style="display:grid; gap:1rem; max-width:480px;">
        <label style="font-size:0.8rem; font-weight:600; color:var(--text-main); display:block;">
          Your name
          <input
            type="text"
            name="name"
            required
            autocomplete="name"
            style="
              width:100%;
              margin-top:0.4rem;
              background:#000;
              color:var(--text-main);
              border:1px solid var(--border);
              border-radius:var(--radius);
              padding:0.6rem 0.75rem;
              font-size:0.9rem;
              font-family:var(--font-body);
              box-shadow:var(--glow);
            ">
        </label>
        <label style="font-size:0.8rem; font-weight:600; color:var(--text-main); display:block;">
          Your email
          <input
            type="email"
            name="_replyto"
            required
            autocomplete="email"
            inputmode="email"
            style="
              width:100%;
              margin-top:0.4rem;
              background:#000;
              color:var(--text-main);
              border:1px solid var(--border);
              border-radius:var(--radius);
              padding:0.6rem 0.75rem;
              font-size:0.9rem;
              font-family:var(--font-body);
              box-shadow:var(--glow);
            ">
        </label>
        <label style="font-size:0.8rem; font-weight:600; color:var(--text-main); display:block;">
          Message
          <textarea
            name="message"
            rows="5"
            required
            style="
              width:100%;
              margin-top:0.4rem;
              background:#000;
              color:var(--text-main);
              border:1px solid var(--border);
              border-radius:var(--radius);
              padding:0.6rem 0.75rem;
              font-size:0.9rem;
              font-family:var(--font-body);
              box-shadow:var(--glow);
              line-height:1.4;
              resize:vertical;
            "></textarea>
        </label>
        <!-- Subject line for you -->
        <input type="hidden" name="_subject" value="Website contact from mechmadhog.com">
        <!-- Honeypot (spam trap) -->
        <label style="display:none;">
          Website
          <input type="text" name="website" tabindex="-1" autocomplete="off">
        </label>
        <!-- Consent checkbox -->
        <label style="font-size:0.75rem; line-height:1.4; color:var(--text-dim); display:flex; align-items:flex-start; gap:0.5rem;">
          <input
            type="checkbox"
            name="consent"
            required
            value="yes"
            style="
              margin-top:0.2rem;
              accent-color: var(--accent);
            ">
          <span>
            I'm happy for you to contact me about this message.
          </span>
        </label>
        <button
          type="submit"
          style="
            background: var(--accent);
            color:#0b0b13;
            font-weight:600;
            font-size:0.8rem;
            line-height:1.2;
            padding:0.6rem 1rem;
            border-radius:var(--radius);
            border:1px solid var(--accent);
            box-shadow:var(--glow);
            text-transform:uppercase;
            letter-spacing:0.08em;
            cursor:pointer;
          ">
          Send message
        </button>
        <p class="muted" style="font-size:0.7rem; line-height:1.4; margin:0;">
          Prefer email?
          <a href="mailto:michael@mechmadhog.com?subject=Hi%20Mike!" style="color:var(--accent); text-decoration:none;">
            michael@mechmadhog.com
          </a>
        </p>
      </form>
    </article>

  </div>
</section>
