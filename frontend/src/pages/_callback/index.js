import React, { useEffect, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useLocation, useNavigate } from 'react-router'

import * as AuthActions from 'reducers/auth/actions'
import * as AuthSelectors from 'reducers/auth/selectors'
import * as UserActions from 'reducers/user/actions'

import LoadingOverlay from 'components/loaders/LoadingOverlay'
import AnalyticsService from 'services/analytics'

export default () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const idToken = useSelector(AuthSelectors.getIdToken)

    const getOrCreateProfile = useCallback(async () => {
        if (idToken) {
            try {
                const userProfile = await dispatch(
                    UserActions.updateUserProfile(idToken),
                )
                if (!userProfile) {
                    // dispatch(push('/login/welcome'))
                    navigate('/login/welcome')
                } else {
                    // dispatch(AuthActions.pushNextRoute())
                    navigate('/home')
                }
            } catch (err) {
                console.error('Error getting user profile', err)
                if (err?.response?.status === 404) {
                    // dispatch(push('/login/welcome'))
                    navigate('/login/welcome')
                } else {
                    // dispatch(push('/error', { error: 'Login failed' }))
                    navigate('/error', { error: 'Login failed' })
                }
            }
        }
    }, [idToken, dispatch])

    const handleAuthentication = useCallback(async () => {
        if (/access_token|id_token|error/.test(location.hash)) {
            try {
                await dispatch(AuthActions.handleAuthentication())
                AnalyticsService.events.LOG_IN()
            } catch (err) {
                console.error('Login error', err)
                dispatch(push('/error', { error: err.message }))
            }
        }
    }, [dispatch, location])

    useEffect(() => {
        handleAuthentication()
    }, [handleAuthentication])

    useEffect(() => {
        getOrCreateProfile()
    }, [getOrCreateProfile])

    return <LoadingOverlay text="Signing in" />
}
