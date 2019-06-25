//------------------jQuery-----------------

// $("h1").css("color", "blue")
// $(".red-div").css("background-color", "red")
// $("li:first-child").css("color", "green")
// $("li:nth-child(2)").css("color", "pink")
// $("#brown-div").css("color", "brown")

// $("#b1").addClass("box")
// $("#b2").addClass("box")
// $('#my-input').val("Terabyte")

// console.log($("#product"))
// console.log(`the item with barcode ${$("#product").data().barcode} will expire on ${$("#product").data().expirationdate}`)

// $("#example").hover(function(){
//     $(this).css("background-color", "blue")
// })

// $("button").click(function(){
//    alert($("#my-input").val()) 
// })

//-----------------------------------------------

// $(".box").hover(function(){
//     $(this).css("background-color", "blue")
// })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// $("body").append(elem)

// $(".feedme").on("click", function(){
//     let divCopy = $(`<div class=feedme>${$(this).text()}</div>`)

    
//     $("body").append(divCopy)
//   })
// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

//   for(let index in names){
//       let newDiv = `<div>${names[index].first}-${names[index].last}</div>`
//       $("body").append(newDiv)
//   }

// $("#brown-div").hover(function(){
//     $(this).remove()
// })
  
// $("button").click("#blogs", function(){
//     const div = `<div class=blog>hello</div>`
//     $("body").append(div)
//     $(".blog").click(".blog", function(){
//         $(".blog").text("blargh")
//     })
// })


// $("button").click("#blogs", function(){
//     const div = `<div class=blog>hello</div>`
//     $("body").append(div)
//     $(".blog").click(".blog", function(){
//         $(this).text("blargh")
//     })
// })

// $("body").append(`<input placeholder="Human Name"></input>`)
// $("body").append(`<button>Add Human</button>`)

// $("button").click(function(){
//     $("ul").append(`<li>${$("input").val()}</li>`)
//     $("input").val(" ")
//     $("li").click(function(){
//         $(this).remove()
//     })
// })

// $("body").append(`<div class=box></div>`)
// $("body").append(`<div class=box></div>`)


// $(".box").on("mouseover", function(){
//     $(".box").css("background-color", "pink")
//     $(this).css("background-color", "#8e44ad")
    
// })


// $(".item").click(function(){
//    if($(this).data().instock){
//     $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)
//    }
// })

// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]

//   for(let index in fruits){
//       let color = fruits[index].color
//       let name = fruits[index].name
//       $("#basket").append(`<div class=${color}>${name}</div>`)
//     //   $(`".${color}"`).css("color", `"${color}"`)
//   }
  
// $('#btn').click(alert('hi'))

const posts = [{name: "guy", text: "hi i'm guy"}, {name: "nuna", text: "hi i'm nuna"}]
for(let index in posts){
    
}


    












  
  
