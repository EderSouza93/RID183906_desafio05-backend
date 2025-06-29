import { CreateBookService } from "@books/services/CreateBookService";
import DeleteBookService from "@books/services/DeleteBookService";
import ListBookService from "@books/services/ListBookService";
import ShowBookService from "@books/services/ShowBookService";
import UpdateBookService from "@books/services/UpdateBookService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class BooksControllers {
  public async index(request: Request, response: Response): Promise<void> {
    const { page, skip, take } = request.query;
    const listBooksService = container.resolve(ListBookService);
    const books = await listBooksService.execute({
      page: Number(page),
      skip: Number(skip),
      take: Number(take),
    });

    response.json(books);
  }

  public async show(request: Request, response: Response): Promise<void> {
    const id = Number(request.params.id);
    const showBookService = container.resolve(ShowBookService);

    const book = await showBookService.execute({ id });

    response.json(book);
  }

  public async create(request: Request, response: Response): Promise<void> {
    const { title, numberOfPages, isbnCode, publisher } = request.body;

    const createBookService = container.resolve(CreateBookService);
    const book = await createBookService.execute({
      title,
      numberOfPages,
      isbnCode,
      publisher,
    });

    response.json(book);
  }

  public async update(request: Request, response: Response): Promise<void> {
    const id = Number(request.params.id);
    const { title, numberOfPages, isbnCode, publisher } = request.body;

    const updateBookService = container.resolve(UpdateBookService);

    const book = await updateBookService.execute({
      id,
      title,
      numberOfPages,
      isbnCode,
      publisher,
    });

    response.json(book);
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const id = Number(request.params.id);

    const deleteBookService = container.resolve(DeleteBookService);

    await deleteBookService.execute({ id });

    response.status(204).send([]);
  }
}
