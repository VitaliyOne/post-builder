import React, { useMemo, useState } from 'react';
import MySelect from './UI/select/MySelect';

const PostFilter = (props) => {
  const [selectedSort, setSelectedSort] = useState('id');

  const sortPosts = (selectedSort) => {
    setSelectedSort(selectedSort);
    props.remuveSortPost(selectedSort);
  };

  return (
    <div>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        option={[
          { value: 'title', name: 'По заголовку' },
          { value: 'body', name: 'По названию' },
          { value: 'id', name: 'По дате' }
        ]}
      />
    </div>
  );
};

export default PostFilter;
