import React from 'react'
import classes from './Loader.css'

const Loader = props => {
    return(
        <div className={classes.loaderWrapper}>
            <div className={classes.loader}>
                <div/>
                <div/>
            </div>
        </div>
        );
};

export default Loader;

