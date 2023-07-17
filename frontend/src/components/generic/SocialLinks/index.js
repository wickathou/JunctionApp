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

    const socials = [
        social.github && { icon: faGithub, link: social.github },
        social.linkedin && { icon: faLinkedin, link: social.linkedin },
        social.slack && { icon: faDiscord, link: social.slack },
        social.discord && { icon: faSlack, link: social.discord },
        social.portfolio && {
            icon: faBriefcase,
            link: social.portfolio,
        },
        profile.email && {
            icon: faEnvelope,
            link: `https://mail.google.com/mail/?view=cm&to=${profile.email}`,
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
            <ul className="tw-flex tw-items-center tw-list-none tw-pl-0">
                {socials.map(
                    social =>
                        social && (
                            <li key={social.icon}>
                                <FontAwesomeIcon
                                    icon={social.icon}
                                    onClick={() =>
                                        window.open(social.link, '_blank')
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
