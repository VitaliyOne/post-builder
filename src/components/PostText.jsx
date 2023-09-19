import React from 'react';

const PostText = (props) => {
  const date = new Date(props.post.id);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const time = [day, month, year].join('/');
  return (
    <div>
      <div>{props.post.text}</div>
      <div style={{ color: `rgba(0,0,0, 0.4)`, float: 'right' }}>Пост написан {time}</div>
    </div>
  );
};

export default PostText;
