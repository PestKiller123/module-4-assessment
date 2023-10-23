const goals = require('./db.json')
let globalId = 2
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A fresh start will put you on your way.", "A faithful friend is a strong defense.", "A lifetime of happiness lies ahead of you.", "All your hard work will soon pay off."];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },
    getMotivation: (req, res) => {
        const motivation = ["When you have a dream, you've got to grab it and never let go.", "Nothing is impossible. The word itself says 'I'm possible!", "Success is not final, failure is not fatal: it is the courage to continue that counts."];
        let randomIndex = Math.floor(Math.random() * motivation.length);
        let randomMotivation = motivation[randomIndex];
        res.status(200).send(randomMotivation);
    },
    getGoal: (req, res) => res.status(200).send(goals),
    createGoal: (req, res) => {
        let { goal, finishDate } = req.body;
        newGoal = {
            id: globalId,
            goal,
            finishDate
        }
        goals.push(newGoal);
        globalId++
        res.status(200).send(goals);
    }
}