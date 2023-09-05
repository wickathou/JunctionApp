import { Dialog, Typography } from '@material-ui/core'
import Button from 'components/generic/Button'
import Container from 'components/generic/Container'
import PageWrapper from 'components/layouts/PageWrapper'
import React, { useEffect, useState } from 'react'
import Profile from 'components/Participant/Profile'
import { set } from 'react-ga'
import { useDispatch } from 'react-redux'
import * as DashboardActions from 'redux/dashboard/actions'

export default ({ viewMode = 'card', userData = {} }) => {
    const [userProfile, setUserProfile] = useState(null)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        if (visible) {
            setLoading(true)
            dispatch(
                DashboardActions.getCandidateProfileById(
                    userData.profile.userId,
                ),
            )
                .then(data => {
                    setUserProfile(data)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [userData, visible])

    const styling = {
        borderStyle: '',
        imageSize: '',
        alignment: 'tw-items-center',
    }

    if (userData.profile.avatar !== '') {
        styling.userProfile = {
            backgroundImage: `url(${userData.profile.avatar})`,
        }
    }

    // console.log('User data on participant preview', userData)

    switch (viewMode) {
        case 'list':
            styling.borderStyle =
                'tw-border tw-border-solid tw-border-gray-300 tw-p-4'
            styling.imageSize = 'tw-w-16 tw-h-16'
            break
        case 'profile':
            styling.borderStyle = ''
            styling.imageSize = 'tw-w-48 tw-h-48'
            styling.alignment = 'tw-items-start tw-flex-col tw--mt-24'
            break
        case 'card':
            styling.borderStyle = ''
            styling.imageSize = 'tw-w-24 tw-h-24'
            break
        default:
            break
    }

    return (
        <>
            <div
                className={`tw-flex tw-justify-between tw-rounded-lg ${styling.borderStyle} ${styling.alignment}`}
            >
                <div className="tw-flex tw-gap-4">
                    <div
                        className={`tw-bg-gradient-to-r tw-from-teal-400 tw-to-blue-500 tw-rounded-full ${styling.imageSize} tw-bg-cover`}
                        style={styling?.userProfile}
                    ></div>
                    <div className="tw-flex tw-flex-col tw-items-start tw-gap-2">
                        <Typography
                            className="tw-tracking-tight tw-font-medium"
                            variant="h5"
                            component="h5"
                        >
                            {userData.profile.firstName}{' '}
                            {userData.profile.lastName}
                        </Typography>
                        <Typography
                            className="tw-tracking-tight tw-font-normal"
                            variant="h6"
                            component="h6"
                        >
                            {userData.profile.headline}
                        </Typography>
                    </div>
                </div>
                {!visible && viewMode !== 'profile' && (
                    <Button
                        color="outlined_button"
                        variant="jOutlined"
                        onClick={() => setVisible(true)}
                    >
                        See more
                    </Button>
                )}
            </div>
            <Dialog
                transitionDuration={0}
                fullScreen
                open={visible}
                onClose={() => setVisible(false)}
            >
                <PageWrapper loading={loading}>
                    <Container center>
                        <Button onClick={() => setVisible(false)}>Close</Button>
                        <Profile user={userProfile} />
                    </Container>
                </PageWrapper>
            </Dialog>
        </>
    )
}
