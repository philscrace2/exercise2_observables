import React, { useState } from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./Books/BooksPresenter.js";

function App() {
  const booksPresenter = new BooksPresenter();
  const [vm, copyVmToComponentState] = useState([]);

  async function addBook(){
    await booksPresenter.addBook({name: "BFTDD", author:"Phil Scrace"});
   }
   
  async function reset(){
    await booksPresenter.addBook({name: "BFTDD", author:"Phil Scrace"});
  } 

  React.useEffect(() => {
    async function load() {
      await booksPresenter.load(generatedViewModel => {
        copyVmToComponentState(generatedViewModel);
      });
    }
    load();
  }, []);

  return (
    <div>
      {vm.map((bookVm, i) => {
        return <div key={i}>{bookVm.name}</div>;
      })}
      <button onClick={addBook}>
        Add Book</button>
      <button onClick={reset}>Reset</button>
    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
