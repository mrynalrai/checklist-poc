import { connect } from "react-redux";

const Test = ({ messiChecklist }) => {
    console.log(messiChecklist);

    return(
        null
    )
}

const mapStateToProps = (state)  => {
    return {
        messiChecklist: state.messiChecklist
    }
}

export default connect(mapStateToProps, null)(Test);