import React from "react";
import Heading from "./Header";
import footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((entryNote) => {
        return (
          <Note
            key={entryNote.key}
            title={entryNote.title}
            content={notes.content}
          />
        );
      })}
      <footer />
    </div>
  );
}

export default App;
