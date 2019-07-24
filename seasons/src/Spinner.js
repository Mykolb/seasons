import React from 'react'


const Spinner = props => {
    return( 
    <div className='ui active dimmer'>
        <div className='ui big text loader'>
            {props.message}
        </div>
    </div>
    )
}

//default value for props, if you don't pass in a message prop it eill refer to this
Spinner.defaultProps = {
    message: 'Loading...'
}


export default Spinner;