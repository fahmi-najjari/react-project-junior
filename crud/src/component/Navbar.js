import React from 'react'
import { List, PlusCircle, Search, Edit } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar({ currentView, setView, selectedProduct }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center gap-2" onClick={() => setView('all')} style={{ cursor: 'pointer' }}>
          <List size={24} /> Product Manager
        </div>



        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <div className={`nav-link ${currentView === 'all' ? 'active' : ''}`} onClick={() => setView('all')} style={{ cursor: 'pointer' }}>
                <List size={16} className="me-2" /> All Products
              </div>
            </li>



            <li className="nav-item">
              <div className={`nav-link ${currentView === 'add' ? 'active' : ''}`} onClick={() => setView('add')} style={{ cursor: 'pointer' }}>
                <PlusCircle size={16} className="me-2" /> Add Product
              </div>
            </li>



            <li className="nav-item">
              <div className={`nav-link ${currentView === 'search' ? 'active' : ''}`} onClick={() => setView('search')} style={{ cursor: 'pointer' }}>
                <Search size={16} className="me-2" /> Search
              </div>
            </li>




            {selectedProduct && (
              <li className="nav-item">
                <div className={`nav-link ${currentView === 'update' ? 'active' : ''}`} onClick={() => setView('update')} style={{ cursor: 'pointer' }}>
                  <Edit size={16} className="me-2" /> Update Product
                </div>
              </li>
            )}


    </ul>



        </div>



      </div>
    </nav>
  )
}

export default Navbar