// select all the needed elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const timeDiv = document.getElementById("time");

// create the questions
let questions = [
    {
        question : "What is the best selling album of all time?",
        choiceA : "Thriller by Michael Jackson(1982)",
        choiceB : "Come on over by Shania Twain(1997)",
        choiceC : "Bat out of hell by Meat Loaf(1977)",
        choiceD : "The dark side of the moon by Pink Floyd(1973)",
        correct : "A"
    },{
        question : "What is the name of The Beatles' first album?",
        choiceA : "With The Beatles",
        choiceB : "Rubber Soul",
        choiceC : "Revolver",
        choiceD : "Please Please Me",
        correct : "D"
    },{
        question : " 'Crazy in Love' was the first solo No. 1 for which singer?",
        choiceA : "Shakira",
        choiceB : "Beyonce",
        choiceC : "Britney Spears",
        choiceD : "Mariah Carey",
        correct : "B"
    },{
        question : "Who was the most streamed artist on Spotify in 2019?",
        choiceA : "Drake",
        choiceB : "Ed Sheeran",
        choiceC : "Post Malone",
        choiceD : "The Chainsmokers",
        correct : "C"
    },{
        question : "What is the longest leading No 1 single in the billboard hot 100 ?",
        choiceA : "'Despacito' by Luis Fonsi & Daddy Yankee featuring Justin Bieber",
        choiceB : "'Uptown Funk' by Mark Ronson & Bruno Mars",
        choiceC : "'Old Town Road' by Lil Nas X & Billy Ray Cyrus",
        choiceD : "'Shape Of You' by Ed Sheeran ",
        correct : "C"
    },{
        question : "Who is the youngest artist to win the Grammy for Album of the Year ",
        choiceA : "Ariana Grande",
        choiceB : "Billie Ellish",
        choiceC : "Justin Bieber",
        choiceD : "Madison Beer",
        correct : "B"
    },{
        question : "What is the most award winning Metal band?",
        choiceA : "Mettalica",
        choiceB : "Slipknot",
        choiceC : "Lamb Of God",
        choiceD : "Korn",
        correct : "A"
    },{
        question : "Who was ranked as the number 1 dj in the world by DJ mag in 2020",
        choiceA : "Hardwell",
        choiceB : "The Chainsmokers",
        choiceC : "Kygo",
        choiceD : "Martin Garrix",
        correct : "D"
    },{
        question : "Who won the grammy award for best rap performance in 2020?",
        choiceA : " Nipsey Hussle",
        choiceB : "J Cole",
        choiceC : "DaBaby",
        choiceD : "Cardi B",
        correct : "A"
    },{
        question : "Which band recorded the theme song to Friends?",
        choiceA : "The Cranberries",
        choiceB : "The Rembrandts",
        choiceC : "U2",
        choiceD : "ABBA",
        correct : "B"
    }
];

// create  variables related to the quiz

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score1 = 0;
let score2 = 0;
var timeTaken=0;

// render a question
function showQuestion(){
    let q = questions[runningQuestion];
    // render the four choices
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start the quiz and display the questions
function startQuiz(){
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    Progress();
    renderCounter();
    timer = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function Progress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
        timeTaken++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            showQuestion();
        }else{
            // end the quiz and show the score
            quiz.style.display = "none"; // NEW
            clearInterval(timer);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score1+=2;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        score2-=1;
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestion();
    }else{

        clearInterval(timer);
        scoreRender();
    }
}

// if the answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#038D41";

}

// if the answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#c22929";

}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    quiz.style.display = "none"; // NEW
    // calculate the total marks scored by the user
    const total =  score1 + score2

    scoreDiv.innerHTML += "<p> Your Total Is "+ total +"</p>";
    // Display the time taken to complete the quiz
    timeDiv.innerHTML += "<p> Time taken is "+ timeTaken +" seconds </p>";
    //Changing the background colour according to the given score
    if(total>15&&total<=20){
        document.body.style.backgroundColor="green"
    }
    else if(total>10&&total<=15){
        document.body.style.backgroundColor="blue"
    }
    else if(total>5&&total<=10){
        document.body.style.backgroundColor="yellow"
    }
    else{
        document.body.style.backgroundColor="red"
    }
}

// -------------------------------------  Footer  ---------------------------------------------
function signInBtnClicked() {
    var userEmail = document.getElementById("newsletterEmailTextField").value;
    if (userEmail.trim() === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for joining with us.");
    }
}

