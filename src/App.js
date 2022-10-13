import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Route/Detail";
import Home from "./components/Route/Home";
import Post from "./components/Route/Post";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<QueryClientProvider client={queryClient}><Detail /></QueryClientProvider>} />
          <Route path="/post" element={<Post/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
