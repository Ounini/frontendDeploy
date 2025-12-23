import { QuestionContext } from "./QuestionContext2";

// export const QuestionContext =  createContext()

export const QuestionProvider = ({ children }) => {
  const questions = [
    {
      id: 1,
      quest: "What your name",
      ans: ["Nathan", "Gift", "Wonder"],
      correctAnswer: "Nathan",
    },
    {
      id: 2,
      quest: "What your name",
      ans: ["Nathan", "Gift", "Wonder"],
      correctAnswer: "Gift",
    },
  ];

  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
};
