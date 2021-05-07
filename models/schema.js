const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        gender: {
            type: String
        },
        password: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        },
        author_id: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const User = model('users', userSchema);
const Story = model('stories', storySchema);
module.exports = { User, Story };