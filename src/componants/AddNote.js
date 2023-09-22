import React, { useContext, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"
import AEstyle from '../cssModules/add&editNote.module.css'

export const AddNote = (props) => {
    const noteCtx = useContext(NoteContext);
    const { notes, addNote } = noteCtx; 

    const [note, setnote] = useState({title: '', description:'', tag:""})

    const handelclick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setnote({title: '', description:'', tag:""})
        props.showalert("Note Added Successfully" , "success");
    }
    const onChange=(e)=>{
        setnote({...note,[ e.target.name]: e.target.value })
    }

  return (
    <div className={AEstyle.container}>
         <div className="container my-5">
        <h2 className={AEstyle.heading}>Add Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:-</label>
            <input type="text" className={`form-control ${AEstyle.input}`} id="title" name='title' aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={3} required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:-</label>
            <input type="text" className={`form-control ${AEstyle.input}`} id="description"  name='description' onChange={onChange} value={note.description} minLength={3} required />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag:-</label>
            <input type="text" className={`form-control ${AEstyle.input}`}  name='tag' onChange={onChange} value={note.tag} minLength={3} />
          </div>

          
          <button type="submit" disabled={note.title.length<3 || note.description.length<5} className={`btn btn-primary ${AEstyle.AddBtn}`} onClick={handelclick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}
