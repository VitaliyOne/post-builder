import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyTextarea from './UI/textarea/MyTextarea';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [isShown, setIsShown] = useState(true);
  const showСonstructor = () => {
    setIsShown((prev) => !prev);
  };

  const [post, setPost] = useState({ title: '', body: '', text: '' });
  const addNewPost = () => {
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: '', body: '', text: '' });
  };
  return (
    <form>
      {isShown && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Конструктор постов</h2>
          <MyInput
            value={post.title}
            onChange={(event) => setPost({ ...post, title: event.target.value })}
            type="text"
            placeholder="Заголовок"
          />
          <MyInput
            value={post.body}
            onChange={(event) => setPost({ ...post, body: event.target.value })}
            type="text"
            placeholder="Краткое описание"
          />
          <MyTextarea
            value={post.text}
            onChange={(event) => setPost({ ...post, text: event.target.value })}
            type="text"
            placeholder="Текст"
          />
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
          <MyButton onClick={showСonstructor} style={{ float: 'right' }} type="button">
            Свернуть конструктор
          </MyButton>
        </div>
      )}
      {!isShown && (
        <div className="buttonShowСonstructor">
          <MyButton onClick={showСonstructor} type="button">
            Развернуть конструктор
          </MyButton>
        </div>
      )}
    </form>
  );
};

export default PostForm;
