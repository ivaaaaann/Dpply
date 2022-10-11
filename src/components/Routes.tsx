import { Route, Routes as Switch } from "react-router-dom";
import AuthLoadingPage from "../pages/AuthLoadingPage";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import ReadPage from "../pages/ReadPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<MainPage />} />
      <Route path="/read/:id" element={<ReadPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/loading" element={<AuthLoadingPage />} />
    </Switch>
  );
};

export default Routes;
