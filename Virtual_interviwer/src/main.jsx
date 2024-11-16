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
import Camera_Preview2 from './components/Camera_Preview/Camera_Preview2.jsx';
import Resume from './components/Resume/Resume.jsx';
import Review_Interview from './components/Review_Interview/Review_Interview.jsx';
import Analysis from './components/Review_Interview/Analysis.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="interview-category" element={<Category />} />
      <Route path="cam-permission" element={<Permission />} />
      <Route path="register" element={<Register />} />
      <Route path="cam-preview1" element={<Camera_Preview1 />} />
      <Route path="cam-preview2" element={<Camera_Preview2 />} />
      <Route path="resume" element={<Resume />} />
      <Route path="review-interview" element={<Review_Interview />} />
      <Route path="analysis" element={<Analysis />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)