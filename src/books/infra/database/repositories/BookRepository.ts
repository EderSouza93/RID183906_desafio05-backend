import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import { Repository } from "typeorm";
import { Book } from "../entities/Book";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { IBook } from "@books/domain/models/IBook";
import { ICreateBook } from "@books/domain/models/ICreateBook";
import { IPaginateBook } from "@books/domain/models/IPaginateBook";

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
}

class BooksRepository implements IBooksRepository {
  private ormRepository: Repository<Book>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Book);
  }

  public async findAll({
    page,
    skip,
    take
  }: SearchParams): Promise<IPaginateBook> {
    const [books, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: books,
    }

    return result as unknown as IPaginateBook;
  }

  public async findByIsbn(codeIsbn: string): Promise<IBook | null> {
    const book = await this.ormRepository.findOneBy({
      isbnCode: codeIsbn,
    })

    return book as unknown as IBook;
  }

  public async findByTitle(title: string): Promise<IBook | null> {
    const book = await this.ormRepository.findOneBy({
      title,
    });

    return book as unknown as IBook
  }

  public async findById(id: number): Promise<IBook | null> {
    const book = await this.ormRepository.findOneBy({
      id
    });

    return book as unknown as IBook;
  }

  public async create(data: ICreateBook): Promise<IBook> {
    const book = this.ormRepository.create(data);

    await this.ormRepository.save(book);
    return book as unknown as IBook;
  }

  public async save(book: IBook): Promise<void> {
    await this.ormRepository.save(book)
  }

  public async remove(book: IBook): Promise<void> {
    const bookEntity = await this.ormRepository.findOneBy({ id: book.id });
    if (bookEntity) {
      await this.ormRepository.remove(bookEntity);
    }
  }

}

export default BooksRepository
