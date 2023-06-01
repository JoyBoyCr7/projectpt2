//******************* */
// App State
//******************* */

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}
}

//******************* */
// Main Dom Element
//******************* */

const question = $("#question")
const a = $("a")
const b = $("#b")
const c = $("#c")
const d = $("#d")
console.log($('h1'))
const p1score = document.querySelector("#player1 h4")

const p2score = document.querySelector("#player2 h4")

//******************* */
// Functions
//******************* */

//******************* */
// Main App Logic
//******************* */


console.log(p2score,p1score)

// const URL = "https://cdn.contentful.com/spaces/vsiaqw6lu8o7/environments/master/entries?access_token=nmTPlWcDwkdTOOKVZGRNdefqBjayBtu0jS1F4cieiGE&content_type=triviaQ"
// $.ajax(URL)
// .then((data) => {
//     console.log(data)
// })



