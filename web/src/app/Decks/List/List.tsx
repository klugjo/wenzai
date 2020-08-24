import React from 'react';

import styles from './List.module.css';

const decks = [
  {
    name: 'Italian Pasta'
  },
  {
    name: 'Katakana - カタカナ'
  },
  {
    name: 'Famous operas'
  },
  {
    name: 'African flags'
  },
  {
    name: 'Curry spice list'
  }
];

interface IDeckListProps {

}

const DeckList: React.FC<IDeckListProps> = () => {


  return (
    <div className={styles.root}>
      {decks.map(deck => (
        <div className={styles.deck}>
          <div className={styles.triangle}></div>
          <div>{deck.name}</div>
        </div>
      ))}
    </div>
  );
};

export default DeckList;
