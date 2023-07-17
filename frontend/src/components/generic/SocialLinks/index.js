import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, Typography } from '@material-ui/core'
import { Email } from '@material-ui/icons'
import React from 'react'
import junctionStyle from 'utils/styles'

export default ({ viewMode = '', social, profile = {} }) => {
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
        social.github && { name: ['fab', 'github'], link: social.github },
        social.linkedin && { name: ['fab', 'linkedin'], link: social.linkedin },
        social.slack && { name: ['fab', 'slack'], link: social.slack },
        social.discord && { name: ['fab', 'discord'], link: social.discord },
        social.portfolio && {
            name: ['fab', 'briefcase'],
            link: social.portfolio,
        },
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
                {icons.map(
                    icon =>
                        icon && (
                            <FontAwesomeIcon
                                icon={icon.name}
                                onClick={() => window.open(icon.link, '_blank')}
                                className={classes.socialIcon}
                                size="2x"
                                key={icon.name}
                            />
                        ),
                )}
            </div>
        </div>
    )
}
