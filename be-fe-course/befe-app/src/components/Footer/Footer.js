import React from 'react';
import classes from './Footer.css';

const footer = (props) => {
    return(
        <div className={classes.Footer}>
            <footer id={classes.pagefooter}>
                <div id={classes.footertop}>
                </div>
                <div id={classes.footerbody}>
                    <div id={classes.footerleft}>
                        <div>
                            <p>Constructed by Leo Vermeulen</p>
                            <p>PublicisSapient Ltd.</p>
                            <p>63 Turnmill</p>
                            <p>London</p>
                        </div>
                    </div>
                    <div id={classes.footercentre}>
                        <p>This is the footer's centre</p>
                    </div>
                    <div id={classes.footerright}>
                        <p>And this is the footer's right</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default footer;