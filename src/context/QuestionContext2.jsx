import { createContext, useContext } from "react";

export const QuestionContext = createContext();

export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuest must be used within the QuestionProvider");
  }
  return context;
};
