const showMenu = document.querySelector(".showMenu")
const hideMenu = document.querySelector(".hideMenu")
const menuList = document.querySelector("#menuList")

showMenu.onclick =()=> {
  menuList.style.display = "flex"
  showMenu.innerHTML = "Hide"
}


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

// Project 1 Mapping 

let ProjectWrapONE = document.querySelector(".ProjectWrapONE")

for (let i = 0; i < projectArray.length; i++) {
    ProjectWrapONE.innerHTML += `
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

    // Project 2 Mapping 
    
let ProjectWrapTWO = document.querySelector(".ProjectWrapTWO")
for (let i = 0; i < reactProject.length; i++) {
    ProjectWrapTWO.innerHTML += `
    <div class="job-card">
    <a href="${reactProject[i].projectLink}" target="_blank" class="card-link">
      <img src="${reactProject[i].picture}" alt="Project thumbnail" class="card-image" />
      <div class="card-content">
        <h3 class="card-title"> ${reactProject[i].projectName} </h3>
        <p class="card-description"> ${reactProject[i].projectInfo} </p>
        <span class="card-button"> View Project → </span>
      </div>
    </a>
    </div>
    
    `     }     
    
let ProjectWrapTHREE = document.querySelector(".ProjectWrapTHREE")
for (let i = 0; i < PHPProject.length; i++) {
    ProjectWrapTHREE.innerHTML += `
    <div class="job-card">
    <a href="${PHPProject[i].projectLink}" target="_blank" class="card-link">
      <img src="${PHPProject[i].picture}" alt="Project thumbnail" class="card-image" />
      <div class="card-content">
        <h3 class="card-title"> ${PHPProject[i].projectName} </h3>
        <p class="card-description"> ${PHPProject[i].projectInfo} </p>
        <span class="card-button"> View Project → </span>
      </div>
    </a>
    </div>
    
    `     }     
    
let ProjectWrapFOUR = document.querySelector(".ProjectWrapFOUR")
for (let i = 0; i < FIGMAProject.length; i++) {
    ProjectWrapFOUR.innerHTML += `
    <div class="job-card">
    <a href="${FIGMAProject[i].projectLink}" target="_blank" class="card-link">
      <img src="${FIGMAProject[i].picture}" alt="Project thumbnail" class="card-image" />
      <div class="card-content">
        <h3 class="card-title"> ${FIGMAProject[i].projectName} </h3>
        <p class="card-description"> ${FIGMAProject[i].projectInfo} </p>
        <span class="card-button"> View Project → </span>
      </div>
    </a>
    </div>
    
    `     }     
    
let ProjectWrapFIVE = document.querySelector(".ProjectWrapFIVE")
for (let i = 0; i < WordPressProject.length; i++) {
    ProjectWrapFIVE.innerHTML += `
    <div class="job-card">
    <a href="${WordPressProject[i].projectLink}" target="_blank" class="card-link">
      <img src="${WordPressProject[i].picture}" alt="Project thumbnail" class="card-image" />
      <div class="card-content">
        <h3 class="card-title"> ${WordPressProject[i].projectName} </h3>
        <p class="card-description"> ${WordPressProject[i].projectInfo} </p>
        <span class="card-button"> View Project → </span>
      </div>
    </a>
    </div>
    
    `     }     


let ProjectONE = document.querySelector("#ProjectONE")
ProjectONE.style.background = "var(--tertiary-color)"
ProjectONE.onclick =()=> {
    ProjectWrapONE.style.display = "flex"
    ProjectWrapTWO.style.display = "none"
    ProjectWrapTHREE.style.display = "none"
    ProjectWrapFOUR.style.display = "none"
    ProjectWrapFIVE.style.display = "none"
    ProjectONE.style.background = "var(--tertiary-color)"
    ProjectTWO.style.background = "var(--Primary-color)"
    ProjectTHREE.style.background = "var(--Primary-color)"
    ProjectFOUR.style.background = "var(--Primary-color)"
    ProjectFIVE.style.background = "var(--Primary-color)"
}

let ProjectTWO = document.querySelector("#ProjectTWO")
 ProjectTWO.onclick =()=> {
     ProjectWrapONE.style.display = "none"
    ProjectWrapTWO.style.display = "flex"
    ProjectWrapTHREE.style.display = "none"
    ProjectWrapFOUR.style.display = "none"
    ProjectWrapFIVE.style.display = "none"
        ProjectONE.style.background = "var(--Primary-color)"
    ProjectTWO.style.background = "var(--tertiary-color)"
    ProjectTHREE.style.background = "var(--Primary-color)"
    ProjectFOUR.style.background = "var(--Primary-color)"
    ProjectFIVE.style.background = "var(--Primary-color)"
}

let ProjectTHREE = document.querySelector("#ProjectTHREE")
 ProjectTHREE.onclick =()=> {
    ProjectWrapONE.style.display = "none"
    ProjectWrapTWO.style.display = "none"
    ProjectWrapTHREE.style.display = "flex"
    ProjectWrapFOUR.style.display = "none"
    ProjectWrapFIVE.style.display = "none"
    ProjectONE.style.background = "var(--Primary-color)"
    ProjectTWO.style.background = "var(--Primary-color)"
    ProjectTHREE.style.background = "var(--tertiary-color)"
    ProjectFOUR.style.background = "var(--Primary-color)"
    ProjectFIVE.style.background = "var(--Primary-color)"
}

let ProjectFOUR = document.querySelector("#ProjectFOUR")
 ProjectFOUR.onclick =()=> {
    ProjectWrapONE.style.display = "none"
    ProjectWrapTWO.style.display = "none"
    ProjectWrapTHREE.style.display = "none"
    ProjectWrapFOUR.style.display = "flex"
    ProjectWrapFIVE.style.display = "none"
    ProjectONE.style.background = "var(--Primary-color)"
    ProjectTWO.style.background = "var(--Primary-color)"
    ProjectTHREE.style.background = "var(--Primary-color)"
    ProjectFOUR.style.background = "var(--tertiary-color)"
    ProjectFIVE.style.background = "var(--Primary-color)"
}

let ProjectFIVE = document.querySelector("#ProjectFIVE")
 ProjectFIVE.onclick =()=> {
    ProjectWrapONE.style.display = "none"
    ProjectWrapTWO.style.display = "none"
    ProjectWrapTHREE.style.display = "none"
    ProjectWrapFOUR.style.display = "none"
    ProjectWrapFIVE.style.display = "flex"
    ProjectONE.style.background = "var(--Primary-color)"
    ProjectTWO.style.background = "var(--Primary-color)"
    ProjectTHREE.style.background = "var(--Primary-color)"
    ProjectFOUR.style.background = "var(--Primary-color)"
    ProjectFIVE.style.background = "var(--tertiary-color)"
}


import myStack from "./myStack.js"
import projectArray, { FIGMAProject, PHPProject, WordPressProject } from "./myProject.js"
import {reactProject} from "./myProject.js"


