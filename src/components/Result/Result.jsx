import "./Result.css";

const Result = ({ correctAnswersCount, totalQuestions }) => {
  return (
    <div className="result">
      <h3>Result</h3>
      <p>
        You answered{" "}
        <strong className="correct-answers-count">{correctAnswersCount}</strong>{" "}
        / {totalQuestions} questions.
      </p>
    </div>
  );
};

export default Result;
