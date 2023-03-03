import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./components/App";
import PageTemplate from "./components/Common/PageTemplate/PageTemplate";
import GlobalStyle from "./styles/globalStyle";

const Root = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <PageTemplate>
            <GlobalStyle />
            <App />
          </PageTemplate>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
