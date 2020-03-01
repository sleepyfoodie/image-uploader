import React from "react";
import { Container } from "@material-ui/core";

import Folders from "./components/Folders";
import ToolBar from "./components/ToolBar";

import "./App.css";

function App() {
  return (
    <Container fluid>
      <ToolBar />
      <Folders />
    </Container>
  );
}

export default App;
