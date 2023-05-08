import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Houses } from "./pages/Houses";
import { Kitchen } from "./pages/Kitchen";
import { Rules } from "./pages/Rules";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="houses" element={<Houses />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="rules" element={<Rules />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
