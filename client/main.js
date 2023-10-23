const errCallback = err => console.log(err)
const goalCallback = ({ data: goals }) => displayGoals(goals)
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const motivationBtn = document.getElementById("motivationButton")
const form = document.querySelector('#form')
const goalsConatiner = document.querySelector('#goals-container')
const getAllGoals = () => axios.get("http://localhost:4000/api/goals/").then(goalCallback).catch(errCallback)
const createGoal = body => axios.post("http://localhost:4000/api/goals/", body).then(goalCallback).catch(errCallback)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}


function submitHandler(e) {
    e.preventDefault()
    let goal = document.querySelector('#goal')
    let finishDate = document.querySelector('#finishDate')
    let bodyObj = {
        goal: goal.value,
        finishDate: finishDate.value
    }
    createGoal(bodyObj)
    goal.value= ''
    finishDate.value= ''
}
function createGoalCard(goal) {
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<p class="goal">${goal.goal}</p>
    <p class="finishDate">${goal.finishDate}</p>
    button onclick="deleteGoal(${goal.id})">delete</button>
    `
    goalsConatiner.appendChild(goalCard)
}
function displayGoals(arr) {
    goalsConatiner.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGoalCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
motivationBtn.addEventListener('click', getMotivation)
getAllGoals()