import { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classes from './Checklist.module.scss';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16
    }
}));

const Checklist = props => {

    const muiClasses = useStyles();
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;

    const handleBack = () => {
        props.history.push('/');
    }

    const handleSubmit = () => {
        props.history.push('/result');
    }

    console.log(state);

    return (
        <div className={classes['Checklist']}>
            {props.player ? (
                <>
                <h1>{props.player}</h1>
                <div className={{ display: 'flex' }}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Assign responsibility</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                        <FormHelperText>Be careful</FormHelperText>
                    </FormControl>
                </div>
                </>
            ) : <p> Please select a player</p>}
            {props.player && (
                <Button
                variant="contained"
                className={
                    `${muiClasses.button} ${classes['Checklist_button']}`
                }
                onClick={handleSubmit}
            >
                Submit
            </Button>
            )}
            <Button
                variant="contained"
                className={
                    `${muiClasses.button} ${classes['Checklist_button']}`
                }
                onClick={handleBack}
            >
                Back to Landing Page
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        player: state.player
    }
}

export default connect(mapStateToProps) (Checklist);