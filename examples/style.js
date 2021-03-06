import React, { Component } from 'react';
import Button from '../src/button.js';

export default class Example extends Component {

    render() {
        return (
            <div>
                <Button className="text">User Defined ClassName</Button>

                <hr />

                <Button myStyle="primary">Primary</Button>
                <Button myStyle="success">Success</Button>
                <Button myStyle="info">Info</Button>
                <Button myStyle="warning">Warning</Button>
                <Button myStyle="danger">Danger</Button>

                <hr />

                <Button myStyle="link">Link liked Button</Button>
                <Button href="https://github.com/react-salt">Button liked Link</Button>
                <Button href="https://github.com/react-salt" myStyle="link">Link liked Link</Button>
            </div>
        );
    }
}
