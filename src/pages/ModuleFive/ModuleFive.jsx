import { useState, useEffect } from "react";
import BackToModule from "../../components/BackToModule/BackToModule";
import Result from "../../components/Result/Result";
import NextButton from "../../components/NextButton/NextButton";
import QuestionTracker from "../../components/QuestionTracker/QuestionTracker";

const ModuleFive = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answersDisabled, setAnswersDisabled] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/src/assets/module5.json");
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const selectAnswer = (choice) => {
    setSelectedAnswer(choice);
    setAnswersDisabled(true);
  };

  const isCorrectAnswer = (choice) => {
    return choice === questions[currentQuestionIndex].correctAnswer;
  };

  const goToNextQuestion = () => {
    // If the selected answer is correct, increment the correctAnswersCount
    if (isCorrectAnswer(selectedAnswer)) {
      setCorrectAnswersCount((count) => count + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
    setAnswersDisabled(false);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedAnswer(null);
    setAnswersDisabled(false);
  };

  const totalQuestions = questions.length;

  // Check if all questions have been answered
  const allQuestionsAnswered = currentQuestionIndex === totalQuestions;

  return (
    <div className="container">
      <BackToModule />
      {!allQuestionsAnswered && (
        <QuestionTracker
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
        />
      )}
      <h2 className="module-title">Module 5: Pharmaceutics</h2>
      {allQuestionsAnswered ? (
        <Result
          correctAnswersCount={correctAnswersCount}
          totalQuestions={totalQuestions}
        />
      ) : (
        <div>
          {questions.length > 0 && (
            <div>
              <p className="question">
                {questions[currentQuestionIndex].question}
              </p>
              <ul className="choices">
                {questions[currentQuestionIndex].choices.map(
                  (choice, choiceIndex) => (
                    <li
                      key={choiceIndex}
                      onClick={() => !answersDisabled && selectAnswer(choice)}
                      className={
                        selectedAnswer === choice
                          ? isCorrectAnswer(choice)
                            ? "correct"
                            : "incorrect"
                          : ""
                      }
                      disabled={answersDisabled}
                    >
                      {choice}
                    </li>
                  )
                )}
              </ul>
              {selectedAnswer && (
                <div>
                  <p className="correct-answer">
                    Correct Answer:{" "}
                    {questions[currentQuestionIndex].correctAnswer}
                  </p>
                  <p className="rationale">
                    {questions[currentQuestionIndex].rationale}
                  </p>
                </div>
              )}
              <div className="buttons">
                {/* Prev Btn */}
                <NextButton
                  goToNextQuestion={goToNextQuestion}
                  selectedAnswer={selectedAnswer}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ModuleFive;
