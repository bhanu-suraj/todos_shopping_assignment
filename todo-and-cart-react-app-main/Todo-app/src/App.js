import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Todo, Cart, SharedLayout, Error } from "./pages";
import { CartProducts, ExploreProducts } from "./components";
import { AppContextProvider } from "./context/Context";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="cart" element={<Cart />}>
              <Route index element={<CartProducts />} />
              <Route path="explore" element={<ExploreProducts />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
