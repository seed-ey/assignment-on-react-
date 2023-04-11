import React, { useContext } from "react";
import logo from './logo.svg';
import './App.css';
import { Main, NavComponent } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Counter } from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import { Table } from './components/table/Table';
import { ProductDetails } from './components/productDetails/ProductDetails';
import { Landing } from './components/Landing/Landing';
import { ThemeContext } from './Theme';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path={`/products`} element={<Main/>}/>
        <Route path={`/table`} element={<Table/>}/>
        <Route path={`/products/:productId`} element ={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}
export default App;