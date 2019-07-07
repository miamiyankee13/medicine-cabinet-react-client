import React from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './CabinetStrain.module.css';

const CabinetStrain = props => (
    <article className={styles.cabinetStrain} aria-live="polite">
        <h2>{props.name}</h2>
        <Button clicked={props.viewDetails}>Details</Button>
        <Button clicked={props.removeStrain}>Remove</Button>
    </article>
);

export default CabinetStrain;