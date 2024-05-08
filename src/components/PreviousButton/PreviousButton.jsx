import "./PreviousButton.css";

const PreviousButton = ({ goToPreviousQuestion, currentQuestionIndex }) => {
  return (
    <button
      className="previous-button"
      onClick={goToPreviousQuestion}
      disabled={currentQuestionIndex === 0}
    >
      Previous
    </button>
  );
};

export default PreviousButton;
