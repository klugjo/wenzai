import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo-abbreviated-inverted.svg';

import styles from './Menu.module.css';

interface IMenuItemProps {
  content: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  content
}: IMenuItemProps) => (
    <div className={styles.item}>
      {content}
    </div>
  );

const Menu: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <MenuItem content="Home" />
      <MenuItem content="Decks" />
      <MenuItem content="Practice" />
      <MenuItem content="Explore" />
      <div className={styles.separator} />
      <MenuItem content={<AiOutlineUser />} />
    </div>
  );
};

export default Menu;
