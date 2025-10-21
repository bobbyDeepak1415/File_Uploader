import React from 'react';
import PropTypes from 'prop-types';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color:props.color};
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Demo.propTypes = {};

export default Demo;
