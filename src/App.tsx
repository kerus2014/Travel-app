import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Houses } from "./pages/Houses";
import { Kitchen } from "./pages/Kitchen";
import { Rules } from "./pages/Rules";
import { Contacts } from "./pages/Contacts";
import { HouseItem } from "./pages/HouseItem";
import Entertainment from "./pages/Entertainment/Entertainment";
import EntertainmentCurrent from "./pages/EntertainmentCurrent/EntertainmentCurrent";
import { Nearest } from "./pages/Nearest";
import { Gallery } from "./pages/Gallery";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="houses" element={<Houses />} />
          <Route path="houses/:id" element={<HouseItem />} />
          <Route path="dish" element={<Kitchen />} />
          <Route path="rule" element={<Rules />} />
          <Route path="info" element={<Contacts />} />
          <Route path="entertainments" element={<Entertainment />} />
          <Route path="entertainments/:id" element={<EntertainmentCurrent />} />
          <Route path="galleries" element={<Gallery />} />
          <Route path="nearests" element={<Nearest />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
