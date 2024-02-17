
import { Link } from 'react-router-dom';
import { useLoaderData, Form} from 'react-router-dom';

const Landing = () => {
  const Bookmarks = useLoaderData();
  console.log(Bookmarks);

  return (
    <div>
      <h3>Add Bookmarks</h3>
      <Form action='/create' method='post'> 
        <input type="input" name="title" placeholder="titles name"/>
        <input type="input" name="url" placeholder="url link"/>
        <input type="submit" value={'create bookmark'} />
      </Form>

      <h3>Bookmarks</h3>
      {Bookmarks.map(Bookmark => (
        <div key={Bookmark._id} className="Bookmark">
          <Link to={`/${Bookmark._id}`}>
            <h3>{Bookmark.title}</h3>
          </Link>
          <h4>{Bookmark.url}</h4>
        </div>
      ))}
    </div>
  );
};

export default Landing;