const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateGreeting() {
    /** Here the createCompletion method from the openapi library accepts the following object: 
     *  {
     *      model: string <-- The type of model that we are using, each model provides its own latency and costs.
     *      prompt: The input string we wish to supply the model with. The generated response is based on the prompt that is supplied.
     *      temperature: How deterministic we wish the response to be, this value ranges from 0 to 1, where 0 indicates that the model
     *                   should take fewer risks and be more deterministic
     *   }
     * 
     * 
     * */
    const generateText = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Generate a friendly greeting. Finish with an action that a dog would do between two asterisks.",
        temperature: 0.8,
    });
    return generateText;
}

exports.getGreeting = async function (req, res) {
    const greeting = await generateGreeting().then((response) => {
        const createCompletionResponse = response.data;
        const firstChoice = createCompletionResponse.choices[0].text;
        return firstChoice;
    });
    return greeting;
}