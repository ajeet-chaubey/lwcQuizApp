import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    selected ={} //for storing answers
    isSubmitted = false
    correctAnswers = 0

    myQuestions=[
        {
            id:"Q1",
            Question:"Which of the following is not a template loop?",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Q2",
            Question:"Which of the following is not a directive?",
            answers: {
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        },
        {
            id:"Q3",
            Question:"Which of the file is not valid in lws folder?",
            answers: {
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        }
    ]

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }

    get handleDisable(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    changeHandler(event){
        //console.log("name", event.target.name)
        //console.log("value", event.target.value)
        const{name,value} = event.target
        this.selected = {...this.selected,[name]:value}
    }

    submitHandler(event){
        event.preventDefault()
        let correctAns = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correctAns.length
        this.isSubmitted = true
    }

    resetHandler(event){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}