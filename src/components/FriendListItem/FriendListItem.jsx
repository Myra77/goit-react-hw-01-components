import React from "react";
import PropTypes from 'prop-types';

import styles from './FriendListItemStyle.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const classNames = [styles.status];
    if (isOnline) {
      classNames.push(styles.online);
    } else {
      classNames.push(styles.offline);
    }
    return (
    <li className={styles.item}>
        <span className={classNames.join(' ')}>{isOnline}</span>
        <div className={styles.thumb}>
            <img 
                className={styles.avatar} 
                src={avatar} 
                alt="User avatar" 
                width="48"   
            />
        </div>
        <p className={styles.name}>{name}</p>
    </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};