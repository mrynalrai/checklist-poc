import { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Home = props => {

    const muiClasses = useStyles();
    const [ player, setPlayer ] = useState('Messi');
    const handleChange = (event) => {
        setPlayer(event.target.value);
    };

    return (
        <div className={classes['Home']}>
            <Grid container>
                <Grid item xs={12} direction='column'>
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
                        <Link to={`/${player}`}>Submit</Link>
                    </Button>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;