import { createInstance } from "gyron";
import { createBrowserRouter, Router, Route, Routes } from "@gyron/router";
import { Provider } from "@gyron/redux";
import { store } from "./store";
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import About from "./components/About";
import Container from "./components/Container";
import "./index.less";

const router = createBrowserRouter();

createInstance(
  <Provider store={store}>
    <Router router={router}>
      <HelloWorld msg="Gyron" />
      <Routes>
        <Route path="" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </Router>
  </Provider>
).render("#root");
