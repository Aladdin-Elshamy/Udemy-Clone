import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import GameDevelopment from "../pages/GameDevelopment";
import RootLayout from "../pages/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<GameDevelopment />} />
    </Route>
  )
);
