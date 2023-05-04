import React from "react";
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import styles from './FriendListStyle.module.css';

export const FriendList = ({ friends }) => {
    return (
        <section className={styles.friends}>
            <ul className={styles.friendList}>
                {friends.map(({ id, avatar, isOnline, name }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        isOnline={isOnline}
                        name={name}
                    ></FriendListItem>
                ))}
            </ul>
        </section>
        
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};