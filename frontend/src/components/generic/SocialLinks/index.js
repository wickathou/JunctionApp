import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, Typography } from '@material-ui/core'
import { Email } from '@material-ui/icons'
import React from 'react'
import { popupCenter } from 'utils/misc'
import junctionStyle from 'utils/styles'

export default ({ viewMode = '', data }) => {
    const classes = junctionStyle()

    const styling = {
        displayHeader: true,
        alignment: '',
    }
    {
    }
    switch (viewMode) {
        case 'team':
            styling.displayHeader = true
            break
        case 'participant':
            styling.displayHeader = false
            styling.alignment = 'tw--ml-4'
            break
        default:
            break
    }

    const icons = [
        data.github && { name: ['fab', 'github'], link: data.github },
        data.linkedin && { name: ['fab', 'linkedin'], link: data.linkedin },
        data.slack && { name: ['fab', 'slack'], link: data.slack },
        data.discord && { name: ['fab', 'discord'], link: data.discord },
    ]

    return (
        <div className={`tw-flex tw-flex-col tw-gap-4 ${styling.alignment}`}>
            {styling.displayHeader && (
                <Typography
                    className="tw-tracking-tight tw-font-medium"
                    variant="h5"
                    component="h5"
                >
                    Connect with us
                </Typography>
            )}
            <div className="tw-flex tw-items-center">
                {icons.map(icon => (
                    <FontAwesomeIcon
                        icon={icon.name}
                        onClick={() => window.open(icon.link, '_blank')}
                        className={classes.socialIcon}
                        size="2x"
                    />
                ))}
                <IconButton
                    color="primary"
                    aria-label="Email"
                    className="tw-p-0"
                >
                    <Email className={classes.socialIcon} />
                </IconButton>
            </div>
        </div>
    )
}
