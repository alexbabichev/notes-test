import React from 'react';
import { connect } from 'react-redux';

import { filterNotes } from '../../redux/actions';
import { FilterNotesAction } from '../../redux/interfaces';


interface Props {
  text: string,
  onFilterNotes: (text: string) => FilterNotesAction;
  onTagClicked: (tag: string | null) => void;
}

const NoteTextFC: React.FC<Props> = (props: Props) => {
  const { text, onFilterNotes } = props;

  const regex = /(^|\s)(#[a-z\d-]+)/ig;
  const parts = text.split(regex);

  const handleTagClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const tag = event.currentTarget.textContent;
    tag && onFilterNotes(tag);
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

const mapDispatchToProps = {
  onFilterNotes: filterNotes
}

// const NoteText = { NoteText: connect(null, mapDispatchToProps)(NoteTextFC) }

export default connect(null, mapDispatchToProps)(NoteTextFC);
