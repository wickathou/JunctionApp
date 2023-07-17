import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'
import React from 'react'
import junctionStyle from 'utils/styles'
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faDiscord,
    faSlack,
} from '@fortawesome/free-brands-svg-icons'

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
        social.github && { name: faGithub, link: social.github },
        social.linkedin && { name: faLinkedin, link: social.linkedin },
        social.slack && { name: faDiscord, link: social.slack },
        social.discord && { name: faSlack, link: social.discord },
        social.portfolio && {
            name: faBriefcase,
            link: social.portfolio,
        },
        profile.email && { name: faEnvelope, link: `mailto:${profile.email}` },
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
            <ul className="tw-flex tw-items-center tw-list-none tw-pl-0">
                {icons.map(
                    icon =>
                        icon && (
                            <li key={icon.name}>
                                <FontAwesomeIcon
                                    icon={icon.name}
                                    onClick={() =>
                                        window.open(icon.link, '_blank')
                                    }
                                    className={classes.socialIcon}
                                    size="2x"
                                />
                            </li>
                        ),
                )}
            </ul>
        </div>
    )
}
