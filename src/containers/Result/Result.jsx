import { connect } from 'react-redux';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PDFGenerator from '../../components/PDFGenerator/PDFGenerator';
import classes from './Result.module.scss';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16,
        color: '#000',
        opacity: 0.8
    }
}));

const Result = (props) => {


    console.log(props.messiChecklist);
    const muiClasses = useStyles();

    const handleBack = () => {
        props.history.push('/checklist');
    }
    return (
        <div className={classes['Result']}>
            <p> Name: {props.player} </p>
            <PDFViewer>
                <PDFGenerator checklist={props.messiChecklist} />
            </PDFViewer>
            <PDFDownloadLink
                document={<PDFGenerator />}
                fileName="checklist.pdf"
                style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #4a4a4a"
                }}
            >
                Download
            </PDFDownloadLink>
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

const mapStateToProps = state => {
    return {
        player: state.player,
        messiChecklist: state.messiChecklist,
        ronaldoChecklist: state.ronaldoChecklist
    }
}

export default connect(mapStateToProps, null)(Result);