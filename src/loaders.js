


const URL = process.env.REACT_APP_URL;

export const BookmarkLoader = async () => {
    const response = await fetch(`${URL}/Bookmark`)
    const Bookmark = await response.json()
    return Bookmark
  }