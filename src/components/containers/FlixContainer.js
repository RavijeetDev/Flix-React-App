import React, { Component } from 'react'
import { debug } from '../../utils/utility'
import { flixListFetchAPI, searchQueryAPI } from '../../services/api'
import Form from '../forms/Form'
import TabLayoutContainer from '../containers/TabLayoutContainer'

const debugTag = "FLIX_CONTAINER";

class FlixContainer extends Component {

    state = {
        isLoading: false,
        query: '',
        searchType: 'multi',
        initMessage: 'Please initialize the search',
        flixDataList: [],
        category: 'popular',
        type: 'movie'
    }

    componentDidMount() {
        this.fetchDataForFlicksList()
    }

    fetchDataForFlicksList = () => {

        const { category, type } = this.state

        this.setState({
            isLoading: true
        })

        flixListFetchAPI(type, category).then(
            flixDataList => {
                this.setState({
                    isLoading: false,
                    type,
                    flixDataList
                })
            },
            error => {
                alert('Error', `Something went wrong ${error}`)
            }
        )
    }

    handleFlickListCategoryChange = category => {
        this.setState({
            category
        }, this.fetchDataForFlicksList.bind(this))
    }

    handleTypeChange = type => {
        if (type === 'tv' || type === 'movie') {

            this.setState({
                type,
                category: 'popular',
                flixDataList: []
            }, this.fetchDataForFlicksList.bind(this))

        } else {

            this.setState({
                type,
                initMessage: 'Please initialize the search',
                flixDataList: []
            })
        }
    }


    fetchDataForSearchQuery = e => {
        e.preventDefault()

        const { query, searchType } = this.state

        this.setState({
            isLoading: true
        })

        searchQueryAPI(searchType, query).then(
            flixDataList => {
                if (flixDataList.length > 0) {
                    this.setState({
                        type: 'search',
                        flixDataList,
                        isLoading: false,
                        initMessage: ''
                    })
                } else {
                    this.setState({
                        type: 'search',
                        flixDataList,
                        isLoading: false,
                        initMessage: 'Sorry, there was no result'
                    })
                }
            },
            error => {
                alert('Error', `Something went wrong ${error}`)
            }
        )
    }

    handleSearchTypeChange = searchType => {
        this.setState({
            searchType
        })
    }

    handleQueryChnage = query => {
        this.setState({
            query
        })
    }

    render() {
        const { isLoading, flixDataList, initMessage, type } = this.state
        return (
            <div>
                <Form
                    onSearchTypeChange={this.handleSearchTypeChange}
                    onInputChange={this.handleQueryChnage}
                    onSubmit={this.fetchDataForSearchQuery} />
                <TabLayoutContainer
                    isLoading={isLoading}
                    flixDataList={flixDataList}
                    onFlickListCategoryChange={this.handleFlickListCategoryChange}
                    onTypeChange={this.handleTypeChange}
                    searchPageInitMsg={initMessage}
                    type={type} />
            </div>
        )
    }
}

export default FlixContainer