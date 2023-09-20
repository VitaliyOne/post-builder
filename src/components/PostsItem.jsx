import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import PostText from './PostText';
import PostForm from './PostForm';

const PostsItem = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [isShownForm, setIsShownForm] = useState(false);

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
            <div style={{ float: 'right' }}>
              <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
          </div>
        )}
      </div>
      {!isShown && <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>}
    </div>
  );
};
export default PostsItem;
