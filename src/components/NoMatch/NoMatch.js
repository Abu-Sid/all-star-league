import React from 'react';

const NoMatch = () => {
    const divStyle={
        textAlign:'center',
    }
    return (
        <div style={divStyle}>
            <h1>Error 404!!</h1>
            <h4>Data Not Found</h4>
        </div>
    );
};

export default NoMatch;