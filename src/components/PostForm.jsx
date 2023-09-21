import React, { useEffect, useState } from 'react';
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

  const getPost = () => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=50')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const numPost = data[Math.floor(Math.random() * 49)];
        setPost({
          title: numPost.newsSite,
          body: numPost.title,
          text: `${numPost.summary} Source: ${numPost.url}`
        });
      });
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
          <div style={{ float: 'right' }}>
            <MyButton onClick={getPost} style={{ margin: '5px 5px 5px 5px' }}>
              Cлучайный пост
            </MyButton>
            <MyButton onClick={showСonstructor}>Свернуть конструктор</MyButton>
          </div>
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
