import { Router } from 'express';
import {
  getNote,
  getNoteById,
  createNotes,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const notesRouter = Router();

notesRouter.get('/', getNote);
notesRouter.get('/:noteId', getNoteById);
notesRouter.post('/', createNotes);
notesRouter.patch('/:noteId', updateNote);
notesRouter.delete('/:noteId', deleteNote);

export default notesRouter;
