/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
      document.querySelector("#the-excuse").innerHTML = generateExcuse();
    })
    console.log("Hello Rigo from console!");
};

let generateExcuse = () => {

    let pronoun = ["A" , "The"];
    let subject = ["dog", "jogger", "racoon", "driver", "comedian", "pincone"];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possetion = ["homework", "toe", "car", "shoe"];
    let where = ["on the street", "in my house", "in my driveway"];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjtIndx = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    let possetion = ["homework", "toe", "car", "shoe"];
    let possetion = ["homework", "toe", "car", "shoe"];
    return pronoun[proIndx] + " " + subject[subjtIndx] + " " + action[actionIndex] + " " + possetion[possetionIndex] + " " + where[whereIndex];
};

