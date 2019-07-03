$(".generator").click(function(){
    console.log($(this).closest(".processor").attr("id"))
    console.log($(this).closest(".computer").data().id)
})