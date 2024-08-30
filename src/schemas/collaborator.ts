import mongoose from 'mongoose'
import { v4 as uuid4 } from 'uuid'

const collaborator = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid4()
    },
    name: {
        type: String,
    },
    email: {
        type: String
    },
    role: {
        type: String
    }
})

export const Collaborator = mongoose.model('collaborators', collaborator)