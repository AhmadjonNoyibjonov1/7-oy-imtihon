import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Detailes from "./pages/Detailes";

const App = () => {
  return (
    <ThemeProvider>
      <div className="container mx-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailes" element={<Detailes />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
