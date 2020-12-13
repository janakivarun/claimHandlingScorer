import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Box, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = theme => ({
    formControlClass: '10px 0 10px 0',
    textFieldClass: '300px',
    buttonClass: {
        height: '56px',
        padding: '0px 14px',
        backgroundColor: 'blue',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkblue',
            color: 'white'
        }
    },
    alertClass: {
        width: '400px',
        height: '500px'
    }
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            id: '',
            message: '',
            error: undefined
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const id = this.state.id.trim();
        const state = { id, error: undefined, message: '' }
        try {
            const {data} = await axios.post('/onSubmit', {claimId: id});
            state.message = data
        } catch (err) {
            state.error = err;
        } finally {
            this.setState(() => {
                return state;
            })
        }
    }

    handleChange(e) {
        const { value: id } = e.target;
        this.setState(() => ({
            id,
            message: '',
            error: undefined
        }))
    }

    checkInput() {
        return !this.state.id;
    }

    render() {
        const { classes } = this.props;
        const { id, error, message } = this.state;
        return (
            <div>
                <Box>
                    <form className={classes.formControlClass} onSubmit={this.handleSubmit}>
                        <TextField className={classes.textFieldClass} label='Enter Claim ID' variant='outlined' type='text' name='name' value={id} onInput={this.handleChange} />
                        <Box m={2} display='inline'>
                            <Button className={classes.buttonClass} type='submit' variant='contained' disabled={this.checkInput()}>Get Score</Button>
                        </Box>
                    </form>
                </Box>

                <Box m={2}>
                {error && (
                    <Alert className={classes.alertClass} severity='error'>{JSON.stringify(error)}</Alert>
                )}

                {message && (
                    <Alert className={classes.alertClass} severity='success'>{JSON.stringify(message)}</Alert>
                )}
                </Box>
            </div>
        )
    }
}

export default withStyles(useStyles)(Dashboard);