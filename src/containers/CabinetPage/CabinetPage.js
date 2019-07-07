import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStrains, fetchUserStrains, removeStrainFromCabinet } from '../../actions/strains';
import requiresLogin from '../../hoc/requiresLogin/requiresLogin';
import CabinetStrain from './CabinetStrain/CabinetStrain';
import CabinetStrainForm from '../Forms/CabinetStrainForm/CabinetStrainForm';
import CabinetFilterForm from '../Forms/CabinetFilterForm/CabinetFilterForm';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './CabinetPage.module.css';

class CabinetPage extends Component {
    state = {
        filtered: false,
        filter: ''
    };
    
    componentDidMount() {
        this.props.dispatch(fetchStrains());
        this.props.dispatch(fetchUserStrains());
    }

    handleEnableFilter = filter => {
        this.setState({
            filtered: true,
            filter
        });
    }

    handleDisableFilter = () => {
        this.setState({
            filtered: false,
            filter: ''
        });
    }

    handleViewDetails = id => {
        this.props.history.push(`/cabinet/${id}`);
    }

    handleRemoveStrain = id => {
        this.props.dispatch(removeStrainFromCabinet(id))
            .then(() => this.props.dispatch(fetchUserStrains()));
    }

    render() {
        if (this.props.error) {
            return <p className="error">{this.props.error}</p>
        }
        
        if (this.props.loading) {
            return <Spinner />;
        }
        
        this.props.userStrains.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0
        });

        const strains = this.props.userStrains.map(strain => (
            <CabinetStrain 
                key={strain._id}
                name={strain.name}
                viewDetails={() => this.handleViewDetails(strain._id)}
                removeStrain={() => this.handleRemoveStrain(strain._id)}
            />
        ));

        return (
            <Fragment>
                <section className={styles.filters} aria-live="polite">
                    <CabinetStrainForm />
                    <CabinetFilterForm
                        enableFilter={this.handleEnableFilter} 
                        disableFilter={this.handleDisableFilter}
                    />
                </section>
                <section className={styles.cabinetInfo} aria-live="polite">
                    {this.state.filtered ? <h3>{`${this.state.filter} Strains in Cabinet: ${strains.length}`}</h3> : <h3>Strains in Cabinet: {strains.length}</h3>}
                </section>
                <section className={styles.strains} aria-live="polite">
                    {strains}
                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    userStrains: state.strainData.userStrains,
    loading: state.strainData.loading,
    error: state.strainData.error
});

export default requiresLogin()(connect(mapStateToProps)(CabinetPage));