import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectModule from "./pages/SelectModule/SelectModule";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ModuleOne from "./pages/ModuleOne/ModuleOne";
import ModuleTwo from "./pages/ModuleTwo/ModuleTwo";
import ModuleThree from "./pages/ModuleThree/ModuleThree";
import ModuleFour from "./pages/ModuleFour/ModuleFour";
import ModuleFive from "./pages/ModuleFive/ModuleFive";
import ModuleSix from "./pages/ModuleSix/ModuleSix";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/pharmareviewph/" element={<SelectModule />} />
        <Route path="/pharmareviewph/module-1" element={<ModuleOne />} />
        <Route path="/pharmareviewph/module-2" element={<ModuleTwo />} />
        <Route path="/pharmareviewph/module-3" element={<ModuleThree />} />
        <Route path="/pharmareviewph/module-4" element={<ModuleFour />} />
        <Route path="/pharmareviewph/module-5" element={<ModuleFive />} />
        <Route path="/pharmareviewph/module-6" element={<ModuleSix />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
