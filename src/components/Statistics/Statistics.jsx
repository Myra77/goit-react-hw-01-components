import PropTypes from 'prop-types';

import styles from './StatisticsStyle.module.css';
import { DownloadedItem } from 'components/DownloadedItem/DownloadedItem';


export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <DownloadedItem
                        key={id}
                        statLabel={label}
                        percentage={percentage}/>
                ))}
            </ul>
        </section>
        )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};