import React, { useState , useEffect } from "react";
import './CreateArea.css';

import { IoIosAdd } from "react-icons/io";

function CreateArea({ onAdd, editNote, currentNote }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title:  "",
    content: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(()=>{
    console.log("jjjj");
    if(!isUpdating &&  editNote){
      console.log("hiiiiiiiii",currentNote  );
      setNote({title: currentNote.title, content: currentNote.content});
      setExpanded(true);
      setIsUpdating(true);
    }
  },[currentNote]);
  
  function handleChange  (e) {
    //setIsUpdating(true);
    //alert("lll");
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    
  }
  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    
  }
  console.log("editNote", editNote, isUpdating, currentNote)
  return (
    <div>
      
      <form className="area" >
    
        {isExpanded && (
          <input
            value={  note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={ note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        
          <button onClick={submitButton}>
          <IoIosAdd size={35}/>
           </button>
        

      </form>
    </div>
  );
}

export default CreateArea;