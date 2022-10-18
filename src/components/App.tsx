import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants/token/token.constant";
import token from "../lib/token/token";
import Routes from "./Routes";

const App = () => {
  const navigate = useNavigate();

  return <Routes />;
};

export default App;
