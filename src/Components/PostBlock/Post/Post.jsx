import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <div className="previewPost">
      <div className="previewPostTitle">
        <h2>{props.Title}</h2>
      </div>
      <div className="previewPostDescription">
        <div className="previewPostDescriptionText">
          <p>{props.Description}</p>
        </div>
      </div>
      <div className="previewPostButton">
        <button onClick={() => props.btnFunction(props.id)}>Открыть полностью</button>
      </div>
      <div className="previewPostData">
        <span>{props.Data + 'г.'}</span>
      </div>
    </div>
  );
}
export default Post;