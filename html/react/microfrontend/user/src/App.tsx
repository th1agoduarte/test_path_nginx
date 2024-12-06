import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Menu = React.lazy(() => import("menu/Menu"));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading Menu...</div>}>
        <Menu />
      </React.Suspense>
      <Routes>
        <Route path="/" element={<h1>Dashboard</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
