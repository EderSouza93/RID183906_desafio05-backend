import { IBook } from "@books/domain/models/IBook";
import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: number;
}
@injectable()
export default class ShowBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }
  public async execute({ id }: IRequest): Promise<IBook> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new AppError('Book not found.', 404);
    }

    return book as IBook
  }
}
