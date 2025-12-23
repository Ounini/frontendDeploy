import { useQuestion } from "../context/QuestionContext2";

function Input() {
  const { questions } = useQuestion();
  console.log(questions);

  const handleAnswer = (checked, value, correctAnswer) => {
    if (checked === true && value === correctAnswer) {
      console.log("Correct");
    } else {
      console.log("You are wrong");
    }
  };

  return (
    <ol>
      {questions.map((quest) => (
        <li key={quest.id}>
          <p>{quest.quest}</p>
          {quest.ans.map((an, index) => (
            <div key={index}>
              <input
                type="radio"
                name="an"
                value={an}
                onClick={(e) =>
                  handleAnswer(
                    e.target.checked,
                    e.target.value,
                    quest.correctAnswer
                  )
                }
              />
              <label>{an}</label>
            </div>
          ))}
        </li>
      ))}
    </ol>
  );
}

export default Input;
