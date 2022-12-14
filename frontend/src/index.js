import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import FileInput from "./components/FileInput";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <ChakraProvider>
      <Header />
    </ChakraProvider>
    <FileInput />
  </main>
);
