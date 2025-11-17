import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout } from './layouts'
import { Home } from './pages'

import './App.css'



function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
