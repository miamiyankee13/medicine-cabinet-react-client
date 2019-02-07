import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import StrainDropdown from './strain-dropdown';
import StrainFilter from './strain-filter';
import { removeStrainFromCabinet, fetchUserStrains, fetchStrains } from '../actions/strain-data'
import './cabinet-page.css';

export class CabinetPage extends React.Component {
    constructor(props) {
        super(props);

        this.viewDetails = this.viewDetails.bind(this);
        this.removeStrain = this.removeStrain.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchStrains());
        this.props.dispatch(fetchUserStrains());
    }
    
    viewDetails(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const strain = this.props.userStrains[index];
        this.props.history.push(`/cabinet/${strain._id}`);
    }

    removeStrain(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const strain = this.props.userStrains[index];
        this.props.dispatch(removeStrainFromCabinet(strain._id))
            .then(() => this.props.dispatch(fetchUserStrains()));
    }

    render() {
        const cabinetStrains = this.props.userStrains.map((strain, index) => {
            return (
                <div key={`strain-${index}`} className="cabinet-strain">
                    <h2>{strain.name}</h2>
                    <button data-index={index} onClick={this.viewDetails}>Strain Details</button>
                    <button data-index={index} onClick={this.removeStrain}>Remove</button>
                </div>
            )
        });

        return (
            <section aria-live="polite">
                <div className="flex-forms">
                <StrainDropdown />
                <StrainFilter />
                </div>
                <br />
                <h3>Strains in Cabinet: {cabinetStrains.length}</h3>
                <br />
                <div className="flex-cabinet">
                    {cabinetStrains}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        userStrains: state.strainData.userStrains
    };
};

export default requiresLogin()(connect(mapStateToProps)(CabinetPage));
