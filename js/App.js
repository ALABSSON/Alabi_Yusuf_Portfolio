
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

function HTMTCSSJS() {
    alert("hbhbhb")
}

for (let i = 0; i < projectArray.length; i++) {
    projectCardWrap.innerHTML += `
    <a href="" class="projectCardLink">
        <div class="projectkCard1">
            <img src="${projectArray[i].picture}" alt="projectImg">
        </div>
        <div class="projectkCard2">
            <h1> ${projectArray[i].projectName} </h1>
            <p class="projectInfo"> ${projectArray[i].projectInfo} </p>
        </div>

    </a>
    `
    
}



import myStack from "./myStack.js"
import projectArray from "./myProject.js"
import {reactProject} from "./myProject.js"