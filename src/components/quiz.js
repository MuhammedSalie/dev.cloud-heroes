import React, { useState } from 'react';
import quizData from './quizData';

function Quiz() {

  function generateRandom(maxLimit = quizData.length){
    let count = Math.random() * maxLimit;
    console.log(count); 
  
    count = Math.floor(count); 
  
    return count;
  }

  const [currentQuestion, setCurrentQuestion] = useState(generateRandom());
  const [currentCount, setCurrentCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);
  const currentMax = 15;
  
  const handleAnswerOptionClick = (option) => {
    setIsCorrect(null); // Reset for the next question
    setSelectedAnswer(""); // Reset selected answer
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    // Delay moving to the next question to allow the user to see feedback
    setTimeout(() => {
      setIsCorrect(null); // Reset for the next question
      setSelectedAnswer(""); // Reset selected answer
      const nextQuestion = generateRandom();
      const nextCount = currentCount +1;
      if (currentQuestion !== quizData.length-1){
      if (nextCount < currentMax) {
        setCurrentQuestion(nextQuestion);
        setCurrentCount(nextCount);
        setIsCorrect(null); // Reset for the next question
        setSelectedAnswer(""); // Reset selected answer
      } else {
        setShowScore(true);
      }
    } else {
        setCurrentQuestion(generateRandom());
        setCurrentCount(nextCount);
        setIsCorrect(null); // Reset for the next question
        setSelectedAnswer(""); // Reset selected answer
    }
    }, 5000); // Adjust time as needed
  };

  return (
    <div className='Quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {currentMax}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <h2 className="my-5 text-center">Practice quiz {currentQuestion}</h2>
              <span>Question {currentCount + 1}</span>/{currentMax}
            </div>
            <div className='question-text'>{quizData[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].options.map((option) => (
              <button 
                onClick={() => handleAnswerOptionClick(option)} 
                key={option}
                style={{ backgroundColor: selectedAnswer === option ? (isCorrect ? 'lightgreen' : 'pink') : '' }}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div style={{ marginTop: '10px' }}>
              {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
              <div className='explain-text'>{quizData[currentQuestion].explain}</div>
            </div>
             )
            }
        </>
      )}
    </div>
  );
}

export default Quiz;