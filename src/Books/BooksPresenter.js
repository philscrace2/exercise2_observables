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
    booksRepository.addBook(b);

  }

  reset(){
    booksRepository.reset();
  }
}
