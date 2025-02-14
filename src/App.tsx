
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
