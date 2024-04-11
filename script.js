const adviceEl = document.getElementById("advice")
const buttonEl = document.getElementById("btn")
const adviceIdEL = document.getElementById("adviceId")
const apiUrl = "https://api.adviceslip.com/advice"

const fetchUrl = () => {
    fetch(apiUrl)
    .then((response)  => {
        response.json().then((data) => {
            console.log(data)
            adviceEl.textContent =`"${data.slip.advice}"`
            adviceIdEL.textContent = ` Advice #${data.slip.id}`
        })
    })
}
buttonEl.addEventListener("click", fetchUrl)
fetchUrl()