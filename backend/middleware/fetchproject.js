
const fetchproject = (req, res, next) => {
    //get the tasks from the jwt token and add id to req object
    const token = req.header('project-id');

    if(!token){
        return res.status(401).send({error: "Please authenticate using a valid token"});
    }
    try {
        req.project = token;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"});
    } 
}

module.exports = fetchproject;