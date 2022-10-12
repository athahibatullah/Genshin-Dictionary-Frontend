import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Route/Detail";
import Home from "./components/Route/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/character/:id" element={<QueryClientProvider client={queryClient}><Detail /></QueryClientProvider>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
