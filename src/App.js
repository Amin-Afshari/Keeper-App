import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function onAdd(note) {
    setNotes((prevState) => [...prevState, note]);
  }
  function onDelete(id) {
    setNotes((prevState) => prevState.filter((note, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={onDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
