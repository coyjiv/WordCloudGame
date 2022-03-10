import React, { useState, useEffect, useCallback } from "react";
import { GameSlide } from "../GameSlide/GameSlide";

export const GameSlider = ({ data, username }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answersArr, setAnswers] = useState([]);
  const changeSlide = useCallback(
    (clear) => {
      const timeout = setTimeout(() => setSlideIndex(slideIndex + 1), 3000);
      return clear ? clearTimeout(timeout) : null;
    },
    [slideIndex]
  );

  useEffect(() => {
    return () => {
      changeSlide(true);
    };
  }, [changeSlide]);

  const gameSlidesArr = data.map((object, index) => (
    <GameSlide
      title={object.question}
      allWords={object.all_words}
      correctArr={object.good_words}
      key={index}
      changeSlide={changeSlide}
      setScore={setScore}
      answersArr={answersArr}
      setAnswers={setAnswers}
      slideIndex={slideIndex}
      length={data.length}
      score={score}
      username={username}
    />
  ));

  return <>{gameSlidesArr[slideIndex]}</>;
};
