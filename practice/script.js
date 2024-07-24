
// const textEl = document.getElementById("text")
// const sizeEl = document.getElementById("size")
// const checkEl = document.getElementById("check")
// const container = document.getElementById("container")

// const makeShape = () => {
//     const shape = document.createElement("div")
//     shape.innerText = textEl.value
//     const size = sizeEl.value + "px"
//     shape.style.width = size 
//     shape.style.height = size
//     shape.style.lineHeight = size

//     shape.addEventListener('click', () => {
//         shape.classList.toggle("highlighted")
//     })

//     if (checkEl.checked) shape.className = "shape circle"
//     else shape.className = "shape"
//     textEl.value = ""
//     sizeEl.value = ""
//     /* shape.className = checkEl.checked 
//         ? "shape circle"
//         : "shape"
//     */
//     checkEl.checked = false
//     container.append(shape)
// }





// const form = document.querySelector("#form")
// const text = document.querySelector("#text")
// const checkbox = document.querySelector("#cxbx")
// const number = document.querySelector("#size")
// const container = document.querySelector("#container")
// form.addEventListener("submit",(e) =>{
//     e.preventDefault()
//     const box = document.createElement("div")
//     box.classList.add("shape")
//     box.innerText = text.value 
//     box.style.width = number.value + "px"  
//     box.style.height = number.value + "px"  
//     box.style.lineHeight = number.value + "px"  
//     if (cxbx.checked === true) {
//         box.classList.add("circle")
//     }
//     container.append(box)
// })

const textEl = document.getElementById("text")
const sizeEl = document.getElementById("size")
const checkEl = document.getElementById("check")
const container = document.getElementById("container")

const makeShape = () => {
    const shape = document.createElement("div")
    shape.innerText = textEl.value
    const size = sizeEl.value + "px"
    shape.style.width = size
    shape.style.height = size
    shape.style.lineHeight = size
    shape.addEventListener("click", () => {
		shape.classList.toggle("highlighted")
	})
    if (checkEl.checked) shape.className = "shape circle"
	else shape.className = "shape"
	textEl.value = ""
	sizeEl.value = ""
	checkEl.checked = false
    container.append(shape)
}







