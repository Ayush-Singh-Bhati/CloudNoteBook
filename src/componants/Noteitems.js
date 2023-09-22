import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"
import clouds from '../cssModules/cloud.module.css'

export const Noteitems = (props) => {
    const noteCtx = useContext(NoteContext);
    const { deletenote } = noteCtx;
    const { note, updatenote } = props


    return (
        <div className={`col-md-3 ${clouds.cloud}`}>
            <div className="my-3">
                <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"bold"}}>{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2" onClick={() => { deletenote(note._id); props.showalert("Note Deleted Successfully", "success"); }}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updatenote(note) }}></i>
                </div>
            </div>

        </div>
    )
}
