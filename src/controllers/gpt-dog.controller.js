const gpt_dog_service = require('../services/gpt-dog.service');

exports.getGreeting = async function (req, res) {
    const response = await gpt_dog_service.getGreeting();
    return response;
}