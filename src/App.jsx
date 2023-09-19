import { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1694023889509,
      title: 'JavaScript',
      body: 'JavaScript — это самый распространённый инструмент для создания интерфейсов в браузере.',
      text: 'JavaScript — это язык программирования, который в первую очередь применяют в вебе. С его помощью сайты делают интерактивными: добавляют всплывающие окна, анимацию, кнопки лайков и формы для отправки информации. Его ещё называют главным языком фронтенда — «лицевой» стороны сайта, с которой взаимодействуют пользователи.'
    },
    {
      id: 1694525897669,
      title: 'Pyton',
      body: 'Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении.',
      text: 'Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении.Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении.Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении.'
    },
    {
      id: 1695025905385,
      title: 'Java',
      body: 'Java — низкоуровневый, строго типизированный объектно-ориентированный язык программирования общего назначения.',
      text: 'Java — это многоплатформенный объектно-ориентированный язык программирования, работающий на миллиардах устройств по всему миру. На нем работают приложения, операционные системы для смартфонов, корпоративное программное обеспечение и многие известные программы. Несмотря на то, что Java был изобретен более 20 лет назад, в настоящее время он является самым популярным языком программирования среди разработчиков приложений.'
    }
  ]);

  const [selectedSort, setSelectedSort] = useState('id');

  const sortedPosts = useMemo(() => {
    switch (selectedSort) {
      case 'id':
        return posts.sort((a, b) => a[selectedSort] - b[selectedSort]);
      default:
        return posts.sort((a, b) => {
          return a[selectedSort].localeCompare(b[selectedSort]);
        });
    }
  }, [posts, selectedSort]);

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
  };

  const removePost = (post) => {
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
  };

  const sortPost = (selectedSort) => {
    setSelectedSort(selectedSort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter remuveSortPost={sortPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} titlePosts="Список постов" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  );
};

export default App;
