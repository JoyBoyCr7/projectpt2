//******************* */
// App State
//******************* */

const state = {
    player1: 0,
    player2: 0,
    which: true
}


let questions = []
//******************* */
// Main Dom Element
//******************* */

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")

const $p1score = $("#player1 h4")

const $p2score = $("#player2 h4")

//******************* */
// Functions
//******************* */
const chooseAnswer = (event, question) => {
    console.log(event)
    if (event.target.innerText === question.answer){
        if (state.which){
            state.player1++ 
            state.which = !state.which
            
        }else{
            state.player2++
            state.which = !state.which
            
        }
        setBoard(questions)
    }
    else{
        setBoard(questions)
        state.which = !state.which  
    }
    // testing who it is
    console.log(state.which)
    if (state.which){
        $("#currentplayer").text("player1")
    }
    else{
        $("#currentplayer").text("player2")
    }
}

const setBoard = (q) => {
    // Getting random question
    const randomindex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomindex]
    // Update Question 
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    // update player scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)
    $('li').off()
    $('li').on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    })

}

//******************* */
// Functions
//******************* */


//******************* */
// Main App Logic
//******************* */


console.log($p2score,$p1score)

const URL = "https://cdn.contentful.com/spaces/vsiaqw6lu8o7/environments/master/entries?access_token=nmTPlWcDwkdTOOKVZGRNdefqBjayBtu0jS1F4cieiGE&content_type=triviaQ"
$.ajax(URL)
.then((data) => {
    
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)
    setBoard(questions)

})


{
    let nbaPlayer = ''
    $("button").on('click', function(event){
        event.preventDefault();
        const choice =  $('#choice').val();
        nbaPlayer = choice

        // fetching API
        $.ajax(`https://www.balldontlie.io/api/v1/players/?search=${nbaPlayer}`)
        .then((response)=>{
            // Testing
            console.log(response)
            console.log(response.data)
            // Testing
            let weight = response.data[0].weight_pounds
            let height = response.data[0].height_feet
            let heightin = response.data[0].height_inches
            let firstName = response.data[0].first_name
            let lastName = response.data[0].last_name
            let team = response.data[0].team.full_name
    
        // testing
        console.log(`The Goat, ${firstName} ${lastName} has been summoned`)
        // testing
        
        /////// getting NBA player info to read on screen 
        if (height === null){
            $("#playerinfo").text(`${firstName} ${lastName} is a former NBA player of the ${team}.`)
        }
        else{
        $("#playerinfo").text(`${firstName} ${lastName} is a NBA player for the ${team}. He stands at ${height} feet ${heightin} inches tall and ${weight}lbs`)
        }
        })
        /////// getting NBA player info to read on screen

        
    })
};

//******************* */
// Main App Logic
//******************* */

//********** */
// current player
//*********** */
