import { useNavigate } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  const navigate = useNavigate();

  return <Routes />;
};

export default App;
