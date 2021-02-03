import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { PDFDownloadLink, PDFViewer, BlobProvider } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PDFGenerator from '../../components/PDFGenerator/PDFGenerator';
import classes from './Result.module.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = document => {
        const { numPages } = document;
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = offset => setPageNumber(prev => prev + offset);

    const previousPage = () => changePage(-1);

    const nextPage = () => changePage(1);

    const muiClasses = useStyles();

    const handleBack = () => {
        props.history.push('/checklist');
    }
    return (
        <div className={classes['Result']}>
            <p> Name: {props.player} </p>
            {/* <PDFViewer style={{ height: '70vh', width: '70vh' }}>
                <PDFGenerator checklist={props.messiChecklist} player={props.player} />
            </PDFViewer> */}

            <BlobProvider document={<PDFGenerator checklist={props.messiChecklist} player={props.player} />}>
                {({ url, loading }) => {
                    return (loading ? 'Loading document...' : (
                        <>
                            <Document
                                file={url}
                                renderMode="svg"
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page scale={0.5} pageNumber={pageNumber}></Page>
                            </Document>
                            <div>
                                <p>
                                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                                </p>
                                <button
                                    type="button"
                                    disabled={pageNumber <= 1}
                                    onClick={previousPage}
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    disabled={pageNumber >= numPages}
                                    onClick={nextPage}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    ))
                }}
            </BlobProvider>
            <PDFDownloadLink
                document={<PDFGenerator checklist={props.messiChecklist} player={props.player} />}
                fileName="engenia-checklist.pdf"
                style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#fff",
                    border: "1px solid #4a4a4a"
                }}
            >
                {({ url, loading }) => {
                    return (loading ? 'Loading document...' : 'Download Now!')
                }
                }
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