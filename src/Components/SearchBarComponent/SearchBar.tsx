import React, {useState} from 'react';
import './SearchBar.css';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, TextField, Tooltip, } from '@material-ui/core';
import { IUserInput } from '../../Common/Interfaces'

interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<number | null>(5);
    const handleSearchQueryChange = (s: number | null) =>{
        setSearchQuery(s);          
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        if (SearchQuery !== null && SearchQuery !== 0) {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }


    return <div className="SearchBarContainer">
        <h1>Photo Walls</h1>
    <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
        <Tooltip title="Please input a number">
            <TextField
                required
                id="outlined-required"
                label="Search"
                variant="outlined"
                error={HasFocus && SearchQuery === null}
                onClick={() => setHasFocus(true)}
                value={SearchQuery}
                onChange={e => handleSearchQueryChange(+ e.target.value)}
            />
        </Tooltip>
        </Grid>


        <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Apply
                </Button>
            </Grid>
    </Grid>
</div>
}

export default SearchBar