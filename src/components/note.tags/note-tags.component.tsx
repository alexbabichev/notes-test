import React from 'react';

import './notes-tags.css';

interface Props {
  tags: string[],
  onTagClicked: (tag: string) => void;
}

const NoteTags: React.FC<Props> = (props: Props) => {
  const handleTagClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const tag = event.currentTarget.textContent;
    tag && props.onTagClicked(tag);
  }

  return (
    <p className="Note-tags-wrapper">
      <span className="Note-tag-header">Tags:</span>
      <span className="Note-tags">
        {props.tags.map(tag => (
          <small className="Tag-link" key={tag} onClick={handleTagClick}>
            {tag}
          </small>
        ))}
      </span>
      {!props.tags.length && <small>No tags</small>}
    </p>
  );
}

export { NoteTags };
