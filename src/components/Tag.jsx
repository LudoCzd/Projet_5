import React from "react";
import "./Tag.scss";

function Tag({ tag }) {
  return (
    <div className="tagList">
      <ul>{tag}</ul>
    </div>
  );
}

export default Tag;
