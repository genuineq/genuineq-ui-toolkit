//** Dependencies. */

import { _ } from './utilities/utilities.js'
import Dropdown from "./classes/Dropdown.js"
import Navbar from "./classes/Navbar.js"

_('dropdown').el().map((i, el) => new Dropdown(el))

_('toggle-right').el().map((i, el) => new Navbar(el))

// let accordionElements = document.querySelectorAll(".accordion-element")
// accordionElements.forEach(element => {
//     let accordionButton = element.querySelector(".accordion-btn")
//     let accordionInfo = element.querySelector(".accordion-info")
//     accordionButton.addEventListener("click", function(){
//         accordionInfo.classList.add("accordion-info-show")
//         accordionButton.classList.add("accordion-btn-acitve")
//     })
// });

// let accordionActive = document.querySelector(".accordion-btn-active")
// let accordionInfoActive = document.querySelector(".accordion-info-show")
// accordionActive = addEventListener("click", function(){
//     accordionActive.classList.remove("accordion-btn-active")
//     accordionInfoActive.classList.remove("accordion-info-show")
// })

// let hamburger = document.querySelector(".hamburger")
// let navbarMenu = document.querySelector(".navbar-items")
// let close = document.querySelector(".close")
// hamburger.addEventListener("click", function(){
//     navbarMenu.classList.add("navbar-items-right-show")
// })

// close.addEventListener("click", function(){
//     navbarMenu.classList.remove("navbar-items-right-show")
// })