import ReactGA from 'react-ga'
import config from 'constants/config'

const AnalyticsService = {}

AnalyticsService.init = () => {
    console.log('Analytics -> initialize')
    if (config.GOOGLE_ANALYTICS_ID) {
        ReactGA.initialize(config.GOOGLE_ANALYTICS_ID)
    }
}

AnalyticsService.pageView = location => {
    console.log('Analytics -> pageView')
    if (config.GOOGLE_ANALYTICS_ID) {
        ReactGA.pageview(location.pathname)
    }
}

AnalyticsService.events = {
    LOG_IN: () => {
        console.log('Analytics -> events -> LOG_IN')
    },
    VIEW_EVENT: slug => {
        console.log('Analytics -> events -> VIEW_EVENT')
    },
    BEGIN_REGISTRATION: slug => {
        console.log('Analytics -> events -> BEGIN_REGISTRATION')
    },
    COMPLETE_REGISTRATION: slug => {
        console.log('Analytics -> events -> COMPLETE_REGISTRATION')
    },
}

export default AnalyticsService
