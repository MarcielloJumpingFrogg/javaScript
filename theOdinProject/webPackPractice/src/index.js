import "./styles.css";
import { greeting } from "./greeting";

import redamancyCover from "./Redamancy.jpg"

const image = document.createElement("img");
image.src = redamancyCover

document.body.appendChild(image)

console.log(greeting)