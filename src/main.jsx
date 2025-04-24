import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './dashboard/resume/[resumeId]/edit/index.jsx'
import ViewResume from './my-resume/[resumeId]/view/index.jsx'
import Portfolio from './portfolio/index.jsx'
import TemplatePortfolio from './template-portfolio/index.jsx'
import Template4 from './components/templates/template1.jsx'
import Template1 from './components/templates/template1.jsx'
import Template2 from './components/templates/template2.jsx'
import Template3 from './components/templates/template3.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    element:<App/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      },
  ]
},
{
  path:'/auth/sign-in',
  element:<SignInPage/>
},
{
  path:'/portfolio/template1',
  element:<Template1/>
},
{
  path:'/portfolio/template3',
  element:<Template3/>
},
{
  path:'/portfolio/template2',
  element:<Template2/>
},
{
  path:'/portfolio/template4',
  element:<Template4/>
},
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  },
  {
    path: '/portfolio', // ✅ New Portfolio Route
    element: <Portfolio />,
  },
  {
    path: '/template-portfolio/:id', // ✅ New Portfolio Route
    element: <TemplatePortfolio />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
