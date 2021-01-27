import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classes from './Checklist.module.scss';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16
    }
  }));

const Checklist = props => {
    
    const muiClasses = useStyles();
    console.log(props.match.params);

    const handleBack = () => {
        props.history.goBack();
    }
    return (
        <div className={classes['Checklist']}>
            {props.match.params && <h1>{props.match.params.player}</h1>}
            <Button 
                variant="contained" 
                className={
                    `${muiClasses.button} ${classes['Checklist_button']}`
                }
                onClick={handleBack}
            >
                Back
            </Button>
        </div>
    )
}

export default Checklist;