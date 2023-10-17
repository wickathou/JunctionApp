import { Typography } from '@material-ui/core'
import React from 'react'
import SocialIcons from './SocialIcons'

export default ({
    social,
    email = '',
    displayHeader = false,
    headerText = 'Connect with us',
}) => {
    return (
        <div className={`tw-flex tw-flex-col tw-gap-4`}>
            {displayHeader && (
                <Typography
                    className="tw-tracking-tight tw-font-medium"
                    variant="h5"
                    component="h5"
                >
                    {headerText}
                </Typography>
            )}

            <SocialIcons social={social} email={email} />
        </div>
    )
}
