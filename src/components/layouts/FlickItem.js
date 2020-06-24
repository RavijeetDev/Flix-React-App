import React from 'react'
import { IMAGE_BASE_URL } from '../../config/api_config'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { debug } from '../../utils/utility'
const tag = "FLICK_ITEM";


const FlickItem = props => {
    const { id, title, posterPath, releaseDate, popularity, description } = props
    return (
        <div id={id}>
            <Card className="flick-list-item">
                <CardMedia className="flick-item-image" image={`${IMAGE_BASE_URL}${posterPath}`} />
                <CardContent className="flick-item-content-card">
                    <CardHeader title={title} />
                    <Typography>
                        <strong>Release Date:</strong> {releaseDate} | <strong>Popularity:</strong> {popularity}
                    </Typography>
                    <Typography >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <Divider />
        </div>

    )
}

export default FlickItem