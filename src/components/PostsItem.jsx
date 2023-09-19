import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import PostText from './PostText';

const PostsItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const showPostText = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div className="posts">
      <div>
        <div onClick={showPostText} className="postsContent" aria-hidden="true">
          <strong>
            {props.number}. {props.post.title}
          </strong>
          <div style={{ marginTop: '4px' }}>{props.post.body}</div>
        </div>
        {isShown && (
          <div style={{ marginTop: '8px' }}>
            <PostText post={props.post} />
          </div>
        )}
      </div>
      {!isShown && (
        <MyButton onClick={() => props.remove(props.post)} type="button">
          Удалить
        </MyButton>
      )}
    </div>
  );
};
export default PostsItem;
