export const UPDATE_USER_INPUT = "UPDATE_USER_INPUT";
export const CLEAR_USER_INPUT = "CLEAR_USER_INPUT";
export const START_QUIZ = "START_QUIZ";
export const STOP_QUIZ = "STOP_QUIZ";
export const SCORE_POINT = "SCORE_POINT";
export const LOAD_NEXT_QUESTION = "LOAD_NEXT_QUESTION";

export const updateUserInput = userInput => ({
  type: UPDATE_USER_INPUT,
  payload: {
    userInput
  }
});

export const clearUserInput = () => ({
  type: CLEAR_USER_INPUT
});

export const startQuiz = () => ({
  type: START_QUIZ
});

export const stopQuiz = () => ({
  type: STOP_QUIZ
});

export const scorePoint = () => ({
  type: SCORE_POINT
});

export const loadNextQuestion = () => ({
  type: LOAD_NEXT_QUESTION
});
