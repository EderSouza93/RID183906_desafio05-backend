import { IBook } from "@books/domain/models/IBook";
import { ICreateBook } from "@books/domain/models/ICreateBook";
import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async execute(data: ICreateBook): Promise<IBook> {
    const { title, numberOfPages, isbnCode, publisher } = data;

    const bookExists = await this.booksRepository.findByIsbn(isbnCode);

    if (bookExists) {
      throw new AppError('This book already used.', 409)
    }

    const book = await this.booksRepository.create({
      title,
      numberOfPages,
      isbnCode,
      publisher
    });

    return book
  }
}
