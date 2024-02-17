import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Show from "./pages/Show"
  import Landing from "./pages/Index"
  import {  BookmarkLoader, BookmarksLoader } from "./loaders"
  import { updateAction } from "./actions"


  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
     <Route path="" element={<Landing/>} loader={BookmarkLoader}/>
     <Route path=":id" element={<Show/>} loader={BookmarksLoader}/>
     <Route path="create"/>
     <Route path="update/:id" action={updateAction}/> 
     <Route path="delete/:id"/>


     </Route>
    )
  )
  
  export default router;