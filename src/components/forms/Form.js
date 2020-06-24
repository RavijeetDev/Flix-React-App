import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const getStyles = makeStyles(theme => ({
    formControl: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    button: {
        height: '2.2rem',
        alignSelf: 'center',
        marginTop: theme.spacing(1)
    }
}))

const Form = props => {

    const classes = getStyles()

    return (
        <form className="form" onSubmit={props.onSubmit}>
            <TextField
                required
                label='Search'
                name='searchQuery'
                margin='normal'
                variant='outlined'
                onChange={e => props.onInputChange(e.target.value)} />

            <FormControl className={classes.formControl} variant="outlined" margin='normal'>
                <InputLabel>Search Type</InputLabel>
                <Select
                    native
                    onChange={e => props.onSearchTypeChange(e.target.value)}
                    label="Search Type">
                    <option value={'multi'}>Multi</option>
                    <option value={'movie'}>Movie</option>
                    <option value={'tv'}>Tv Show</option>
                </Select>
            </FormControl>
            <Button className={classes.button} variant='contained' color='primary' type='submit'>Search</Button>
        </form>
    )
}

export default Form