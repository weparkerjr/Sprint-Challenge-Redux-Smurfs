import React, { Component } from 'react';
import Form from './Form';

import { connect } from 'react-redux'

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }

    render() { 
        return (
            <div className='smurf-container'>
            <div className='smurf-card'>
            <h3>{this.props.smurf.name}</h3>
            <p>{this.props.smurf.age} is years old</p>
            <p>{this.props.smurf.height}</p>
            {this.state.editing && <Form smurf={this.props.smurf} submit={this.props.editSmurf} />}
            </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        editing: state.editing
    }
}
 
export default connect(mapStateToProps)(Smurf);