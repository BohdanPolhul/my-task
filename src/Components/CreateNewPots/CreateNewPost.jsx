import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './createNewPost.css'
const CreateNewPost = props => {
  //Подібна ситуація до редагування даних поста, шаблон таки й ж, тільки тут додаємо обєкт на сервер
  return (
    <>
    <div className="row-position" >
    <section className="center-block col-md-4 col-8 mr-auto ml-3 bg-info">
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input className="col-12"
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea className="col-12"
          onChange={props.savePostContentToState}
          placeholder="Body"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button class="btn col-12 ml-auto mr-3 btn-success">Save Post</button></section>
      </form>
      </section>
    </div>
    </>
  );
};
export default CreateNewPost;
