import sample from "lodash/sample";
import times from "lodash/times";
import capitalize from "lodash/capitalize";
import { MAJOR_SCALES, QUIZ_LENGTH } from "./constants";

export const sampleQuestions = () =>
  times(QUIZ_LENGTH, () => {
    const drewScale = sample(MAJOR_SCALES);
    const scale = MAJOR_SCALES.indexOf(drewScale);
    const note = drewScale.notes.indexOf(sample(drewScale.notes));
    return [scale, note];
  });

export const parseQuestions = questionsSet =>
  questionsSet.map(([scale, note]) => {
    const scaleName = MAJOR_SCALES[scale].name;
    const noteNumber = formatNumber(note + 1);
    const correctAnswer = MAJOR_SCALES[scale].notes[note];
    return { scaleName, noteNumber, correctAnswer };
  });

export const drawQuestions = () => parseQuestions(sampleQuestions());

export const normalizeAnswer = answer => capitalize(answer);

export const formatNumber = number => {
  switch (number) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${number}th`;
  }
};
