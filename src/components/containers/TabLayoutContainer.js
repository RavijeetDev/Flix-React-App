import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer'
import FlicksListPageContainer from './FlicksListPageContainer'
import SearchPageContainer from './SearchPageContainer'

import { debug } from '../../utils/utility'
const tag = "TAB_LAYOUT_CONTAINER";


const TabLayoutContainer = props => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 0) {
            props.onTypeChange('movie')
        } else if(newValue === 1) {
            props.onTypeChange('search')
        } else {
            props.onTypeChange('tv')
        }
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const { isLoading, searchPageInitMsg, flixDataList, type } = props;

    if(type === 'search') {
        if(value !== 1) {
            setValue(1)
        }
    }
    
    return (
        <div>
            {/* Tabbed Layout - Courtesy of Google Material Sample */}
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example">
                    <Tab label="Movies" id="full-width-tab-0" aria-controls="full-width-tabpanel-0" />
                    <Tab label="Search" id="full-width-tab-1" aria-controls="full-width-tabpanel-1" />
                    <Tab label="TV Series" id="full-width-tab-2" aria-controls="full-width-tabpanel-2" />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>

                <TabContainer value={value} index={0} dir={theme.direction}>
                    <FlicksListPageContainer
                        isLoading={isLoading}
                        onFlickListCategoryChange={value => props.onFlickListCategoryChange(value)}
                        flixDataList={flixDataList}
                        type='movie' />
                </TabContainer>

                <TabContainer value={value} index={1} dir={theme.direction}>
                    <SearchPageContainer
                        isLoading={isLoading}
                        initMessage={searchPageInitMsg}
                        flixDataList={flixDataList} />
                </TabContainer>

                <TabContainer value={value} index={2} dir={theme.direction}>
                    <FlicksListPageContainer
                        isLoading={isLoading}
                        onFlickListCategoryChange={value => props.onFlickListCategoryChange(value)}
                        flixDataList={flixDataList}
                        type='tv' />
                </TabContainer>

            </SwipeableViews>
        </div>
    );

}

export default TabLayoutContainer