
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesinitial = []
    let [notes, setNotes] = useState(notesinitial)






    // Get all Note
    const getallnotes = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json)
    }








    // Add Note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });

        const note = await response.json()
        setNotes(notes.concat(note))
        
    }









    // Delete Note
    const deletenote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
         await response.json();
   
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
    }









    // Edit note
    const editnote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/upadtenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        // eslint-disable-next-line
        const json = response.json(); // parses JSON response into native JavaScript objects

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client side
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }








    return (

        <NoteContext.Provider value={{ notes: notes, addNote, deletenote, editnote, getallnotes }}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;