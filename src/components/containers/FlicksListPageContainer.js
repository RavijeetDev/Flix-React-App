import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FlicksListView from '../layouts/FlickListView'
import Loading from '../layouts/Loading'

import { debug } from '../../utils/utility'
const tag = "FLICKS_LIST_PAGE_CONTAINER";

const FlicksListPageContainer = props => {

    const { isLoading, flixDataList, type } = props

    const handleChange = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (

        <div className="flicks-list-page-container">

            <FormControl variant="outlined" margin='normal'>
                <InputLabel>Category</InputLabel>
                <Select
                    native
                    onChange={e => props.onFlickListCategoryChange(e.target.value)}
                    label="Category">
                    <option value={"popular"}>Popular</option>
                    <option value={(type == 'movie') ? "now_playing" : "airing_today"}>{(type == 'movie') ? 'Now Playing' : 'Airing Today'}</option>
                    <option value={"top_rated"}>Top Rated</option>
                    <option value={(type == 'movie') ? "upcoming" : "on_the_air"}>{(type == 'movie') ? 'Upcoming' : 'On Tv'}</option>
                </Select>
            </FormControl>
            {isLoading ? (
                <Loading />
            ) : (
                    <FlicksListView flixDataList={flixDataList} type={type} />
                )}

        </div>
    )
}

export default FlicksListPageContainer