'use client';

import { useState } from 'react'
import { quiz } from '../../quiz/data/questions';
import './quiz.css';
import QuestionCard from '../QuestionCard/QuestionCard';
import { Result } from 'postcss';
import ResultsCard from '../ResultsCard/ResultsCard';
import BonusQuestionCard from '../BonusQuestionCard.tsx/BonusQuestionCard';

const QuizContainer = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [showBonusQuestion, setShowBonusQuestion] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz;
  const { correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null);

    setResult((prev) =>
      selectedAnswer
        ? { ...prev, score: prev.score + 1, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  }

  const onClickPrev = () => {
    setActiveQuestion((prev) => prev - 1);
    setResult((prev) => ({ ...prev, score: prev.score - 1 }));
    setSelectedAnswerIndex(null);
  }

  const onAnswerSelected = (answer: string, index: number) => {
    setSelectedAnswerIndex(index);

    if (answer === correctAnswer) {
      return setSelectedAnswer(true);
    }
    
    setSelectedAnswer(false);
  }

  return (
    <section className="quiz-container">
      {!showResult ? (
        <>
        {showBonusQuestion ? (
            <BonusQuestionCard />
        ) : (
            <QuestionCard 
              questions={questions}
              questionNext={onClickNext}
              questionPrev={onClickPrev}
              onAnswerSelected={onAnswerSelected}
              selectedAnswerIndex={selectedAnswerIndex}
              activeQuestion={activeQuestion}
              questionCount={questions.length} 
            />
        )}
        </>
      ) : (
          <ResultsCard 
              questionCount={questions.length}
              result={result}
              setShowBonusQuestion={setShowBonusQuestion}
              setShowResult={setShowResult}
          />
      )}
    </section>
  );

      }
      
export default QuizContainer;