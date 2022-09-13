import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import PageTemplate from "./components/common/PageTemplate/PageTemplate";
import ThemeProviderContainer from "./components/common/ThemeProviderContainer/ThemeProviderContainer";

const Root = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderContainer>
        <BrowserRouter>
          <PageTemplate>
            <App />
          </PageTemplate>
        </BrowserRouter>
      </ThemeProviderContainer>
    </QueryClientProvider>
  );
};

export default Root;
