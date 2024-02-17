

const URL = process.env.REACT_APP_URL;

export const BookmarkLoader = async () => {
  const response = await fetch(`${URL}/Bookmark`);
  const bookmarks = await response.json(); // Assuming the API response is an array of bookmarks
  return bookmarks;
};

export const BookmarksLoader = async ({ params }) => {
  const response = await fetch(`${URL}/Bookmark/${params.id}`);
  const bookmark = await response.json(); // Assuming the API response is a single bookmark
  return bookmark;
};
