import { createContext } from "react";

// const NoteContext = createContext();
const NoteContext = createContext({notes: undefined , setNotes: undefined });

export default NoteContext;