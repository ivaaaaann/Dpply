import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import PageTemplate from "./components/common/PageTemplate/PageTemplate";
import GlobalStyle from "./styles/globalStyle";

const Root = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PageTemplate>
          <GlobalStyle />
          <App />
        </PageTemplate>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Root;
