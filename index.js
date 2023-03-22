const advicelist = [
  "You have the opportunity to make a difference in the world and in yourself. Make the day meaningful.",
  "Breathe your way to a calmer, healthier, happier life.",
  " Start the chain reaction of positive tasking.",
  "Most things are not as bad as you think they are.",
  "Smaller problems are much easier to manage than larger problems.",
  "Be considerate of others.",
  "Dress for success",
  "Start your day caring for your health.",
  "The power of habit can transform your life.",
  "Judge others favorably. You never know what battle they are fighting.",
  "Your moods are contagious. Share positive energy.",
  "An organized life is a calmer life.",
  "Respect other people’s opinions even when they differ from your own.",
  "When you master your emotions, you master your life",
  "Love your body. Take good care of it.",
  "A healthy social life is pure happiness.",
  "Speech is a powerful tool.",
  "Your thoughts become what you are. What you think, you believe.",
  "Touch someone’s soul with your kindness",
  " Each day is filled with endless opportunities to show people how much you care, appreciate, and value them.",
];

const advice = document.getElementById("advice_number");
const advicetx = document.getElementById("advice_text");
const button = document.querySelector("#press");

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * advicelist.length);
  advicetx.innerText = advicelist[random];
  advice.innerText = "ADVICE #" + random;
});
