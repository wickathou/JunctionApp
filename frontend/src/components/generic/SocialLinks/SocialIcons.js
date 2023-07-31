import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faDiscord,
    faSlack,
    faTelegram,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import junctionStyle from 'utils/styles'
import { popupCenter } from 'utils/misc'

const SocialIcons = ({ social, email = null }) => {
    const classes = junctionStyle()

    const socials = [
        social.github && { icon: faGithub, link: social.github },
        social.linkedin && { icon: faLinkedin, link: social.linkedin },
        social.slack && { icon: faSlack, link: social.slack },
        social.discord && { icon: faDiscord, link: social.discord },
        social.telegram && { icon: faTelegram, link: social.discord },
        social.skype && { icon: faSkype, link: social.discord },
        social.portfolio && {
            icon: faBriefcase,
            link: social.portfolio,
        },
        email && {
            icon: faEnvelope,
            link: `mailto:${email}`,
        },
    ]

    return (
        <ul className="tw-flex tw-gap-5 tw-items-center tw-list-none tw-pl-0">
            {socials.map(
                social =>
                    social && (
                        <li key={social.icon}>
                            <FontAwesomeIcon
                                icon={social.icon}
                                onClick={() => {
                                    if (social.link.startsWith('mailto:')) {
                                        popupCenter({
                                            url: social.link,
                                            title: 'email',
                                        })
                                    } else {
                                        let socialLink = social.link.startsWith('http') ? social.link : "http://" + social.link;
                                        window.open(socialLink, '_blank')
                                    }
                                }}
                                className={`tw-m-0 ${classes.socialIcon}`}
                                size="2x"
                            />
                        </li>
                    ),
            )}
        </ul>
    )
}

export default SocialIcons
