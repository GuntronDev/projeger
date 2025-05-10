import {currentView} from "../stores.js";

document.getElementById("select-project").addEventListener("click", () => {
    // @ts-ignore
    PROJEGER.SelectFile();
    });

document.getElementById("arch-button").addEventListener("click", () => {
    currentView.set("arch")
})
document.getElementById("todo-button").addEventListener("click", () => {
    currentView.set("todo")
})