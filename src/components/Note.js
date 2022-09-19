import React from "react";
import "./Note.css";
import { MdDelete} from "react-icons/md";
import {BsPinAngleFill} from "react-icons/bs";
import {RiEditBoxFill} from "react-icons/ri";

function Note({ title, content, onDelete,onEdit , id }) {
  return (
    <div className="note">
      <h1>{title}<span> <button><BsPinAngleFill size={25}/></button></span></h1>
      
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
      <span> <button onClick={()=>onEdit(id)}>
        <RiEditBoxFill size={25}/></button></span>
    </div>
  );
}

export default Note;