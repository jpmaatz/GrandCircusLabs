let total = 0
const totalEle = document.getElementById("total")
const lightbulb = document.getElementById("lightbulb")

const increaseTotal = price => {
    total += price
    totalEle.innerText = total.toFixed(2)
}

increasedTotal()


document
    .getElementById("off")
    .addEventListener("click", () => {
        lightbulb.classList.add("off")

})

document
    .getElementById("on")
    .addEventListener("click", () => {
        lightbulb.classList.remove("off")
})

document
    .getElementById("toggle")
    .addEventListener("click", () => {
        lightbulb.classList.toggle("off")
})

document
    .getElementById("end")
    .addEventListener("click", () => {
        lightbulb.remove()
        const buttons = document.getElementById("buttons")
        const originals = buttons.children
        for (const button of buttons.children) {
            button.disabled = true
            const parent = button.parentNode
            const clone = button.cloneNode()
            buttons.replaceChild(button, clone)
        }
    })