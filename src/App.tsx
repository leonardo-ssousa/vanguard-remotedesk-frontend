import { GlobalStyle } from "./theme/GlobalStyle";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DevicesPage } from "./pages/devices";
import { DevicesDetailsPage } from "./pages/deviceDetails";



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="devices" element={<DevicesPage />} />
            <Route path="devices/:uuid" element={<DevicesDetailsPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
