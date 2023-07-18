import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faDiscord,
    faSlack,
} from '@fortawesome/free-brands-svg-icons'
import junctionStyle from 'utils/styles'

const SocialIcons = ({ social, profile = {} }) => {
    const classes = junctionStyle()

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
    )
}

export default SocialIcons
