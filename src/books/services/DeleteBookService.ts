import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: number;
}

@injectable()
export default class DeleteBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<void> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new AppError('Book not found.', 404);
    }

    await this.booksRepository.remove(book)
  }
}
