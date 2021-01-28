import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classes from './Result.module.scss';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16
    }
}));

const Result = (props) => {

    const muiClasses = useStyles();
    console.log(props);

    const handleBack = () => {
        props.history.push('/Messi');
    }
    return (
        <div>
            <h1> Result </h1>
            <Button
                variant="contained"
                className={
                    `${muiClasses.button} ${classes['Checklist_button']}`
                }
                onClick={handleBack}
            >
                Back to Checklist Page
            </Button>
        </div>
    )
}

export default Result;