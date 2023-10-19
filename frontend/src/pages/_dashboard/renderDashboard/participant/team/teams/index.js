import React, { useCallback, useEffect, useState } from 'react'

import * as DashboardSelectors from 'redux/dashboard/selectors'
import * as DashboardActions from 'redux/dashboard/actions'
import { useDispatch, useSelector } from 'react-redux'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import Button from 'components/generic/Button'
import TeamCard from 'components/cards/TeamCard'
import TeamProfile from 'components/Team/TeamProfile'
import Apply from 'components/Team/Apply'
import Filter from 'components/Team/Filter'
import JoinTeamByCode from 'components/Team/JoinTeamByCode'

export default () => {
    const dispatch = useDispatch()
    const event = useSelector(DashboardSelectors.event)
    const { slug } = event

    const teams = useSelector(DashboardSelectors.teams)
    const hasTeam = useSelector(DashboardSelectors.hasTeam)
    const [selected, setSelected] = useState(false)
    const [applying, setApplying] = useState(false)
    const [joinByCode, setJoinByCode] = useState(false)
    const [challengeFilter, setChallengeFilter] = useState('All challenges')

    const [selectedTeam, setSelectedTeam] = useState(null)
    const [loading, setLoading] = useState(false)

    const hadleTeamCardClick = useCallback(
        async teamCode => {
            if (teamCode) {
                setLoading(true)
                dispatch(DashboardActions.updateSelectedTeam(slug, teamCode))
                    .then(team => {
                        setSelectedTeam(team)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        },
        [selectedTeam],
    )

    useEffect(() => {
        dispatch(DashboardActions.updateTeams(slug))
    }, [applying, selected, selectedTeam, joinByCode, challengeFilter])

    let teamCards = []
    if (challengeFilter !== 'All challenges') {
        teamCards = teams.filter(team => team.challenge === challengeFilter)
    } else {
        teamCards = teams
    }
    //TODO add a method to edit or withdraw an application
    return (
        <>
            {applying &&
                selectedTeam &&
                Object.keys(selectedTeam).length > 0 && (
                    <div>
                        <div className="tw-mb-4">
                            <Button
                                color="outlined_button"
                                variant="jOutlined"
                                onClick={() => {
                                    setApplying(false)
                                    setSelectedTeam(null)
                                }}
                            >
                                Back
                            </Button>
                        </div>
                        <Apply
                            teamRolesData={selectedTeam.teamRoles}
                            afterSubmitAction={() => {
                                setApplying(false)
                                setSelectedTeam(null)
                            }}
                            loading={loading}
                        />
                    </div>
                )}
            {selected &&
                selectedTeam &&
                Object.keys(selectedTeam).length > 0 && (
                    <div>
                        <div className="tw-mb-4">
                            <Button
                                color="outlined_button"
                                variant="jOutlined"
                                onClick={() => {
                                    setSelected(false)
                                    setSelectedTeam(null)
                                }}
                            >
                                Back
                            </Button>
                        </div>
                        <TeamProfile
                            teamData={selectedTeam}
                            loading={loading}
                            enableActions={false}
                            onRoleClick={() => {
                                if (!hasTeam) {
                                    setApplying(true)
                                    setSelected(false)
                                }
                            }}
                        />
                    </div>
                )}
            {!selected && !applying && (
                <>
                    <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                        {!hasTeam ? (
                            <Button
                                color="outlined_button"
                                variant="jOutlined"
                                onClick={() => setJoinByCode(!joinByCode)}
                            >
                                Join team using a code
                            </Button>
                        ) : (
                            <span></span>
                        )}
                        <Filter
                            noFilterOption="All challenges"
                            filterArray={event.challenges.map(challenge => ({
                                label: challenge.name,
                                value: challenge._id,
                            }))}
                            onChange={setChallengeFilter}
                        />
                    </div>
                    {joinByCode && (
                        <div className="tw-bg-white tw-p-4 tw-text-left tw-rounded-lg tw-shadow-md tw-flex tw-justify-center tw-items-center tw-gap-4">
                            <JoinTeamByCode
                                onAction={() => setJoinByCode(false)}
                            />
                            <div>
                                <Button
                                    color="outlined_button"
                                    variant="jOutlined"
                                    onClick={() => setJoinByCode(false)}
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    )}
                    {teamCards.length > 0 ? (
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{
                                600: 1,
                                800: 2,
                                1440: 3,
                            }}
                        >
                            <Masonry>
                                {teamCards?.map(team => (
                                    <TeamCard
                                        key={team._id}
                                        teamData={team}
                                        disableActions={hasTeam}
                                        onClickApply={() => {
                                            hadleTeamCardClick(team.code)
                                            setApplying(true)
                                        }}
                                        onClick={() => {
                                            hadleTeamCardClick(team.code)
                                            setSelected(true)
                                        }}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    ) : (
                        <div>No teams found</div>
                    )}
                </>
            )}
        </>
    )
}
