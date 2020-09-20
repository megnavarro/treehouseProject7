import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => { 
  const results = props.data;
  let photos;
  const loading = props.loading;
  if (results.length > 0) {
    photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} desc={photo.title} />);
  } else if (loading) {
    photos=<p>Loading...</p>
  } else {
    photos = <NotFound />
  }

  

  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div> 
  );
}

export default PhotoContainer;