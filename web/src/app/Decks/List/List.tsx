import React from 'react';
import cn from 'classnames';
import { GiAfrica, GiCupcake, GiNoodles, GiJapan, GiMusicalNotes } from 'react-icons/gi';
import { AiOutlinePlusCircle, AiOutlineEdit, AiOutlineRocket, AiOutlineDelete } from 'react-icons/ai';

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
        <div className={styles.newDeckButton}><AiOutlinePlusCircle /><span>New</span></div>
      </div>
      {decks.map(deck => (
        <div className={styles.deck} key={deck.id}>
          <div className={styles.icon}>{deck.icon}</div>
          <div className={styles.titleContainer}>
            <div className={styles.title}>{deck.name}</div>
            <div className={styles.type}>{deck.type}</div>
          </div>
          <div className={styles.separator} />
          <div className={styles.action}>
            <div className={styles.secondaryAction}>
              <div className={styles.actionButton}>
                <AiOutlineDelete />
              </div>
              <div className={styles.actionLabel}>Delete</div>
            </div>
            <div className={styles.secondaryAction}>
              <div className={styles.actionButton}>
                <AiOutlineRocket />
              </div>
              <div className={styles.actionLabel}>Learn</div>
            </div>
            <div className={styles.mainAction}>
              <div className={styles.actionButton}>
                <AiOutlineEdit />
              </div>
              <div className={styles.actionLabel}>Edit</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeckList;
