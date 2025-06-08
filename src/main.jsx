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
import Template4 from './components/templates/template4.jsx'
import Template1 from './components/templates/template1.jsx'
import Template2 from './components/templates/template2.jsx'
import Template3 from './components/templates/template3.jsx'
import { TemplateProvider } from './context/TemplateContext.jsx'
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
  path:'/dashboard/template-portfolio2/:id',
  element:<Template1/>
},
{
  path:'/dashboard/template-portfolio4/:id',
  element:<Template3/>
},
{
  path:'/dashboard/template-portfolio3/:id',
  element:<Template2/>
},
{
  path:'/dashboard/template-portfolio5/:id',
  element:<Template4/>
},
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  },
  {
    path: '/dashboard/portfolio', // ✅ New Portfolio Route
    element: <Portfolio />,
  },
  {
    path: '/dashboard/template-portfolio1/:id', // ✅ New Portfolio Route
    element: <TemplatePortfolio />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      
      <TemplateProvider>
      <RouterProvider router={router} />
      </TemplateProvider>
    </ClerkProvider>
  </React.StrictMode>,
)
