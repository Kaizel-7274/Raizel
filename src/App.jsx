import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>R41Z3L - Order Now </h1>
      <Order />
      <footer>
        <p>© 2023 R41Z3L Pizzeria</p>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
