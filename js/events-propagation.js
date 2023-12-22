/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const textEl = document.querySelector(".js-text");
const divEl = document.querySelector(".js-div");
const sectionEl = document.querySelector(".js-section");

// ? поширення подій. кожен елемент проходить три фази: зануренння.. встановлення цільового елемента
// ? та спливання. По замовчуванню події спливають, тобто спочатку виконується обробник на найглибшому елементі
textEl.addEventListener(
  "click",
  (event) => {
    console.group("p addEventListener");
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
    console.groupEnd("p addEventListener");
  },
  {
    // once: true,
    capture: true,
  }
);

textEl.addEventListener("click", (event) => {
  console.group("p addEventListener");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
  console.groupEnd("p addEventListener");
});

//& event.target - це елемент на якому відбулась подія (де зловили клік )

//& event.current.target - це елемент на якому спрацьовював обробник події, на фазі вспливання

//* 3ій аргумент евент лістенер приймає обʼєкт налаштувань, наприклад once: true;
//* caputre: true; дозволяє змінити порядок.. тобто обробники викликаються на фазі занурення.

divEl.addEventListener(
  "click",
  (event) => {
    console.group("div addEventListener");
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
    console.groupEnd("div addEventListener");
  },
  {
    // once: true,
    // capture: true,
  }
);

divEl.addEventListener("click", (event) => {
  console.group("div addEventListener");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
  console.groupEnd("div addEventListener");
});

sectionEl.addEventListener(
  "click",
  (event) => {
    console.group("section addEventListener");
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
    console.groupEnd("section addEventListener");
  },
  {
    // once: true,
    capture: true,
  }
);

sectionEl.addEventListener("click", (event) => {
  console.group("section addEventListener");
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
  console.groupEnd("section addEventListener");
});
//? делегування подій
