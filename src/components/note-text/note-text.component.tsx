import React from 'react';

interface Props {
  text: string,
  onTagClicked: (tag: string) => void;
}

const NoteText: React.FC<Props> = (props: Props) => {
  const regex = /(^|\s)(#[a-z\d-]+)/ig;
  const parts = props.text.split(regex);

  const handleTagClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const tag = event.currentTarget.textContent;
    tag && props.onTagClicked(tag);
  }

  return (
    <p className="disable-select">
      {parts.filter(part => part).map((part, i) => (
        regex.test(part)
          ? <mark className="Tag-link" key={i} onClick={handleTagClick}>{part}</mark>
          : <span key={i}>{part}</span>
      ))}
    </p>
  )
}

export { NoteText };