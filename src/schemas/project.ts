import mongoose from 'mongoose'
import { v4 as uuid4 } from 'uuid'

const projectSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid4()
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

export const Project = mongoose.model('projects', projectSchema)