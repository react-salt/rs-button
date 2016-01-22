import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/button.js';

export default class Example extends Component {
    Cn() {
        alert('你点击了按钮');
    }

    render() {
        return (
            <div>
                <Button block onClick={this::this.Cn}>
                    Click
                </Button>
            </div>
        );
    }
}
