import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import BooksRepository from "@books/infra/database/repositories/BookRepository";
import { container } from "tsyringe";

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository
)
