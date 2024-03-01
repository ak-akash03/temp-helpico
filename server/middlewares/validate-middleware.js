const validate = (Schema)  => async  (req, res, next) => {
    try {
        const parseBody = await Schema.parseAsync(req.body)
        req.body = parseBody;
        next();
    } catch (err) {
        const message = "fill the properly "
        const extraDetails = err.errors[0].message
        const status = 422;
        const error = {
            status,
            message,
            extraDetails
        }
        // res.status(400).json({msg : "validation failed : " } )
        next(error);
    }
}

module.exports = validate;
