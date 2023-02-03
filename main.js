import { context } from "./data.js";

let source = document.querySelector("#etsy-card-template").innerHTML;
const template = Handlebars.compile(source); // returns a function
const html = template(context); // context has to be an object `{}`
document.querySelector(".container").insertAdjacentHTML("afterbegin", html);
