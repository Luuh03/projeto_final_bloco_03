import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import DeletaCategoria from './components/categoria/deletecategoria/DeletaCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
      <Navbar />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/categorias' element={<ListaCategorias />} />
          <Route path='/deletarcategoria/:id' element={<DeletaCategoria />} />
          <Route path='/cadastrarcategoria' element={<FormCategoria />} />
          <Route path='/editarcategoria/:id' element={<FormCategoria />} />
        </Routes>
      </div>

      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
