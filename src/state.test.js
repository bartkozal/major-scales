import rootReducer, { initialState } from "./state";
import {
  updateUserInput,
  clearUserInput,
  startQuiz,
  stopQuiz,
  scorePoint,
  loadNextQuestion
} from "./actionCreators";

test("updateUserInput", () => {
  const action = updateUserInput("foo");
  const reducer = rootReducer(initialState, action);

  expect(reducer).toMatchObject({
    userInput: "Foo"
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

test("scorePoint", () => {
  const action = scorePoint();
  const reducer = rootReducer(initialState, action);

  expect(reducer).toMatchObject({
    score: 1
  });
});

test("loadNextQuestion", () => {
  const action = loadNextQuestion();
  const reducer = rootReducer(initialState, action);

  expect(reducer).toMatchObject({
    currentQuestion: 1
  });
});
