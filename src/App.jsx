import { useState } from "react";

import "./App.css";

function App() {
  const [germanGPA, setgermanGPA] = useState("");
  const [maxGpa, setmaxGpa] = useState("");
  const [minGpa, setminGpa] = useState("");
  const [cGpa, setcGpa] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setgermanGPA(((cGpa - maxGpa) / (minGpa - maxGpa)) * 3 + 1);
  };
  return (
    <>
      <h1>German GPA Calulator</h1>
      {/* <p>
        Enter the maximum grade, the minimum passing grade, and your current
        overall grade in the grading system of your university. The result is
        the equivalent to your grade in the German grading system, where 1.0 is
        the maximum grade and 4.0 the minimum passing grade. Please note:
        Internationally, grading systems used at institutions of higher
        educations may differ substantially. The result given here is
        non-binding, as this grade converter can only provide a general first
        estimation.
      </p> */}
      <form>
        <label htmlFor="maxGpa">Maximum grade at your university</label>
        <br />
        <input
          type="text"
          name="maxGPA"
          id="maxGPA"
          value={maxGpa}
          onChange={(e) => setmaxGpa(e.target.value)}
        />
        <br />
        <label htmlFor="minGPA">Minimum passing grade at your university</label>
        <br />
        <input
          type="text"
          name="minGPA"
          id="minGPA"
          value={minGpa}
          onChange={(e) => setminGpa(e.target.value)}
        />
        <br />
        <label htmlFor="cGpa">
          Your current overall grade at your university(CGPA)
        </label>
        <br />
        <input
          type="text"
          name="cGpa"
          id="cGPA"
          value={cGpa}
          onChange={(e) => setcGpa(e.target.value)}
        />
        <br />
        <p>
          <strong>Your grade in the German system</strong>
        </p>
        <p className="calculatedGPA">{germanGPA}</p>
        <button onClick={handleSubmit}>Convert</button>
      </form>
    </>
  );
}

export default App;
