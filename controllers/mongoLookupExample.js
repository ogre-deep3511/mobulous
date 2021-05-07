const { Story } = require('../models/schema');

const lookupExample = (req, res, next) => {
    Story.aggregate([
        {
            $project: {__v: 0}
        },
        {
                $lookup:
                        {
                                from: "users",
                                let: {author_id: "$author_id", title: "$title", content: "$content"},
                                pipeline:
                                        [
                                            {
                                                $project: 
                                                        {
                                                                "_id": {"$toString": "$_id"},
                                                                "name": 1,
                                                                "email": 1,
                                                                "phone": 1,
                                                                "age": 1,
                                                                "gender": 1,
                                                                "password": 1,
                                                                "createdAt": 1,
                                                                "updatedAt": 1
                                                        }
                                            },
                                            {
                                                    $match: {$expr: {$eq: ["$_id", "$$author_id"]}}
                                            }
                                        ],
                            as: "user_details"
                        }
        },
        {
                $unwind: "$user_details"
        }
    ], (err, data) => {
        if(err) {
            res.json({
                error: err
            });
        }else {
            res.json({
                data: data
            });
        }
    });
}

module.exports = { lookupExample }