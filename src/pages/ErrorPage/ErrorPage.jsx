import "./ErrorPage.css";
import { FaFrown } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="error-message">
      <FaFrown className="frown-icon" />
      <h1>404</h1>
      <strong>Page Not Found</strong>
    </div>
  );
};

export default ErrorPage;
