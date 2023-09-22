import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"
import { Noteitems } from './Noteitems';
import { useNavigate } from 'react-router-dom';
import AEstyle from '../cssModules/add&editNote.module.css'
// import NoteState from '../context/notes/NoteState';

export const Notes = (props) => {
    const noteCtx = useContext(NoteContext);
    let navigate = useNavigate()
    const { notes, getallnotes, editnote } = noteCtx;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getallnotes()
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setnote] = useState({ id: "", etitle: '', edescription: '', etag: "" })

    const updatenote = (currentnote) => {
        ref.current.click()
        setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })

    }


    const handelclick = (e) => {
        editnote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showalert(" Note Update Successfully", "success");
    }


    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <div >
            <div className={AEstyle.container}>
                <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">  </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 " id="exampleModalLabel">Edit Note</h1>
                                <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title:-</label>
                                        <input type="text"className={`form-control ${AEstyle.input}`} id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={3} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description:-</label>
                                        <input type="text" className={`form-control ${AEstyle.input}`} id="edescription" name='edescription' onChange={onChange} value={note.edescription} minLength={3} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag:-</label>
                                        <input type="text" className={`form-control ${AEstyle.input}`} id="etag" name='etag' onChange={onChange} value={note.etag} minLength={3} />
                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button type="button" disabled={note.etitle.length < 3 || note.edescription.length < 5} onClick={handelclick} className={`btn btn-primary ${AEstyle.AddBtn}`}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row my-5">
                <h2 className='text-center'>Your Notes</h2>
                <div className="container mx-2">
                    {notes.length < 1 && "No note available to display!"}
                </div>
                {notes.map((note) => {
                    return <Noteitems key={note._id} updatenote={updatenote} note={note} showalert={props.showalert} />;
                })}
            </div>
        </div>
    )
}


export default Notes;
