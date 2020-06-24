import React from 'react'
import FlickItem from '../layouts/FlickItem'

import { debug } from '../../utils/utility'
const tag = "FLICK_LIST_VIEW";


const FlickListView = props => {
    const { flixDataList } = props;
    return (
        <div className="flicks-list-view"> 
            {props.flixDataList.map((element) => {
                const {
                    id,
                    title,
                    name,
                    poster_path,
                    release_date,
                    first_air_date,
                    popularity,
                    overview
                } = element
                return (
                    <FlickItem 
                        id={id}
                        title={(title) ? title : name}
                        posterPath={poster_path}
                        releaseDate={(release_date) ? release_date : first_air_date}
                        popularity={popularity}
                        description={overview}/>
                )})}
        </div>
    )
}

export default FlickListView