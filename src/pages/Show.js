import React from 'react';
import { useLoaderData, Form } from 'react-router-dom';

const Show = () => {
  const bookmark = useLoaderData(); 
  return (
    <div className='bookmark'>
      <h1>{bookmark.title}</h1>
      <h2>{bookmark.url}</h2>

      
      <h2>Update {bookmark.name}</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input type="input" name="title" placeholder="titles name" defaultValue={bookmark.title}/>
        <input type="input" name="url" placeholder="url link" defaultValue={bookmark.url}/>
        <input type="submit" value={`update ${bookmark.title}`} />
      </Form>
      
      <h2>Delete bookmark</h2>
      <Form action={`/delete/${bookmark._id}`} method="post">
        <input
          type="submit"
          value={`Delete ${bookmark.title}`}
          className="delete-button" 
        />
      </Form>
    </div>
  );
};

export default Show;