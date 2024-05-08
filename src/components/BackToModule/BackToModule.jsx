import "./BackToModule.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackToModule = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="back-to-module-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaArrowLeft /> Back to Module Selection
      </button>
    </>
  );
};

export default BackToModule;
