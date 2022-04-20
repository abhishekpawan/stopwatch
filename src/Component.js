import React from "react";
import { useState } from "react";
import "./component.css";

const Component = (props) => {
  const [title, setTitle] = useState(props.content.title);
  const [dis, setDis] = useState(props.content.dis);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const disChangeHandler = (e) => {
    setDis(e.target.value);
  };

  const [display, setDisplay] = useState(true);

  const editHandler = () => {
    setDisplay(false);
  };

  const cancelHandler = () => {
    setTitle(props.content.title);
    setDis(props.content.dis);
    setDisplay(true);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    let content = {
      title,
      dis,
    };
    props.onSave(content);
    setDisplay(true);
  };

  const deletHandler = () => {
    setTitle("");
    setDis("");
  };
  return (
    <React.Fragment>
      <div className={display ? "content" : "content editable"}>
        <label>Title:</label>
        <input type="text" value={title} onChange={titleChangeHandler}></input>
        <label>Discription:</label>

        <input type="text" value={dis} onChange={disChangeHandler}></input>
        <div className={display ? "save show" : "save hide"}>
          <button onClick={editHandler}>Edit</button>
          <button onClick={deletHandler}>Delete</button>
        </div>
        <div className={display ? "save hide" : "save show"}>
          <button type="submit" onClick={saveHandler}>
            Save
          </button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Component;
