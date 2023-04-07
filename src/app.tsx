import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./layout/app-routes";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
