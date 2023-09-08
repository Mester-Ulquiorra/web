import { atom } from "nanostores";

export const $toastText = atom("");

$toastText.listen((text) => {
  if (text === "") return;

  // space dust effect
  const toast = document.querySelector<HTMLDivElement>(".toast")!;

  toast.innerHTML = text;

  toast.style.visibility = "visible";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.visibility = "hidden";
    toast.style.opacity = "0";
  }, 4000);

  $toastText.set("");
});
