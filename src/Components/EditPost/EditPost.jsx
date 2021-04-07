import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const ModifyPost = (props) => {
  //шаблон релагування даних в пості, створено 2 текстових поля та одну кнопку після введення змін даних, нажимає на кнопку і дані успішно зберігаються на сервер
  return (
    <><section className="row-position">
      <form className="col-md-4 col-8 mr-auto ml-3 bg-info">
        <h1>Edit Post</h1>
        <input className="col-12" 
        type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea className="col-12"
          defaultValue={props.body}
          placeholder="content"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button class="btn col-12 ml-auto mr-3 btn-success" onClick ={props.updatePost}>Update Post</button>
        </section>
      </form>
      </section>
    </>
  );
};
export default ModifyPost;
