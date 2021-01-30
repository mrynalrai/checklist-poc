import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classes from './Home.module.scss';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '90%',
      maxWidth: 700
    },
    button: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16
    }
  }));

const Home = ({ player, updatePlayer }) => {

    const muiClasses = useStyles();
    const handleChange = (event) => {
        updatePlayer(event.target.value);
    };

    return (
        <div className={classes['Home']}>
            <Grid container>
                <Grid item container xs={12} direction='column'>
                    <FormControl className={muiClasses.formControl}>
                    <InputLabel id="demo-simple-select-label">Player Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={player}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Messi'}>Messi</MenuItem>
                        <MenuItem value={'Ronaldo'}>Ronaldo</MenuItem>
                    </Select>
                    </FormControl>
                    <div>
                    <Button 
                        variant="contained" 
                        className={
                            `${muiClasses.button} ${classes['Home_button']}`
                        }>
                        <Link to='/checklist'>Submit</Link>
                    </Button>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      player: state.player
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      updatePlayer: (name) => dispatch({ type: 'playerUpdated', payload: name })
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);