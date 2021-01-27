import React from 'react';
import classes from './Layout.module.scss';

const Layout = (props) => {
    return(
        <div className={classes['Layout']}>
            <header>
                <p>Welcome to my POC</p>
            </header>
            <main>
            {props.children}
            </main>
            <footer>
                Copyright&copy; Mrinal 2021
            </footer>
        </div>
    )
}

export default Layout;