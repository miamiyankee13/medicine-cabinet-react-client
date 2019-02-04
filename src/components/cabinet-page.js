import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import StrainDropdown from './strain-dropdown';
import { removeStrainFromCabinet, fetchUserStrains } from '../actions/strain-data'
import './cabinet-page.css';

export class CabinetPage extends React.Component {
    constructor(props) {
        super(props);

        this.viewDetails = this.viewDetails.bind(this);
        this.removeStrain = this.removeStrain.bind(this);
    }
    
    viewDetails(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const strain = this.props.userStrains[index];
        this.props.history.push(`/dashboard/cabinet/${strain._id}`);
    }

    removeStrain(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const strain = this.props.userStrains[index];
        this.props.dispatch(removeStrainFromCabinet(strain._id))
            .then(() => this.props.dispatch(fetchUserStrains()));
    }

    render() {
        if (!this.props.userStrains) {
            return null;
        }

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
            <div>
                <h3>Strains in Cabinet: {cabinetStrains.length}</h3>
                <br />
                <StrainDropdown />
                <div className="flex-cabinet">
                    {cabinetStrains}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userStrains: state.strainData.userStrains
    };
};

export default requiresLogin()(connect(mapStateToProps)(CabinetPage));
