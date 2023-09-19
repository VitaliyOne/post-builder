import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import PostText from './PostText';

const PostsItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const showPostText = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="posts">
      <div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={showPostText}
          className="postsContent"
          aria-hidden="true"
        >
          <strong>
            {props.number}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        {isShown && (
          <div style={{ marginTop: '10px' }}>
            <PostText post={props.post} />
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MyButton
                className="postButtons"
                style={{ height: '40px', float: 'right' }}
                onClick={() => props.remove(props.post)}
                type="button"
              >
                Удалить
              </MyButton>
            </div> */}
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
