import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/images/BASF_logo.png';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#f8991d',
        width: '100%',
        justifyContent: 'flex-start'
    },
    logo: {
        height: 80,
        width: 160
    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    }
});

// Create Document Component
const PDFGenerator = (props) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.logo} src={logo}>

                </Image>
            </View>
            <View style={styles.body}>
                {
                    props.player === 'Messi' ?
                        <Text>
                            {props.player}
                        </Text> : null
                }
            </View>
        </Page>
        <Page></Page>
        <Page></Page>
    </Document>
);

export default PDFGenerator; 