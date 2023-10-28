const typedText =
  "Liam, es gibt etwas, das ich schon eine Weile mit dir teilen möchte. Ich weiß, es mag so aussehen, als würde ich die Dinge überstürzen, aber ich war noch nie sicherer bei irgendetwas in meinem Leben. Du machst mich unglaublich glücklich, und ich kann es kaum erwarten, dich an meiner Seite zu haben. Liam, würdest du mir die große Ehre erweisen, mein Partner zu werden und mit mir auf diese Reise zu gehen? Möchtest du mit mir ausgehen? -Arden.";
const typedTextElement = document.getElementById("typed-text");

let charIndex = 0;

function typeText() {
  typedTextElement.textContent = typedText.slice(0, charIndex);
  charIndex++;

  if (charIndex <= typedText.length) {
    setTimeout(typeText, 50); // Adjust the typing speed here
  }
}

typeText();
