const express = require('express')

const router = express.Router()
const asyncHandler = require('express-async-handler')
const ProjectScoreController = require('./controller')

const { hasToken } = require('../../common/middleware/token')
const { hasAdminToken } = require('../../common/middleware/admin')
const { canSubmitProject } = require('../../common/middleware/events')

const addProjectScore = asyncHandler(async (req, res) => {
    try {
        const score = await ProjectScoreController.addProjectScore(req.body)
        return res.status(200).json(score)
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message:
                'Add project score encountered an unknown error. Please check your request and try again.',
            error: e.message,
        })
    }
})

const updateProjectScore = asyncHandler(async (req, res) => {
    try {
        const score = await ProjectScoreController.updateProjectScore(
            req.params.id,
            req.body
        )
        return res.status(200).json(score)
    } catch (e) {
        return res.status(500).json({
            message:
                'Update project score encountered an unknown error. Please check your request and try again.',
            error: e.message,
        })
    }
})

const getScoresByEventAndTeam = asyncHandler(async (req, res) => {
    const scores = await ProjectScoreController.getScoresByEventAndTeamId(
        req.event._id,
        req.team._id
    )
    return res.status(200).json(scores)
})

const getPublicScores = asyncHandler(async (req, res) => {
    const scores = await ProjectScoreController.getPublicScores(
        req.params.eventId
    )
    return res.status(200).json(scores)
})

router.post('/', hasAdminToken, addProjectScore)
router.put('/:id', hasAdminToken, updateProjectScore)
router.get(
    '/personal/:eventId',
    hasToken,
    canSubmitProject,
    getScoresByEventAndTeam
)
router.get('/event/:eventId', getPublicScores)

module.exports = router
