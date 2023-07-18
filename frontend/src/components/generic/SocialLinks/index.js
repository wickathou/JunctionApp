import { Typography } from '@material-ui/core'
import React from 'react'

export default ({
    social,
    profile = {},
    displayHeader = false,
    header = 'Connect with us',
}) => {
    return (
        <div className={`tw-flex tw-flex-col tw-gap-4`}>
            {displayHeader && (
                <Typography
                    className="tw-tracking-tight tw-font-medium"
                    variant="h5"
                    component="h5"
                >
                    {header}
                </Typography>
            )}
        </div>
    )
}
