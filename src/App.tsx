import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Houses } from "./pages/Houses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="houses" element={<Houses />} />
      </Route>
    </Routes>
  );
}

export default App;
