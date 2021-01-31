import React from 'react';
import { connect } from 'react-redux';
import classes from './Layout.module.scss';

const Layout = ({ isIframe, children}) => {

    console.log(isIframe);
    return(
        <div className={classes['Layout']}>
            { !isIframe && (
                <header>
                    <p>Welcome to my POC</p>
                </header>
            )}
            <main>
            {children}
            </main>
            { !isIframe && (
                <footer>
                    <p>Copyright&copy; Mrinal 2021</p>
                </footer>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isIframe: state.isIframe
    }
}

export default connect(mapStateToProps, null)(Layout);