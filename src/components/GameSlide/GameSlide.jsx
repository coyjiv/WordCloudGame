import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { WordButton } from "../WordButton/WordButton";
import { ScContainer } from "./styled";
import { useNavigate } from "react-router-dom";

export const GameSlide = ({
  title,
  allWords,
  correctArr,
  setScore,
  score,
  changeSlide,
  answersArr,
  setAnswers,
  slideIndex,
  length,
  username,
}) => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);
  const [pressed, setPressed] = useState(false);
  const wordsArr = allWords.map((word, index) => {
    return (
      <WordButton
        word={word}
        score={score}
        setScore={setScore}
        answersArr={answersArr}
        setAnswers={setAnswers}
        correctArr={correctArr}
        isChecking={isChecking}
        setPressed={setPressed}
        pressed={pressed}
        x={
          Math.random() * 10 * index === 0
            ? 15
            : index % 2 === 0
            ? index * 20
            : 10
        }
        y={
          Math.random() * 30 * index === 0
            ? 15 + index * 5
            : index % 2 === 0
            ? index * 2
            : 3
        }
        key={index}
      />
    );
  });
  return (
    <>
      <Heading capitalize>{title}</Heading>
      <ScContainer length={length}>{wordsArr}</ScContainer>
      <Button
        disabled={!pressed}
        name={slideIndex === length - 1 ? "finish game" : "check answers"}
        onClick={() => {
          setIsChecking(true);
          if (slideIndex === length - 1) {
            setTimeout(() => {
              navigate("../result", {
                state: {
                  username: username,
                  score: score,
                },
              });
            }, 1500);
          }
          changeSlide();
        }}
      />
    </>
  );
};
