import booksRoutes from "@books/infra/http/routes/BookRoutes";
import { Router, Request, Response } from "express";

const routes = Router();

routes.get('/health', (request: Request, response: Response) => {
  response.json({ message: "Hello Dev! I'm Alive!" });
});
routes.use('/livros', booksRoutes)

export default routes
