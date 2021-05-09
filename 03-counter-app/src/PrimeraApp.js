// SFC => Stateless Functional Component
// FC => Functional Component
import React from 'react';
import PropTypes from 'prop-types';

const FirtsApp = ({saludo, subtititle}) => {
 
    
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtititle}</p>
        </>
    );

}

FirtsApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirtsApp.defaultProps = {
    subtititle: 'subtititle - valor por defecto'
}

export default FirtsApp
