import React,{useState} from 'react';
export default function Test(props) {
/**
 * bu kisimda öncelikli olarak baslangiic degerleri satatuse kaydettim.
 */
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [falseScor,setFalseScor] = useState(0);
/**
 * Cevabin dogru olup olmadigini kontorl eden fonksiyon
 * @param {*} isCorrect 
 */
const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }else{
        setFalseScor(falseScor+1);
    }
/**
 * Burda soru sayisi json legent uzunluguna ulasip olasimadigina bakiliyor.
 */
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.list.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};
/**
* Ekrana yansitilan kisim.
*/
return (
    <div> 
        <header><h1>Word Card Game</h1></header>
            {showScore ? (
            <div className='score-section'>
                You scored {score} out of {props.list.length}
            </div>
        ) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{props.list.length}
                        <div> <div id="true">True Scor:{score}</div><div id="false">False Scor:{falseScor}</div></div> 
                    </div>
                    <div className='question-text'>{props.list[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    {props.list[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
        )}

    </div>
    );
}