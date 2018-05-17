import {
  UPDATE_USER_INPUT,
  CLEAR_USER_INPUT,
  START_QUIZ,
  STOP_QUIZ,
  SHOW_ANSWER,
  SCORE_POINT,
  LOAD_NEXT_QUESTION
} from "./actionCreators";
import { drawQuestions, normalizeAnswer } from "./utils";

export const initialState = {
  isQuizRunning: false,
  isAnswerVisible: false,
  questionsSet: [],
  currentQuestion: 0,
  score: 0,
  userInput: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INPUT:
      return {
        ...state,
        userInput: normalizeAnswer(action.payload.userInput),
        isAnswerVisible: false
      };
    case CLEAR_USER_INPUT:
      return {
        ...state,
        userInput: ""
      };
    case START_QUIZ:
      return {
        ...state,
        isQuizRunning: true,
        questionsSet: drawQuestions(),
        currentQuestion: 0,
        score: 0,
        isAnswerVisible: false
      };
    case STOP_QUIZ:
      return {
        ...state,
        isQuizRunning: false
      };
    case SHOW_ANSWER:
      return {
        ...state,
        isAnswerVisible: true
      };
    case SCORE_POINT:
      return {
        ...state,
        score: state.score + 1
      };
    case LOAD_NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        isAnswerVisible: false
      };
    default:
      return state;
  }
};
