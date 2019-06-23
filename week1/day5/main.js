
// --------------------------dom-------------------------

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  

// // const check = document.getElementById("check")
// const checkReservation = function(){
// let name = document.getElementById("name").value
// name = name.toLowerCase()
// name = name.charAt(0).toUpperCase() + name.slice(1)
        
//   if(reservations[name] && !reservations[name].claimed){
//     let answer = document.createElement("p")
//     answer.innerHTML = "welcome Bob!"
//     answer.style.fontFamily = "Helvetica"
//     document.body.appendChild(answer)
//   } 
//   else if(reservations[name] && reservations[name].claimed) {
//     let answer = document.createElement("p")
//     answer.innerHTML = "Hey Ted, it seems like someone already claimed your table."
//     answer.style.fontFamily = "Helvetica"
//     document.body.appendChild(answer)
//   } else {
//     let answer = document.createElement("p")
//     answer.innerHTML = "sorry, you dont seem to have a reservation..."
//     answer.style.fontFamily = "Helvetica"
//     document.body.appendChild(answer)
//   }
// }

// ------------------------------------------------------

const boxContainer = document.getElementById("container")
const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }
// boxContainer.setAttribute("onmouseenter", func())
const box1 = document.createElement("div")
const box2 = document.createElement("div")
const box3 = document.createElement("div")
const box4 = document.createElement("div")
const box5 = document.createElement("div")
const box6 = document.createElement("div")
boxContainer.appendChild(box1)
boxContainer.appendChild(box2)
boxContainer.appendChild(box3)
boxContainer.appendChild(box4)
boxContainer.appendChild(box5)
boxContainer.appendChild(box6)





  
