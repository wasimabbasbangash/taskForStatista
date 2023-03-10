import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AspectScores from "./pages/AspectScores";
import BenchMark from "./pages/BenchMark";
import DriverAnalysis from "./pages/DriverAnalysis";
import TimeSeries from "./pages/TimeSeries";
import AspectDetails from "./pages/AspectDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App bg-white h-screen  flex flex-row justify-start overflow-y-scroll overflow-x-clip flex-wrap relative'>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<AspectScores />}>
              Aspect Scores
            </Route>
            <Route path='/benchmark' element={<BenchMark />}>
              Bench Mark
            </Route>
            <Route path='/time-series' element={<TimeSeries />}>
              Time Series
            </Route>
            <Route path='/driver-analysis' element={<DriverAnalysis />}>
              Driver Analysis
            </Route>
            <Route path='/aspect-details' element={<AspectDetails />}>
              Aspect Analysis
            </Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
