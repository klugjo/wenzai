import React from 'react';
import { AiOutlineRocket, AiOutlineHome, AiOutlineBuild, AiOutlineSearch, AiOutlineDashboard } from 'react-icons/ai';
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo-abbreviated-inverted.svg';

import styles from './Menu.module.css';

interface IMenuItemProps {
  content: React.ReactNode;
  icon: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  content,
  icon
}: IMenuItemProps) => (
    <div className={styles.item}>
      {icon}
      {content}
    </div>
  );

const Menu: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.separator} />
      <div className={styles.mainMenuItems}>
        <MenuItem content="Home" icon={<AiOutlineHome />} />
        <MenuItem content="Decks" icon={<AiOutlineBuild />} />
        <MenuItem content="Practice" icon={<AiOutlineRocket />} />
        <MenuItem content="Explore" icon={<AiOutlineSearch />} />
        <MenuItem content="Settings" icon={<AiOutlineDashboard />} />
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default Menu;
