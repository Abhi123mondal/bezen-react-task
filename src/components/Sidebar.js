import {React} from 'react';
import  {AiOutlineDelete} from 'react-icons/ai';
import  {BiArchiveIn} from 'react-icons/bi';

import  {MdEditNote} from 'react-icons/md';

import {BsEmojiSmile} from 'react-icons/bs';
import "./Sidebar.css";


function Sidebar(){
  return (
    <div className='container'>
      <>
        <ul className='sidebar'> 
            <li><span className="icon">MENU</span></li>
          <li><span className="icon"><BsEmojiSmile /></span><span>Notes</span></li>
          <li><span className="icon"><MdEditNote/></span><span>Edit lables</span></li>
          <li><span className="icon"><BiArchiveIn/></span><span>Archives</span></li>
          <li><span className="icon">< AiOutlineDelete/></span><span>Trash</span></li>
        </ul>
      </>
    </div>
  );
}

export default Sidebar;
