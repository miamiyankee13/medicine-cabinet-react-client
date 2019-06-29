import React from 'react';
import styles from './Backdrop.module.css'

const Backdrop = props => (
    <div 
        className={props.visible ? `${styles.backdrop} ${styles.open}` : `${styles.backdrop}`}
        onClick={props.clicked}
    >
    </div>
);

export default Backdrop;