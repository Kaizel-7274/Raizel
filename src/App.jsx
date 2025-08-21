import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">R41Z3L - Order Now </h1>
        <Order />
        <PizzaOfTheDay />
        <footer>
          <p>© 2023 R41Z3L Pizzeria</p>
        </footer>
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
