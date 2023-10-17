import king from "./assets/king.png";
import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  {/* Variável para o elemento arrastado */}
  let [dragged] = useState(null);

  {/* Elementos */}
  useEffect(() => {
    const king = document.querySelector(".chess-piece");
    const boxes = document.querySelectorAll(".box");
    king.addEventListener("drag", dragging);
    king.addEventListener("dragstart", dragStart);
    boxes.forEach((box) => {
      box.addEventListener("dragover", dragOver);
      box.addEventListener("dragenter", dragEnter);
      box.addEventListener("dragleave", dragLeave);
      box.addEventListener("drop", dragDrop);
      box.addEventListener("dragend", dragEnd);
    });
  }, []);

  {/* Quando o elemento é arrastado */}
  function dragging() {
    const infoDisplay = document.querySelector("#info");
    infoDisplay.textContent = "Dragging the " + dragged.id  
  }

  {/* Quando o elemento começa a ser arrastado */}
  function dragStart(e) {
    dragged = e.target
  }

  {/* Quando o elemento está sendo arrastado */}
  function dragOver(e) {
    e.preventDefault();
  }

  {/* Quando o elemento insere um destino de soltar válido */}
  function dragEnter(e) {
    e.target.classList.add("dragging");
  }

  {/* Quando o elemento deixa um destino de soltar válido */}
  function dragLeave(e) {
    e.target.classList.remove("dragging");
  }

  {/* Quando o elemento é solto em um destino */}
  function dragDrop(e) {
    e.target.appendChild(dragged);
    e.target.classList.remove("dragging");
  }

  {/* Quando o elemento termina de ser arrastado(soltando o botão do mouse) */}
  function dragEnd(e) {
    const infoDisplay = document.querySelector("#info");
    e.target.classList.add("target");
    setTimeout(() => e.target.classList.remove("target"), 100);
    infoDisplay.textContent = "";
  }

  return (
    <>
      <section className="section">
        <main className="container">
          <div className="box" draggable="true">
            <img
            src={king}
            className="chess-piece"
            id="king"
            alt="King piece" />
          </div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </main>{/*End container*/}
        <p id="info"></p>
      </section>{/*End section*/}
    </>
  )
}