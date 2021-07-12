import React from "react";
import { Provider } from "react-redux";
import store from "store";
import {
  BreadcrumbContainer,
  Breadcrumb,
  PageLayout,
  GaivotaUIProvider,
} from "@gaivota-frontend/gaivota-ui";
import { t } from "utils/Translation";
import { useLocation, useNavigate } from "react-router-dom";
import Router from "./router";
import { ToastProvider } from "services/ToastService";

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Provider store={store}>
        <GaivotaUIProvider translateFunction={t}>
          <PageLayout>
            <BreadcrumbContainer>
              <Breadcrumb navigate={navigate} pathname={location.pathname} />
            </BreadcrumbContainer>
            <Router />
          </PageLayout>
          <ToastProvider />
        </GaivotaUIProvider>
      </Provider>
    </>
  );
};

export default App;
