import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const notesRouter = Router();

notesRouter.get('/notes', getAllNotes);
notesRouter.get('/notes/:noteId', getNoteById);
notesRouter.post('/', createNote);
notesRouter.patch('/:noteId', updateNote);
notesRouter.delete('/:noteId', deleteNote);

export default notesRouter;
