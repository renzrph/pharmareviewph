const QuestionTracker = ({ currentQuestionIndex, totalQuestions }) => {
  return (
    <div className="question-tracker">
      Question {currentQuestionIndex + 1} of {totalQuestions}
    </div>
  );
};

export default QuestionTracker;
