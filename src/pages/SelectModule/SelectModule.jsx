import { useNavigate } from "react-router-dom";
import "./SelectModule.css";
import { FaTablets } from "react-icons/fa";

const SelectModule = () => {
  const navigate = useNavigate();

  return (
    <div className="select-module">
      <h1 className="app-title">
        PharmaReview PH <FaTablets className="tablets-icon" />
      </h1>
      <h2 className="welcome-message">
        Welcome! Please select a module to get started.
      </h2>
      <ul>
        <li
          onClick={() => {
            navigate("/module-1");
          }}
        >
          Module 1: Pharmaceutical Chemistry
        </li>
        <li
          onClick={() => {
            navigate("/module-2");
          }}
        >
          Module 2: Pharmacognosy
        </li>
        <li
          onClick={() => {
            navigate("/module-3");
          }}
        >
          Module 3: Practice of Pharmacy
        </li>
        <li
          onClick={() => {
            navigate("/module-4");
          }}
        >
          Module 4: Pharmacology and Pharmakokinetics
        </li>
        <li
          onClick={() => {
            navigate("/module-5");
          }}
        >
          Module 5: Pharmaceutics
        </li>
        <li
          onClick={() => {
            navigate("/module-6");
          }}
        >
          Module 6: Quality Assurance / Quality Control
        </li>
      </ul>
    </div>
  );
};

export default SelectModule;
