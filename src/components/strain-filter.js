import React from 'react';
import { connect } from 'react-redux';
import { fetchUserStrains, filterUserStrains } from '../actions/strain-data';

export class StrainFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }

        this.filterStrains = this.filterStrains.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    filterStrains(event) {
        event.preventDefault();
        const filter = this.state.value;
        if (filter === 'All') {
            return this.props.dispatch(fetchUserStrains());
        } else if (filter === 'Sativa' || filter === 'Indica' || filter === 'Hybrid') {
            return this.props.dispatch(filterUserStrains(filter))
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.filterStrains}>
                    <label htmlFor="strain-filter">Filter Strains</label>
                    <select id="strain-filter" onChange={this.handleChange}>
                        <option value="">--Filter by Type--</option>
                        <option value="Sativa">Sativa</option>
                        <option value="Indica">Indica</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="All">All</option>
                    </select>
                    <button type="submit">Filter</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        strains: state.strainData.strains,
        userStrains: state.strainData.userStrains
    };
};

export default (connect(mapStateToProps)(StrainFilter));