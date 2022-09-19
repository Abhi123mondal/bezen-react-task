import React, { useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
// import { IoIosAdd } from "react-icons/io";
// import {RiEditBoxFill} from "react-icons/ri";

function App(props) {
  const [notes, setNotes] = useState([]);
  // const[toggleSubmit,setToggleSubmit] = useState(true);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  // const editNotes=(id)=>{
  //   let newEditNotes=notes.find((note)=>{
  //       return id === id
  //   });
  //   console.log(newEditNotes);
  //   setToggleSubmit(false);
  //   setNotes(newEditNotes)
  // }
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Count
        count={
          notes.length === 0
            ? "PLEASE ADD YOUR NOTES"
            : `Showing ${notes.length} Notes in Database`
        }
      />
    {/* {
  //   toggleSubmit ? <button onClick={submitButton}><IoIosAdd size={35}/></button>:  <span> <button onClick={()=>onEdit(id)}>
  //   <RiEditBoxFill size={25}/></button></span>
  //  } */}
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
          // onEdit={editNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;