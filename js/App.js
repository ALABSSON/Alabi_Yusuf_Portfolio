
let stackCardWrap = document.querySelector(".stackCardWrap")

for (let i = 0; i < myStack.length; i++) {
    stackCardWrap.innerHTML += `
            <div class="stackCard">
                <div class="stackCardRow1"> 
                    <img src="${myStack[i].picture}" alt="">
                    <h6> ${myStack[i].Stack} </h6>
                    <p> ${myStack[i].experienceYear}</p>
                </div>
                <div class="stackCardRow2">
                    <span id="ratingDiv"> <span> 
                    <h1 id="rateMove" style="width: ${myStack[i].rate}% ;"> ${myStack[i].rate}% </h1>
                </div>
                </div>
                `
    
}



let projectCardWrap = document.querySelector(".projectCardWrap")

    for (let i = 0; i < projectArray.length; i++) {
    projectCardWrap.innerHTML += `
    <div class="job-card">
    <a href="${projectArray[i].projectLink}" target="_blank" class="card-link">
      <img src="${projectArray[i].picture}" alt="Project thumbnail" class="card-image" />
      <div class="card-content">
        <h3 class="card-title"> ${projectArray[i].projectName} </h3>
        <p class="card-description"> ${projectArray[i].projectInfo} </p>
        <span class="card-button"> View Project → </span>
      </div>
    </a>
    </div>
    
    `     }     




import myStack from "./myStack.js"
import projectArray from "./myProject.js"
import {reactProject} from "./myProject.js"