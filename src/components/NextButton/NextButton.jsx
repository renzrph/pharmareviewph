import "./NextButton.css";

const NextButton = ({ goToNextQuestion, selectedAnswer }) => {
  return (
    <button
      className="next-button"
      onClick={goToNextQuestion}
      disabled={!selectedAnswer}
    >
      Next
    </button>
  );
};

export default NextButton;
