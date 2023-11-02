// import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Home from './Pages/Home';
import Header from './Components/Header/index'
import Products from './Pages/Products/index';
import Cart from './Pages/Cart/index';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//       <Router>
//         <Header />
//         <Routes>
//           <Route path='/home' exact component={<Home/>} />
//           <Route path='/products' exact component={Products} />
//         </Routes>
//       </Router>
//   );
// }

// export default App;

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <Home/>
//   },
//   {
//     path: "/products",
//     element: <Products/>
//   },

// ]);


// function App() {
//   return (
//     <RouterProvider router={router} >
//       <Header/>
//       </RouterProvider>
//   );
// }

// export default App;







