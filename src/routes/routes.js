const gpt_dog_controller = require('../controllers/gpt-dog.controller');
module.exports = function (app) {

    app.get('/getGreeting', async function (req, res) {
        const response = await gpt_dog_controller.getGreeting(req, res);
        res.end(response);
    })
}