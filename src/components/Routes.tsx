import { Route, Routes as Switch } from "react-router-dom";
import AuthLoadingPage from "../pages/AuthLoadingPage";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import ReadPage from "../pages/ReadPage";
import WritePage from "../pages/WritePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<MainPage />} />
      <Route path="/read/:id" element={<ReadPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/loading" element={<AuthLoadingPage />} />
      <Route path="/write" element={<WritePage />} />
    </Switch>
  );
};

export default Routes;
