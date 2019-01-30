import React from 'react';
import { API_BASE_URL } from '../config';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strains: [],
            error: null,
            loading: false
        };   
    }

    componentDidMount() {
        this.getStrains();
    }

    getStrains() {
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${API_BASE_URL}/strains`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(results => {
                this.setState({
                    strains: results.strains,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load strains',
                    loading: false
                });
            });
    }
    
    render() {
        let body;
        if (this.state.error) {
            body = (
                <div>{this.state.error}</div>
            );
        } else if (this.state.loading) {
            body = (
                <div>Loading strains...</div>
            );
        } else {
            const strains = this.state.strains.map((strain, index) => {
                return <div key={`strain-${index}`} data-index={index}>{strain.name}</div>
            });
            body = (
                <div>
                    {strains}
                </div>
            );
        }

        return (
            <div>
                <h1>Medicine Cabinet</h1>
                {body}
            </div>
        );
    }
}