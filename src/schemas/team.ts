import mongoose from 'mongoose'
import { v4 as uuid4 } from 'uuid'

const teamSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid4()
    },
    collaboratorId: {
        type: String, ref: 'collaborators', required: true
    },
    projectId: {
        type: String, ref: 'projects', required: true
    },
    name: {
        type: String,
    },
    description: {
        type: String
    },
    role: {
        type: String
    },
    mark_global: {
        type: Number
    }
})

export const Team = mongoose.model('teams', teamSchema)