import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Input } from "../components/Input/Input";
import { Layout } from "../components/Layout/Layout";

export const Start = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const onClick = () => {
    navigate("../game", {
      state: {
        username: nickname,
      },
    });
  };
  const inputValidation = () => true;
  const validateSetName = (name) => {
    return inputValidation() ? setNickname(name) : null;
  };
  return (
    <Layout gap={30}>
      <Heading size={36}>Wordcloud game</Heading>
      <Input
        placeholder="Enter your nickname here..."
        onChange={validateSetName}
      />
      <Button onClick={onClick} name="play" />
    </Layout>
  );
};
