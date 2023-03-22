import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Sidebar />
    </div>
  );
}

export default App;
