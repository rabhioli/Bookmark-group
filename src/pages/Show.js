import React from 'react';
import { useLoaderData, Form } from 'react-router-dom';

const Show = () => {
  const bookmark = useLoaderData(); 
  return (
    <div className='bookmark'>
      <h1>{`Visit - ${bookmark.title}`}</h1>
      <a href={bookmark.url} className="web-link">{bookmark.url}</a>

      
      <h2>Update {bookmark.name}</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input type="input" name="title" placeholder="titles name" defaultValue={bookmark.title}/>
        <input type="input" name="url" placeholder="url link" defaultValue={bookmark.url}/>
        <input type="submit" value={`update ${bookmark.title}`} />
      </Form>
      
      <h2>{`Delete ${bookmark.title}`}</h2>
      <Form action={`/delete/${bookmark._id}`} method="post">
        <input
          type="submit"
          value={"Delete"}
          className="delete-button" 
        />
      </Form>
    </div>
  );
};

export default Show;