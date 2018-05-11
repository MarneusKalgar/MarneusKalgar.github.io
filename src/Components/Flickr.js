import React from 'react';

{/* <div className="photos">
        <a data-flickr-embed="true" href="https://www.flickr.com/photos/flickr/albums/72157656845052880" target="_blank" rel="noopener noreferrer"  title="Catchy Colors">
            <img src="https://farm2.staticflickr.com/1572/24153955053_58a5f0dc21_h.jpg" width="100%" height="100vh" alt="Catchy Colors" />
        </a>
    </div> */}

const Flickr = (props) => (
    <div className="photos">
    <a data-flickr-embed="true" href={props.href} target="_blank" rel="noopener noreferrer"  title="Catchy Colors">
            <img src={props.src} width="100%" height="50vh" alt="Сантехкомплект" />
        </a>
    </div>
);

export default Flickr;