import rootReducer, { initialState } from "./state";
import {
  updateUserInput,
  clearUserInput,
  startQuiz,
  stopQuiz,
  showAnswer,
  scorePoint,
  loadNextQuestion
} from "./actionCreators";

test("updateUserInput", () => {
  const action = updateUserInput("foo");
  const reducer = rootReducer(initialState, action);

  expect(reducer).toMatchObject({
    userInput: "Foo",
    isAnswerVisible: false
  });
});

test("clearUserInput", () => {
  const action = clearUserInput();
  const reducer = rootReducer({ ...initialState, userInput: "foo" }, action);

  expect(reducer).toMatchObject({
    userInput: ""
  });
});

test("startQuiz", () => {
  const action = startQuiz();
  const reducer = rootReducer(initialState, action);

  expect(reducer).toMatchObject({
    isQuizRunning: true,
    isAnswerVisible: false,
    currentQuestion: 0,
    score: 0
  });
  expect(reducer.questionsSet).toHaveLength(10);
});

test("stopQuiz", () => {
  const action = stopQuiz();
  const reducer = rootReducer({ ...initialState, isQuizRunning: true }, action);

  expect(reducer).toMatchObject({
    isQuizRunning: false
  });
});

test("showAnswer", () => {
  const action = showAnswer();
  const reducer = rootReducer(initialState, action);

  expect(reducer).toMatchObject({
    isAnswerVisible: true
  });
});

test("scorePoint", () => {
  const action = scorePoint();
  const reducer = rootReducer({ ...initialState, score: 7 }, action);

  expect(reducer).toMatchObject({
    score: 8
  });
});

test("loadNextQuestion", () => {
  const action = loadNextQuestion();
  const reducer = rootReducer(
    { ...initialState, currentQuestion: 3, showAnswer: true },
    action
  );

  expect(reducer).toMatchObject({
    currentQuestion: 4,
    isAnswerVisible: false
  });
});
