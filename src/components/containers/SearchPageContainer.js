import React from 'react'
import Loading from '../layouts/Loading'
import FlickListView from '../layouts/FlickListView'

import { debug } from '../../utils/utility'
const tag = "SEARCH_PAGE_CONTAINER";


const SearchPageContainer = props => {
    const { isLoading, initMessage, flixDataList } = props
    debug(tag, flixDataList);
    return (
        <div className="flix-data-list-container">
            <h3 className="search-message">{initMessage}</h3>
            {isLoading ? (
                <Loading />
            ) : (
                    <FlickListView flixDataList={flixDataList} />
                )}
        </div>
    )
}

export default SearchPageContainer;