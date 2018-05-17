import React from "react";
import { QuizContainer } from "./index";
import { shallow } from "enzyme";

describe("verifyAnswer", () => {
  const callVerifyAnswerWithProps = (props = {}) => {
    const component = shallow(
      <QuizContainer
        stopQuiz={jest.fn()}
        loadNextQuestion={jest.fn()}
        scorePoint={jest.fn()}
        showAnswer={jest.fn()}
        {...props}
      />
    );

    component.instance().verifyAnswer();

    return component.instance();
  };

  test("if answer is correct confirm it and score point", () => {
    const container = callVerifyAnswerWithProps({
      currentQuestion: 0,
      isAnswerCorrect: true
    });
    const {
      stopQuiz,
      loadNextQuestion,
      scorePoint,
      showAnswer
    } = container.props;

    expect(stopQuiz).not.toHaveBeenCalled();
    expect(loadNextQuestion).not.toHaveBeenCalled();
    expect(scorePoint).toHaveBeenCalled();
    expect(showAnswer).toHaveBeenCalled();
  });

  test("if answer is incorrect show the correct one", () => {
    const container = callVerifyAnswerWithProps({
      currentQuestion: 0,
      isAnswerCorrect: false
    });
    const {
      stopQuiz,
      loadNextQuestion,
      scorePoint,
      showAnswer
    } = container.props;

    expect(stopQuiz).not.toHaveBeenCalled();
    expect(loadNextQuestion).not.toHaveBeenCalled();
    expect(scorePoint).not.toHaveBeenCalled();
    expect(showAnswer).toHaveBeenCalled();
  });

  test("if question is answered go to the next one", () => {
    const container = callVerifyAnswerWithProps({
      currentQuestion: 0,
      isAnswerVisible: true
    });
    const {
      stopQuiz,
      loadNextQuestion,
      scorePoint,
      showAnswer
    } = container.props;

    expect(stopQuiz).not.toHaveBeenCalled();
    expect(loadNextQuestion).toHaveBeenCalled();
    expect(scorePoint).not.toHaveBeenCalled();
    expect(showAnswer).not.toHaveBeenCalled();
  });

  test("stop quiz on last question", () => {
    const container = callVerifyAnswerWithProps({ currentQuestion: 9 });
    const {
      stopQuiz,
      loadNextQuestion,
      scorePoint,
      showAnswer
    } = container.props;

    expect(stopQuiz).toHaveBeenCalled();
    expect(loadNextQuestion).not.toHaveBeenCalled();
    expect(scorePoint).not.toHaveBeenCalled();
    expect(showAnswer).not.toHaveBeenCalled();
  });
});
