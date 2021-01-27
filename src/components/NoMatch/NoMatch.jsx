import { useLocation } from 'react-router-dom';
import classes from './NoMatch.module.scss';

const NoMatch = props => {
    let location = useLocation();
    return (
        <div className={classes['NoMatch']}>
            <p className={classes['NoMatch_header']}>
            Page Not Found
            </p>
            <p>
            We couldn't find what you were looking for.
            </p>
        </div>
    )
}

export default NoMatch;