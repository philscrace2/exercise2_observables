import booksRepository from "./BooksRepository.js";

export default class BooksPresenter {
  load = async callback => {
    booksRepository.getBooks(booksPm => {
      const booksVm = booksPm.map(bookPm => {
        return {name : bookPm.name};
      });
      callback(booksVm);
    });   

  };

  addBook(b){
    const bookPm = {
      name: "Ultra Fast Testing",
      author: "Phil Scrace"
    };
    booksRepository.addBook(b);

  }

  reset(){
    booksRepository.reset();
  }
}
