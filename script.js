// ------------------------------
// Typing Animation
// ------------------------------

const text =
  "You are the most beautiful part of my life. ❤️ Thank you for making every day brighter. Happy Birthday, My Love! 🎂";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();


// ------------------------------
// Smooth Scroll
// ------------------------------

function scrollToLetter() {
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
}


// ------------------------------
// Countdown (Time Since We Met)
// Change this date!
// ------------------------------

const startDate = new Date("2020-04-18 00:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);


// ------------------------------
// Floating Hearts
// ------------------------------

const hearts = document.querySelector(".hearts");

function createHeart() {

  const heart = document.createElement("span");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.animationDuration =
    (Math.random() * 4 + 4) + "s";

  heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);

}

setInterval(createHeart, 300);


// ------------------------------
// Surprise Button
// ------------------------------

const btn = document.getElementById("surpriseBtn");

btn.addEventListener("click", () => {

  document.getElementById("surpriseMessage").innerHTML =
    "🎉 Happy Birthday, My Princess! ❤️<br><br>I Love You Forever! 💖🌹";

  launchConfetti();

  const music = document.getElementById("music");

  music.play();

});


// ------------------------------
// Confetti Effect
// ------------------------------

function launchConfetti() {

  for (let i = 0; i < 150; i++) {

    const confetti = document.createElement("div");

    confetti.innerHTML = "🎉";

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-20px";
    confetti.style.fontSize =
      (Math.random() * 20 + 15) + "px";

    confetti.style.transition =
      "transform 4s linear, top 4s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {

      confetti.style.top = "110%";

      confetti.style.transform =
        `rotate(${Math.random() * 720}deg)`;

    }, 50);

    setTimeout(() => {
      confetti.remove();
    }, 4000);

  }

}


// ------------------------------
// Fade In Sections
// ------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

});

sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "1s";

  observer.observe(section);

});