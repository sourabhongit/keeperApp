import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((Notes) => (
        <Note key={Notes.key} title={Notes.title} content={Notes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
