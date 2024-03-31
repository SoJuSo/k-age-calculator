import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ZodiacCalculator from "./pages/ZodiacCalculator/ZodiacCalculator.jsx";
import "./styles/style.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/" // Main
          element={<ZodiacCalculator />}
        />
        <Route
          path="*" // 404
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

export default App;
