import React from 'react';
import PostsItem from './PostsItem';

const PostList = ({ posts, remove }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostsItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
