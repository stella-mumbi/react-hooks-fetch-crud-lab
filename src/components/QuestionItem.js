import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
  const deleteQuestion = (e) => {
    console.log(e.target.id);
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={deleteQuestion}>
        Delete Question
      </button>
    </li>
  );
}

export default QuestionItem;