import { Route, Routes as Switch } from "react-router-dom";
import AdminMainPage from "../pages/AdminMainPage";
import AuthLoadingPage from "../pages/AuthLoadingPage";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import ReadPage from "../pages/ReadPage";
import WritePage from "../pages/WritePage";
import AuthHoc from "./Hoc/AuthHoc";

const Routes = () => {
  const AuthWritePage = AuthHoc(WritePage, "STUDENT");
  const AuthProfilePage = AuthHoc(ProfilePage, "STUDENT");
  const AuthAdminMainPage = AuthHoc(AdminMainPage, "ADMIN");

  return (
    <Switch>
      <Route path="/" element={<MainPage />} />
      <Route path="/read/:id" element={<ReadPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/loading" element={<AuthLoadingPage />} />
      <Route path="/write" element={<AuthWritePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/admin" element={<AuthAdminMainPage />} />
    </Switch>
  );
};

export default Routes;
