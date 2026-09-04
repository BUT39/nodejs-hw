import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getNote,
  getNoteById,
  createNotes,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';
import {
  getAllNotesSchema,
  updateNoteSchema,
  noteIdSchema,
  createNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/', celebrate(getAllNotesSchema), getNote);
notesRouter.get('/:noteId', celebrate(noteIdSchema), getNoteById);
notesRouter.post(
  '/',
  celebrate(createNoteSchema, { abortEarly: false }),
  createNotes,
);
notesRouter.patch('/:noteId', celebrate(updateNoteSchema), updateNote);
notesRouter.delete('/:noteId', celebrate(noteIdSchema), deleteNote);

export default notesRouter;
