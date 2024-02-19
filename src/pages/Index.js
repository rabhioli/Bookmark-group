
import { Link } from 'react-router-dom';
import { useLoaderData, Form} from 'react-router-dom';

const Landing = () => {
  const Bookmarks = useLoaderData();
  console.log(Bookmarks);

  return (
    <div>
      <h3>Add New</h3>
        <div className="form">
        <div className="fields">
          <Form action='/create' method='post'> 
          <div className="input">
            <input type="input" name="title" placeholder="titles name"/>
            <input type="input" name="url" placeholder="url (https://) required"/>
          </div>
            <input type="submit" value={'create bookmark'} />
          </Form>
          </div>
        </div>

      <div className="index-container">
      {/* <h3>Your List</h3> */}
      {Bookmarks.map((Bookmark) => (
        <div key={Bookmark._id} className="Bookmark">
          <Link to={`/${Bookmark._id}`}>
            <h3>{Bookmark.title}</h3>
          </Link>
          <a href={Bookmark.url}>{Bookmark.url}</a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Landing;