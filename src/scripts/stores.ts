import { atom } from "nanostores";

export const $toastText = atom("");

$toastText.listen((text) => {
  if (text === "") return;

  // it's generally not a good idea to use the ! operator, it's better to explicitely check if the element exists
  const toast = document.querySelector<HTMLDivElement>(".toast");
  if(!toast) {
    console.error("Toast element not found");
    return;
  }

  toast.innerHTML = text;

  toast.style.visibility = "visible";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.visibility = "hidden";
    toast.style.opacity = "0";
  }, 4000);

  $toastText.set("");
});
