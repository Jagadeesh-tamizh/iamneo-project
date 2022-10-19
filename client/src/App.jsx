import React from "react";
import MiniDrawer from "./components/MiniDrawer";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={Backend}>
      <MiniDrawer />
    </DndProvider>
  );
};

export default App;
