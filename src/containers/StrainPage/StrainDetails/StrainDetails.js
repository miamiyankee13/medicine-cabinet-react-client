import React from 'react';
import styles from './StrainDetails.module.css';

const StrainDetails = props => (
    <section className={styles.details}>
        <h2>{props.name}</h2>
        {
            props.type === "Sativa" ? <h3 className={styles.sativa}>Sativa</h3> :
            props.type === "Indica" ? <h3 className={styles.indica}>Indica</h3> : <h3 className={styles.hybrid}>Hybrid</h3>
        }
        <h4>Flavor</h4>
        <p>{props.flavor}</p>
        <h4>Description</h4>
        <p>{props.description}</p>
        <h4>Comments</h4>
        {props.comments}
    </section>
);

export default StrainDetails;