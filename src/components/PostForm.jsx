import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyTextarea from './UI/textarea/MyTextarea';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '', text: '' });
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: '', body: '', text: '' });
  };
  return (
    <form>
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
    </form>
  );
};

export default PostForm;
