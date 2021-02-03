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
// import { jsPDF } from 'jspdf';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16
    }
}));

const Checklist = props => {

    const muiClasses = useStyles();
    const state = props.messiChecklist;

    const handleChange = (event) => {
        props.updateMessiChecklist({ ...state, [event.target.name]: event.target.checked });
    };

    const { mostGoals, mostAssists, mostTackles } = state;

    const handleBack = () => {
        props.history.push('/');
    }

    const handleSubmit = () => {
        props.history.push('/result');
    }

    /**
     * jsPDF sample
     */
    // let htmlString;
    // setTimeout(() => {
    //     // htmlString = document.getElementById('html2pdf');
    //     // htmlString = `<a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/print'> hi</a>`
    //     console.log(htmlString);
    // }, 2000);

    // let doc = new jsPDF();

    // const downloadPDF = () => {
    //     doc.html(htmlString, {
    //         callback: function (doc) {
    //             doc.save();
    //         },
    //         x: 10,
    //         y: 10
    //     });
    // }

    return (
        <div id='html2pdf' className={classes['Checklist']}>
            {props.player ? (
                <>
                    <h1>{props.player}</h1>
                    <div className={{ display: 'flex' }}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Assign responsibility</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={mostGoals} onChange={handleChange} name="mostGoals" />}
                                    label="Most Goals"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={mostAssists} onChange={handleChange} name="mostAssists" />}
                                    label="Most Assists"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={mostTackles} onChange={handleChange} name="mostTackles" />}
                                    label="Most Tackles"
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
            {/* <Button onClick={downloadPDF}>
                Download PDF
            </Button> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        player: state.player,
        messiChecklist: state.messiChecklist,
        ronaldoChecklist: state.ronaldoChecklist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMessiChecklist: data => dispatch({ type: 'messiChecklistUpdated', payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);