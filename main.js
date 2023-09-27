import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/serif.css'
import confetti from "canvas-confetti";
import RevealNotes from 'reveal.js/plugin/notes/notes.esm'

let deck = new Reveal({
  hash: true,
  plugins: [
    RevealNotes
  ]
})

deck.on('slidechanged', event => {
  let curSlide = deck.getIndices()

  if (curSlide.h === 6 && curSlide.v === 2) {
    var end = Date.now() + (5 * 1000);

    // go Buckeyes!
    var colors = ['#00ff00', '#ff0000'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

})

deck.initialize()
