const startQuiz = document.querySelector("button")
const questionDiv = document.querySelector(".questionBox");
const timerDiv = document.querySelector(".timer")
const mainDiv = document.querySelector(".welcome")

const optionsDiv = document.querySelectorAll(".answer")
const questn = document.querySelector(".question")


questionDiv.style.display = "none"
const questions = ["2+2", "3*3+3-3", "4+4+4*0+4"]
const options = [
    [0, 3, 1, 4],
    [3, 33, 9, 12],
    [4, 0, 12, 8]
];

const actualAnswers = [4, 9, 12];
let randomOrder = [];
let timer = 10;
let currentQuestionIndex = 0;
let interval;
let userAnswers = [];

startQuiz.addEventListener("click", startTheQuiz)

function startTheQuiz(e) {
mainDiv.style.display = "none"
questionDiv.style.display = "block"

handleQuestion()  
 
}



const handleQuestion = () => {
    questn.innerHTML = questions[currentQuestionIndex]
 
      
         
        for(const option of optionsDiv) {
         let random = []   
         let  randomNumber = function() {Math.floor(Math.random() * 4) }

         randomNumber.push(random)
         option.nextElementSibling.innerText = options[currentQuestionIndex][randomNumber]
        console.log(options[currentQuestionIndex][randomNumber]) 
        }
    

    
}