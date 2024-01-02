const messageList = document.querySelector("ul");

const onCloseButtonClick = (event) => {
  const { target } = event;
  // event.target

  if (target.tagName !== "BUTTON") {
    return;
  }

  const message = target.closest("li");
  //   message.style.display = "none";
  message.remove();
};

messageList.addEventListener("click", onCloseButtonClick);
