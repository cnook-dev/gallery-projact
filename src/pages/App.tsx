import * as React from "react";
import PhotoGallery from '../components/PhotoGallery';
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <PhotoGallery />
      </div>
    </NextUIProvider>
  );
}

export default App;
