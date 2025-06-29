import { Router } from "express";
import BooksControllers from "../controllers/BookControllers";

const booksRoutes = Router();
const booksController = new BooksControllers();

booksRoutes.get('/', booksController.index);
booksRoutes.get('/:id', booksController.show);
booksRoutes.post('/', booksController.create);
booksRoutes.put('/:id', booksController.update);
booksRoutes.delete('/:id', booksController.delete);

export default booksRoutes;
