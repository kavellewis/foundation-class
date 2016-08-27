// alert("Hello")
//
// var bob = {
//   first_name: "Bob",
//   last_name: "Connor",
//   user_name: "bc14",
//   age: 5,
//   email: "bc@eml",
//   phone: 10,
//   full_name: function(){
//     return this.first_name +"🙈 "+ this.last_name
//   }
// }
//
// var full_name = bob.full_name()
// // alert(full_name)
//
// var hi =function(number_of_times){
//   while (number_of_times > 0){
//     alert("hi")
//     number_of_times = number_of_times -1
//   }
// }
// hi(5)
//
// var button_two = document.getElementById("2")
// button_two.addEventListener("click", function(){
//   alert("pressed")
// })
//
// var button_two = document.getElementById("2")
// var two_pressed = function(){
//   alert("pressed")
// }
// button_two.addEventListenr("click", two_pressed)

var two_button = document.getElementById("2")
var one_button = document.getElementById("1")
var display = document.getElementById("display")

two_button.addEventListener("click", function(){
  display.value = display.value + "2"
})

one_button.addEventListener("click", function(){
  display.value = display.value + "1"


})
var add_and_show= function(num1, num2) {
  var sum = num1+num2
  return sum

}

var result = add_and_show(1,2)
