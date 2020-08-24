import React from 'react';
import { AiOutlineRocket, AiOutlineHome, AiOutlineBuild, AiOutlineSearch, AiOutlineDashboard } from 'react-icons/ai';
import cn from 'classnames';
import { useLocation, useHistory } from 'react-router-dom';
import * as ROUTES from '../../../utils/routes';

import styles from './Menu.module.css';

interface IMenuItemProps {
  content: React.ReactNode;
  icon: React.ReactNode;
  path: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  content,
  icon,
  path
}: IMenuItemProps) => {
  const location = useLocation();
  const history = useHistory();

  function onClick() {
    history.push(path);
  }

  return (
    <div
      className={cn(styles.item, {[styles.selected]: location.pathname === path})}
      onClick={onClick}
    >
      {icon}
      {content}
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.separator} />
      <div className={styles.mainMenuItems}>
        <MenuItem content="Home" icon={<AiOutlineHome />} path={ROUTES.HOME} />
        <MenuItem content="Decks" icon={<AiOutlineBuild />} path={ROUTES.DECKS} />
        <MenuItem content="Practice" icon={<AiOutlineRocket />} path={ROUTES.PRACTICE} />
        <MenuItem content="Explore" icon={<AiOutlineSearch />} path={ROUTES.EXPLORE} />
        <MenuItem content="Settings" icon={<AiOutlineDashboard />} path={ROUTES.SETTINGS} />
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default Menu;
