import { IBook } from "@books/domain/models/IBook";
import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: number;
  title: string,
  numberOfPages: number,
  isbnCode: string,
  publisher: string,
}

@injectable()
export default class UpdateBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }
  public async execute({
    id,
    title,
    numberOfPages,
    isbnCode,
    publisher,
  }: IRequest): Promise<IBook> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new AppError('Book not found.', 404);
    }

    const bookExists = await this.booksRepository.findByTitle(title);

    if (bookExists && title !== book.title) {
      throw new AppError('There is already one book with this title', 409);
    }

    const bookExistsByIsbn = await this.booksRepository.findByIsbn(isbnCode);

    if (bookExistsByIsbn && isbnCode !== book.isbnCode) {
      throw new AppError('There is already one book with this ISBN', 409);
    }

    book.title = title,
    book.numberOfPages = numberOfPages,
    book.isbnCode = isbnCode;
    book.publisher = publisher;

    await this.booksRepository.save(book)

    return book as IBook
  }
}
