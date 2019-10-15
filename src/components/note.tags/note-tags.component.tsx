import React from 'react';

import './notes-tags.css';

interface Props {
  tags: string[],
}

const NoteTags: React.FC<Props> = (props: Props) => {
  const { tags } = props;

  return (
    <p className="Note-tags-wrapper">
      <span className="Note-tag-header">Tags:</span>
      <span className="Note-tags">
        {tags.map(tag => (
          <small className="Tag-link" key={tag}>{tag}</small>
        ))}
      </span>
      {!tags.length && <small>No tags</small>}
    </p>
  );
}

export { NoteTags };
