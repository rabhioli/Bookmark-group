import { redirect } from "react-router-dom"


const URL = process.env.REACT_APP_URL

export const updateAction = async ({request,params}) => {
  
    const formData = await request.formData()
  
    const updatedBookmark = {
        title: formData.get("title"),
        url: formData.get("url"),
    }
    console.log(updatedBookmark)

    await fetch(`${URL}/Bookmark/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedBookmark)
    })
    

    return redirect("/")
}

export const createAction = async ({request,params}) => {
    const formData = await request.formData()
  
    const createdBookmark = {
        title: formData.get("title"),
        url: formData.get("url"),

}
 await fetch(`${URL}/Bookmark`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(createdBookmark)
})
return redirect("/")

}

export const deleteAction = async ({params}) => {
    await fetch (`${URL}/Bookmark/${params.id}`, {
        method: 'delete'
    });
    return redirect('/')
}