import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Counter from './Counter';
import FruitList from './FruitList';
import TodoList from './ToDoList';
import Console from './Console';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
