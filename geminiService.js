const { GoogleGenerativeAI } = require('@google/generative-ai');

const callGemini = async (prompt) => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error('Gemini API key is not configured in .env file');
    }

    try {
        // Initialize the client
        const genAI = new GoogleGenerativeAI(apiKey);
        
        // .env la irundhu edukkama direct-a model name kuduthachu (Space error thavirkka)
        const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

        // Generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
        
    } catch (error) {
        console.error("GoogleGenerativeAI Error:", error.message);
        throw error;
    }
};

module.exports = { callGemini };