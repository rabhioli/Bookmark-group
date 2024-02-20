
import { Link } from 'react-router-dom';
import { useLoaderData, Form} from 'react-router-dom';
import { useState } from 'react';

const Landing = () => {
  const Bookmarks = useLoaderData();
  // console.log(Bookmarks);
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };

  return (
    <div>
      <h3>Search Bookmark's</h3>
        <div className="form">
          <div className="fields">
            <input type="text" placeholder="Search bookmarks..." className="search-bar" onChange={handleSearch}/>
            <h3>Add New Bookmark</h3>
              <Form action='/create' method='post'> 
                <div className="input">
                  <input type="input" name="title" placeholder="titles name"/>
                  <input type="input" name="url" placeholder="url (https://) required"/>
                </div>
                  <input type="submit" value={'Create Bookmark'} />
              </Form>
          </div>
        </div>

        <div className="index-container">
          {Bookmarks.filter((bookmark) =>
            bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())).map((Bookmark) => (
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