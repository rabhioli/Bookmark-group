import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Show from "./pages/Show"
  import Landing from "./pages/Index"
  import {  BookmarkLoader } from "./loaders"


  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
     <Route path="" element={<Landing/>} loader={BookmarkLoader}/>
     <Route path=":id" element={<Show/>}/>
     <Route path="create"/>
     <Route path="update/:id"/> 
     <Route path="delete/:id"/>


     </Route>
    )
  )
  
  export default router;