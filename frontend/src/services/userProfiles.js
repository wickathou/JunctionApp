import _axios from 'services/axios'

const UserProfilesService = {}

function config(idToken) {
    return {
        headers: {
            Authorization: `Bearer ${idToken}`,
        },
    }
}

UserProfilesService.getPublicUserProfiles = userIds => {
    return _axios.get('/user-profiles/public/profiles/', {
        params: {
            userIds,
        },
    })
}

UserProfilesService.getPublicUserProfilesByTeam = teamId => {
    return _axios.get('/user-profiles/public/team/' + teamId)
}

UserProfilesService.getUserProfile = idToken => {
    return _axios.get('/user-profiles/', config(idToken))
}

UserProfilesService.createUserProfile = (data, idToken) => {
    return _axios.post('/user-profiles/', data, config(idToken))
}

UserProfilesService.editUserProfile = (idToken, data) => {
    return _axios.patch('/user-profiles/', data, config(idToken))
}

UserProfilesService.getUserPublicProfileById = (idToken, userId) => {
    return _axios.get('/user-profiles/' + userId, config(idToken))
}

UserProfilesService.queryUsers = (idToken, terms) => {
    return _axios.get(`/user-profiles/search/${terms}`, config(idToken))
}

UserProfilesService.getUserProfileRecruitment = (userId, idToken) => {
    return _axios.get(`/recruitment/profile/${userId}`, config(idToken))
}

UserProfilesService.getRecruiters = idToken => {
    return _axios.get('/user-profiles/recruiters/get', config(idToken))
}

UserProfilesService.getUserProfilesByTeamId = (teamId, idToken) => {
    return _axios.get(`/user-profiles/team/${teamId}`, config(idToken))
}

UserProfilesService.updateRecruiter = (
    idToken,
    recruiterId,
    event,
    organisation,
) => {
    const data = { recruiterId, event, organisation }
    return _axios.patch('/user-profiles/recruiters/update', data, config(idToken))
}

UserProfilesService.deleteRecruiter = (idToken, recruiterId, event) => {
    const data = { recruiterId, event }
    return _axios.patch(
        '/user-profiles/recruiters/delete',
        data,
        config(idToken),
    )
}

UserProfilesService.updateRecruiterAdmin = (
    idToken,
    recruiterId,
    events,
    organisation,
) => {
    const data = { recruiterId, events, organisation }
    return _axios.patch(
        '/user-profiles/recruiters/admin',
        data,
        config(idToken),
    )
}

UserProfilesService.deleteRecruitersAdmin = (idToken, recruiterId) => {
    const data = { recruiterId }
    return _axios.patch(
        '/user-profiles/recruiters/admin/delete',
        data,
        config(idToken),
    )
}

export default UserProfilesService
