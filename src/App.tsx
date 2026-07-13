import { GlobalStyle } from "./theme/GlobalStyle";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DevicesPage } from "./pages/devices";
import { DevicesDetailsPage } from "./pages/deviceDetails";
import { DevicesProvider } from "./contexts/DevicesContext";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <DevicesProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />

          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<DefaultLayout />}>
              <Route path="devices" element={<DevicesPage />} />
              <Route path="devices/:id" element={<DevicesDetailsPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </DevicesProvider>
    </BrowserRouter>
  );
}

export default App;
