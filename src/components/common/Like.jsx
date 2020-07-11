import React from 'react';

const Like = ({ liked, onClick: toggleLike }) => {
  let classes = 'fa fa-heart';
  if (!liked) classes += '-o';
  return (
    <i
      style={{ cursor: 'pointer' }}
      onClick={toggleLike}
      className={classes}
    ></i>
  );
};

export default Like;
