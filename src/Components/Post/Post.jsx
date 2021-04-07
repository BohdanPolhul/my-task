import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const Post = ({ title, body, editPost, id, deletePost }) => {
  return (
    <>
    <div >
      <div className="row">
        <div className="col-4 ml-auto mr-3 bg-default">
          <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="" width="50%"/>
          <h6>id:{id}</h6>
        </div>
        <div className="col-8 mr-auto ml-3 bg-info">
          <h2 className="text-center">{title}</h2>
          <p className="post-content"> {body}</p>
          
        </div>
        <div>
          <button type="submit"  className="btn col-4 ml-auto mr-3 btn-primary "  onClick={() => editPost(id)}>Edit</button>
          <button type="submit" class="btn  col-8 mr-auto ml-3 bg-danger" onClick={() => deletePost(id)}>Delete</button>
        </div>
        
      </div>
      
    </div>
      
    </>
  );
};
export default Post;
