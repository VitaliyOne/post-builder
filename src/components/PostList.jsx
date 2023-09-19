import React from 'react';
import PostsItem from './PostsItem';

const PostList = ({ posts, titlePosts, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{titlePosts}</h1>
      {posts.map((post, index) => (
        <PostsItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
