import HttpGateway from "../Shared/HttpGateway.js";
import Observable from "../Shared/Observable.js";

class BooksRepository {
  gateway = null;
  programmersModel = null;
  apiUrl = "https://api.logicroom.co/api/philscrace@gmail.co/";

  constructor() {
    this.gateway = new HttpGateway();
    this.programmersModel = new Observable([]);
  }

  getBooks = async callback => {
    this.programmersModel.subscribe(callback);
    await this.loadApiData();
    this.programmersModel.notify();
  };

  async addBook(bookPm){
    const newBook = {
      name: bookPm.name,
      author: bookPm.author
    };

    await this.gateway.post("/books", newBook);
    await this.loadApiData();
    this.programmersModel.notify();

  }

  async reset(){
    await this.gateway.get("/reset");
    await this.loadApiData();
    this.programmersModel.notify();
  }

  loadApiData = async () => {
    const booksDto = await this.gateway.get("/books");
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };
}

const booksRepository = new BooksRepository();

export default booksRepository;
