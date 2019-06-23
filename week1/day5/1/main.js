

// const box = document.getElementById("box")


// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }
// const changeColor = function(){
//     box.style.backgroundColor = "#8e44ad"
// }

// const list = document.getElementById("list")
// const dup = function(){
//     const newitem = document.createElement("li")
//     newitem.innerHTML = "im a new item"
//     list.appendChild(newitem)
// }

const box = document.getElementById("box")
box.onclick = function(){
    box.innerHTML = "clicked"
}
box.onmouseenter = function(){
    box.style.backgroundColor = "blue"
}

const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")
box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!
