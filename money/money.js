
const changeContainer = document.getElementById("change")
const coinType = document.getElementById("coin-type")
const count = document.getElementById("count")

const deleteCoin = coin => coin.remove()

const makeChange = (type, numCoins) => {
    for (let i = 0; i < numCoins; i++) {
        const coin = document.createElement("div")
        coin.classList.add(type)
        coin.addEventListener("click", () => deleteCoin(coin))
        changeContainer.append(coin)
    }
}

document.getElementById("submit").addEventListener('click', e => {
    e.preventDefault()
    const numCoins = +count.value
    const type = coinType.options[coinType.options.selectedIndex].value
    makeChange(type, numCoins)

})