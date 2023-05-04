import React from "react";
import PropTypes from 'prop-types';

import styles from './TransactionHistoryStyle.module.css';

export const TransactionHistory = ({ items }) => {
    return(
        <div class={styles.transactionHistory}>
            <table className={styles.transactionHeader}>
                <thead className={styles.td_head}>
                    <tr className={styles.tr_head}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
            </table>
            <table className={styles.transactionRows}>
                <tbody>
                        {items.map(({ id, type, amount, currency }) => (
                            <tr key={id} className={styles.tr_item}>
                            <td className={styles.td_item}>{type}</td>
                            <td className={styles.td_item}>{amount}</td>
                            <td className={styles.td_item}>{currency}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};