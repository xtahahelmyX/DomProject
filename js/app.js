'use strict'

const addition = document.querySelector(".sum1")
const subtract = document.querySelector(".sub1")
const count = document.querySelector(".count1")
const subTotal = document.querySelector(".tone")
const buttonRemoveOne = document.querySelector(".bone")

const additionTwo = document.querySelector(".sum2")
const subtractTwo = document.querySelector(".sub2")
const countTwo = document.querySelector(".count2")
const subTotalTwo = document.querySelector(".ttwo")
const buttonRemoveTwo = document.querySelector(".btwo")

const additionThree = document.querySelector(".sum3")
const subtractThree = document.querySelector(".sub3")
const countThree = document.querySelector(".count3")
const subTotalThree = document.querySelector(".tthree")
const buttonRemoveThree = document.querySelector(".bthree")

const totalButton = document.querySelector(".totalcalc")
const totalText = document.querySelector(".totaltext")

const heartOne = document.querySelector(".heart1")
const heartTwo = document.querySelector(".heart2")
const heartThree = document.querySelector(".heart3")

let countNo = Number(count.textContent)
let subTotalNo = Number(subTotal.textContent)

let countNoTwo = Number(countTwo.textContent)
let subTotalNoTwo = Number(subTotalTwo.textContent)

let countNoThree = Number(countThree.textContent)
let subTotalNoThree = Number(subTotalThree.textContent)

let totalTextNo = Number(totalText.textContent)

subtract.addEventListener("click",() => {
  if (countNo > 0 ) {
    countNo -= 1
    count.textContent = countNo; 
  }
})

addition.addEventListener("click", () => {
  countNo += 1
  count.textContent = countNo; 
})

addition.addEventListener("click", () => {
  subTotalNo += 100
  subTotal.textContent = 
 `$${subTotalNo} `; 
})

subtract.addEventListener("click", () => {
  if (subTotalNo > 0 ) {
    subTotalNo -= 100
    subTotal.textContent = `$${subTotalNo}`;
  }
} )

buttonRemoveOne.addEventListener("click", () => {
  subTotal.textContent = 0;
  count.textContent = 0 ;
  subTotalNo = 0;
  countNo = 0;
})

subtractTwo.addEventListener("click",() => {
  if (countNoTwo > 0 ) {
    countNoTwo -= 1
    countTwo.textContent = countNoTwo; 
  }
})

additionTwo.addEventListener("click", () => {
  countNoTwo += 1
  countTwo.textContent = countNoTwo; 
})

additionTwo.addEventListener("click", () => {
  subTotalNoTwo += 200
  subTotalTwo.textContent = 
 `$${subTotalNoTwo}`; 
})

subtractTwo.addEventListener("click", () => {
  if (subTotalNoTwo > 0 ) {
    subTotalNoTwo -= 200
    subTotalTwo.textContent = `$${subTotalNoTwo}`;
  }
} )

buttonRemoveTwo.addEventListener("click", () => {
  subTotalTwo.textContent = 0;
  countTwo.textContent = 0 ;
  subTotalNoTwo = 0;
  countNoTwo = 0;
})
subtractThree.addEventListener("click",() => {
  if (countNoThree > 0 ) {
    countNoThree -= 1
    countThree.textContent = countNoThree; 
  }
})

additionThree.addEventListener("click", () => {
  countNoThree += 1
  countThree.textContent = countNoThree; 
})

additionThree.addEventListener("click", () => {
  subTotalNoThree += 300
  subTotalThree.textContent = 
 `$${subTotalNoThree} `; 
})

subtractThree.addEventListener("click", () => {
  if (subTotalNoThree > 0 ) {
    subTotalNoThree -= 300
    subTotalThree.textContent = `$${subTotalNoThree}`;
  }
} )

buttonRemoveThree.addEventListener("click", () => {
  subTotalThree.textContent = 0;
  countThree.textContent = 0 ;
  subTotalNoThree = 0;
  countNoThree = 0;
})

totalButton.addEventListener("click", () => {
  totalTextNo = `Your Total = $${subTotalNo + subTotalNoTwo + subTotalNoThree}`
  totalText.textContent = totalTextNo
})

heartOne.addEventListener("click", () => {
  heartOne.style.color = 'red'
 })

heartTwo.addEventListener("click", () => {
  heartTwo.style.color = 'red'
})
heartThree.addEventListener("click", () => {
  heartThree.style.color = 'red'
})





