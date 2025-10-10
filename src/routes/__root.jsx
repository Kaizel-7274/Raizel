import { StrictMode, useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";

export const rootRoute = createRootRoute({
  component: () => {
    const carthook = useState([]);
    return (
      <StrictMode>
        <CartContext.Provider value={carthook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools position="bottom-right" />
      </StrictMode>
    );
  },
});
