import React from 'react';
import cn from 'classnames';
import { GiAfrica, GiCupcake, GiNoodles, GiJapan, GiMusicalNotes } from 'react-icons/gi';
import { AiOutlinePlus, AiOutlineEdit, AiOutlineRocket, AiOutlineDelete } from 'react-icons/ai';

import styles from './List.module.css';

const decks = [
  {
    id: '1',
    name: 'Italian Pasta',
    type: 'Food',
    icon: <GiNoodles />
  },
  {
    id: '2',
    name: 'Katakana - カタカナ',
    type: 'Language',
    icon: <GiJapan />
  },
  {
    id: '3',
    name: 'Famous operas',
    type: 'Music',
    icon: <GiMusicalNotes />
  },
  {
    id: '4',
    name: 'African flags',
    type: 'Geography',
    icon: <GiAfrica />
  },
  {
    id: '5',
    name: 'Curry spice list',
    type: 'Food',
    icon: <GiCupcake />
  }
];

interface IDeckListProps {

}

const DeckList: React.FC<IDeckListProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1><span>.</span>DECKS</h1>
        <div className={styles.newDeckButton}><AiOutlinePlus /></div>
      </div>
      {decks.map(deck => (
        <div className={styles.deck} key={deck.id}>
          <div className={styles.icon}>{deck.icon}</div>
          <div className={styles.titleContainer}>
            <div className={styles.title}>{deck.name}</div>
            <div className={styles.type}>{deck.type}</div>
          </div>
          <div className={styles.separator} />
          <div className={cn(styles.button, styles.mainButton)}><AiOutlineEdit /></div>
          <div className={styles.button}><AiOutlineRocket /></div>
          <div className={styles.button}><AiOutlineDelete /></div>
        </div>
      ))}
    </div>
  );
};

export default DeckList;
