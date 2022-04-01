import React, { Component } from 'react';
import Cars from './Cars';

class MyCars extends Component {
    render() {
        return (
            <div className="MyCars">
                <h1>Hello world</h1>
                <Cars color='red'>ford</Cars>
                <Cars color='black'>renault</Cars>
                <Cars color=''></Cars>
            </div>
        )

    }
}
export default MyCars;
