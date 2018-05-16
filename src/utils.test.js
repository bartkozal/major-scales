import {
  drawQuestions,
  parseQuestions,
  formatNumber,
  normalizeAnswer
} from "./utils";

test("drawQuestions", () => {
  const questionsSet = drawQuestions();
  expect(questionsSet).toHaveLength(10);
  expect(questionsSet[0]).toHaveLength(2);
  expect(questionsSet[4]).toHaveLength(2);
});

test("parseQuestions", () => {
  const questionsSet = [[3, 5], [6, 2], [8, 0]];
  expect(parseQuestions(questionsSet)).toContainEqual(
    { correctAnswer: "F#", noteNumber: "6th", scaleName: "A Major" },
    { correctAnswer: "A#", noteNumber: "3rd", scaleName: "F# Major" },
    { correctAnswer: "Db", noteNumber: "1st", scaleName: "Db Major" }
  );
});

test("normalizeAnswer", () => {
  const testCases = [
    ["g", "G"],
    ["g#", "G#"],
    ["gb", "Gb"],
    ["G#", "G#"],
    ["Gb", "Gb"]
  ];

  testCases.forEach(([input, returnedValue]) =>
    expect(normalizeAnswer(input)).toEqual(returnedValue)
  );
});

test("formatNumber", () => {
  const testCases = [
    [1, "1st"],
    [2, "2nd"],
    [3, "3rd"],
    [5, "5th"],
    [7, "7th"]
  ];

  testCases.forEach(([input, returnedValue]) =>
    expect(formatNumber(input)).toEqual(returnedValue)
  );
});
