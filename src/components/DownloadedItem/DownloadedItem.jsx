import PropTypes from 'prop-types';
import styles from './DownloadedItem.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const DownloadedItem = ({ statLabel, percentage }) => {
    return (
        <li className={styles.downloadedItem} style={{
            backgroundColor: getRandomHexColor(),
        }}>
            <span className={styles.statLabel}>{statLabel}</span>
            <span className={styles.percentage}>{percentage}</span>
        </li>
    )
};

DownloadedItem.propTypes = {
    statLabel: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};