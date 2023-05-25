"use strict";

console.clear();

const btn = document.querySelector("#btn");

const handleClick = (event) => {
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("currentTarget: ", event.currentTarget);
};

btn.addEventListener("click", handleClick);
