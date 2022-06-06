const path = require('path')
exports.projects = (req, res) => {
    res.render('projects');
};
exports.getProject = (req, res) => {
    res.status(200).send('under construction')
};
