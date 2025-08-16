import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "KES",
  minimumFractionDigits: 0,
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("Pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizzaType">Pizza Type:</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizzaType"
              value={pizzaType}
            >
              <option value="Pepperoni"> The Pepperoni Pizza</option>
              <option value="Hawaiian">The Hawaiian Pizza</option>
              <option value="The R41Z3L Special">R41Z3L Special Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size:</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni Pizza"
              description="A classic pizza topped with pepperoni slices."
              image="/public/pizzas/pepperoni.webp"
            />
            <p>KES 4,500</p>
          </div>
        </div>
      </form>
    </div>
  );
}
