import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Start, Game, Result } from "./routes";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="start" element={<Start />} />
      <Route path="game" element={<Game />} />
      <Route path="result" element={<Result />} />
      <Route path="*" element={<Navigate to="start" />} />
    </Routes>
  </BrowserRouter>
);
