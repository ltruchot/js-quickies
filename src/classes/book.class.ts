// here we import some decorators, but firstly, explore the following class
import { loggable } from './../decorators/log.decorator';

// here we define a model, to constraint the "Rating" type
interface IRating {
  mark: number;
  comment: string;
}
export class Book {
  // we can create books with "new Book(args...)"
  // every book will have title, author and some ratings as public properties
  constructor(
    public title: string,
    public author: string,
    public ratings: IRating[] // this will be a table of IRating
  ) {}

  // here is some classic method that every "Book" object will share
  // it should return the average rating mark of the book
  // uncomment following "@loggable decorator" and see what happen
  // @loggable
  getAverageMark(): number {
    const total: any = this.ratings.reduce(
      (mark: number, rating: IRating) => mark + rating.mark,
      0
    );
    return total / this.ratings.length;
  }
}
