import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GameSlider } from "../components/GameSlider/GameSlider";
import { Layout } from "../components/Layout/Layout";
import { data } from "../constants/mockData";

export const Game = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state == null) navigate("/start");
    return () => {};
  }, [state, navigate]);
  return (
    state && (
      <Layout pt={120} gap={10}>
        <GameSlider username={state.username} data={data} />
      </Layout>
    )
  );
};
