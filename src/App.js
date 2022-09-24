import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ReactPaginate from "react-paginate";
// import { IoIosAdd } from "react-icons/io";
// import {RiEditBoxFill} from "react-icons/ri";

function App(props) {
  const [notes, setNotes] = useState([]);
  const[toggleSubmit,setToggleSubmit] = useState(true);
  const[editNote,setEditNote] = useState(false);
  const[currentNote,setCurrentNote] = useState(false);
  const[currentNoteIndex,setCurrentNoteIndex] = useState(false);
  

  function addNote(newNote) {
    console.log("addnoteedit",editNote);
    if(editNote){
      setNotes((prevValue) => {
        prevValue [currentNoteIndex] = newNote;
        return [...prevValue];
      });
    console.log("new", notes)
    //setNotes(newNotes) ;
    setCurrentNote(false);
    setEditNote(false);
    }else{
      setNotes((prevValue) => {
        return [...prevValue, newNote];
      });
    }
   
  }
  // function onPin(id){
  //   let pinned=notes.splice(id,1);
  //   setNotes(()=>{
  //     return[...pinned,...notes];
  //   });
  // }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  
  const onEdit=(id)=>{

    let newEditNotes=notes.find((note)=>{
        return id === id
    });
    console.log("notes", notes );
    //newEditNotes["id"] = id;
    setCurrentNote(newEditNotes);
    setCurrentNoteIndex(id);
    setEditNote(true);
    console.log(newEditNotes);
   // setToggleSubmit(false);
   
    // setNotes(newEditNotes)
  }
  // const[currentItems,setCurrentItems]=useState([]);
  // const[pageCount,setPageCount]=useState(0);
  // const[itemOffset,setItemOffset]=useState(0);
  // const itemPerPage = 6;

  // useEffect(()=>{
  //   const endOffset=itemOffset+itemPerPage;
  //   setCurrentItems(notes.slice(itemOffset,endOffset));
  //   setPageCount(Math.ceil(notes.length / itemPerPage));
  // },[itemOffset,itemPerPage,notes]);
  // const handlePageClick=(event)=>{
  //   const newOffset = (event.selected * itemPerPage)% notes.length;
  //   setItemOffset(newOffset);
  // };
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
      <CreateArea onAdd={addNote}  editNote = {editNote} currentNote={currentNote}/>
      {  notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
          
          onEdit={onEdit}
          // onPin={onPin}
        />
      ))}
      <Footer />
     
    </div>
  );
}

export default App;