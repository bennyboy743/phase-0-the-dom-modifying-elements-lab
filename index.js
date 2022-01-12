// Write your code here!
//getting the ID that we need for the main
const removingMain = document.getElementById('main')
console.log(removingMain)

//removing the main 
removingMain.remove()

//making a new header 
const newHeader = document.createElement('h1')

//change the ID to victory
newHeader.id = 'victory'
// then we write to the innerHTML
newHeader.innerHTML = "Ben is the champion";





//then going to add it to the DOM
document.body.append(newHeader)