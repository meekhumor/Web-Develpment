import '@fontsource/libre-baskerville';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Category from './components/Category/Category.jsx';
import Permission from './components/Permission/Permission.jsx';
import Register from './components/Register/Register.jsx';
import Camera_Preview1 from './components/Camera_Preview/Camera_Preview1.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="interview-category" element={<Category />} />
      <Route path="cam-permission" element={<Permission />} />
      <Route path="register" element={<Register />} />
      <Route path="cam-preview" element={<Camera_Preview1 />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)