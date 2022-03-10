import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Layout } from "../components/Layout/Layout";
import { lightTheme } from "../constants/colors";

export const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state == null) navigate("/start");
    return () => {};
  }, [state, navigate]);

  return (
    state && (
      <Layout gap={20}>
        <Heading>Congratulations, {state.username}!</Heading>
        <Heading>Your score :</Heading>
        <Heading color={lightTheme.primary}>{state.score} points</Heading>
        <Button
          name="Play again"
          onClick={() =>
            navigate("../start", { state: { username: state.username } })
          }
        />
      </Layout>
    )
  );
};
