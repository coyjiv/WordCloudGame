import React, { useState } from "react";
import { lightTheme } from "../../constants/colors";
import { ScWord } from "./styled";
import { Tooltip } from "react-tippy";
import { Heading } from "../Heading/Heading";

export const WordButton = ({
  word,
  isChecking,
  setAnswers,
  answersArr,
  score,
  setScore,
  correctArr,
  pressed,
  setPressed,
  x,
  y,
}) => {
  const [isSelected, setSelected] = useState(false);
  const selection = () => {
    if (pressed === false) setPressed(!pressed);
    setSelected(!isSelected);
    setAnswers([...answersArr, word]);
    if (correctArr.includes(word) && !isSelected) {
      setScore(score + 1);
    } else if (correctArr.includes(word)) {
      setScore(score - 1);
      setAnswers(answersArr.filter((el) => el !== word));
    } else if (isSelected) {
      setAnswers(answersArr.filter((el) => el !== word));
    }
  };
  const tooltipContent = correctArr.includes(word) ? "Good" : "Bad";
  return (
    <Tooltip
      title={tooltipContent}
      html={
        <Heading
          color={
            correctArr.includes(word)
              ? lightTheme.correctCaption
              : lightTheme.wrongCaption
          }
          x={x}
          y={y + 10}
          children={tooltipContent}
        />
      }
      open={isChecking && answersArr.includes(word)}
    >
      <ScWord
        isChecking={isChecking}
        onClick={isChecking ? null : selection}
        isSelected={isSelected}
        x={x}
        y={y}
        style={
          isChecking
            ? answersArr.includes(word)
              ? correctArr.includes(word)
                ? { color: lightTheme.correct }
                : { color: lightTheme.wrong }
              : {}
            : {}
        }
      >
        {word}
      </ScWord>
    </Tooltip>
  );
};
