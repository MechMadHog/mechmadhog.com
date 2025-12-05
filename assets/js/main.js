/* Main JS */

document.addEventListener("DOMContentLoaded", () => {
  /* Year in footer */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Anagram widget */
  const anagramContainer = document.querySelector(".anagram-container");
  if (anagramContainer) {
    const pair = ["Mechanical Mad Hog", "Michael Mac Donagh"];
    const W1 = pair[0];
    const W2 = pair[1];

    const wordContainer1 = anagramContainer.querySelector(".w1");
    const wordContainer2 = anagramContainer.querySelector(".w2");
    const showBtn = anagramContainer.querySelector(".show-btn");

    if (wordContainer1 && wordContainer2 && showBtn) {
      function buildWord(container, text, spineRange) {
        container.innerHTML = "";
        let index = 0;
        for (const ch of text) {
          const span = document.createElement("span");
          span.classList.add("letter");
          if (
            spineRange &&
            index >= spineRange[0] &&
            index < spineRange[1] &&
            ch.trim() !== ""
          ) {
            span.classList.add("letter--spine");
          }
          span.textContent = ch;
          container.appendChild(span);
          index++;
        }
      }

      // "Mechanical" → "anical" is positions 4–10
      buildWord(wordContainer1, W1, [4, 10]);
      buildWord(wordContainer2, W2, null);

      function findAndTake(array, letter) {
        const target = letter.toLowerCase();
        const idx = array.findIndex((item) => item.name.toLowerCase() === target);
        if (idx === -1) return null;
        return array.splice(idx, 1)[0];
      }

      function rearrange() {
        if (showBtn.classList.contains("disabled")) return;

        showBtn.classList.add("disabled");

        const rect1 = wordContainer1.getBoundingClientRect();
        const rect2 = wordContainer2.getBoundingClientRect();
        const yDiff = rect2.top - rect1.top;

        const p1 = [];
        const p2 = [];

        Array.from(wordContainer1.children).forEach((span) => {
          if (!span.textContent.trim()) return;
          const r = span.getBoundingClientRect();
          p1.push({
            name: span.textContent,
            element: span,
            top: r.top,
            left: r.left,
          });
        });

        Array.from(wordContainer2.children).forEach((span) => {
          const r = span.getBoundingClientRect();
          p2.push({
            name: span.textContent,
            element: span,
            top: r.top,
            left: r.left,
          });
        });

        wordContainer1.style.position = "relative";
        wordContainer1.style.height = rect1.height + "px";

        p1.forEach((item) => {
          const el = item.element;
          el.style.position = "absolute";
          el.style.left = item.left - rect1.left + "px";
          el.style.top = item.top - rect1.top + "px";
          el.style.transition = "top 0.6s ease, left 0.6s ease";
        });

        p1.forEach((item) => {
          const match = findAndTake(p2, item.name);
          if (!match) return;

          const targetTop = match.top - rect1.top + yDiff;
          const targetLeft = match.left - rect1.left;
          const delay = 100 + Math.random() * 900;

          setTimeout(() => {
            item.element.style.top = targetTop + "px";
            item.element.style.left = targetLeft + "px";
          }, delay);
        });

        showBtn.style.opacity = "0.4";

        // reveal the real name
        setTimeout(() => {
          wordContainer2.classList.remove("no-glow");
          wordContainer2.querySelectorAll(".letter").forEach((span) => {
            span.style.opacity = "1";
          });
        }, 900);
      }

      showBtn.addEventListener("click", rearrange);
    }
  }

  /* Art gallery */
  const artPieces = document.querySelectorAll(".art-piece");
  if (artPieces.length) {
    artPieces.forEach((piece) => {
      const mainImg = piece.querySelector(".art-main-img");
      const thumbs = piece.querySelectorAll(".art-thumb");

      if (!mainImg) return;

      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          const fullSrc =
            thumb.dataset.full ||
            (thumb.querySelector("img") && thumb.querySelector("img").src);
          const fullAlt =
            thumb.dataset.alt ||
            (thumb.querySelector("img") && thumb.querySelector("img").alt) ||
            mainImg.alt;

          if (!fullSrc) return;

          mainImg.src = fullSrc;
          mainImg.alt = fullAlt;
        });
      });

      mainImg.addEventListener("click", () => {
        const isNowZoomed = !mainImg.classList.contains("is-zoomed");
        mainImg.classList.toggle("is-zoomed", isNowZoomed);
        document.body.classList.toggle("art-zoom-active", isNowZoomed);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const zoomed = document.querySelectorAll(".art-main-img.is-zoomed");
        if (!zoomed.length) return;
        zoomed.forEach((img) => img.classList.remove("is-zoomed"));
        document.body.classList.remove("art-zoom-active");
      }
    });
  }
});
