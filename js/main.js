"use strict";

console.clear();

// const WELCOME_MESSAGE = `Hello World!`;
//
// const output = document.querySelector("#js-output");
// output.innerHTML = WELCOME_MESSAGE;

// ===============================================
// event - preventDefault()

// const form = document.querySelector(".register-form");
//
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const {
//         elements: { username, password },
//     } = event.currentTarget;
//     console.log(username.value, password.value);
// });

// ===============================================
// Zdarzenia związane z klawiaturą

// document.addEventListener("keydown", (event) => {
//     console.log("Keydown: ", event);
// });
//
// document.addEventListener("keyup", (event) => {
//     console.log("Keyup: ", event);
// });

// ===============================================
// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// ===============================================
// Właściwości key i code

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;
//
// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);
//
// function logMessage({ type, key, code }) {
//     const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//
//     logList.insertAdjacentHTML("afterbegin", markup);
//
//     if (type === "keyup") {
//         incrementKeypressCounter();
//     }
// }
//
// function reset() {
//     keypressCounter = 1;
//     logList.innerHTML = "";
// }
//
// function incrementKeypressCounter() {
//     keypressCounter += 1;
// }

// ===============================================
// Klawisze modyfikujące
// document.addEventListener("keydown", (event) => {
//     event.preventDefault();
//
//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//         console.log("«Ctrl + s» or «Command + s» combo");
//     }
// });
