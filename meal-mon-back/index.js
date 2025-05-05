const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your actual Gemini API key
const GEMINI_API_KEY = "AIzaSyD6OhDXhEyVBL__7KHB0lUv5N0-rWC07b4"; // <-- Make sure this is correct

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${GEMINI_API_KEY}`;
app.post("/getMealPlan", async (req, res) => {
    const { height, weight, gender, goal, dietType } = req.body;

    // Input validation
    if (!height || !weight || !gender || !goal || !dietType) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    console.log("✅ Received request:", req.body);

    // Corrected prompt structure
    const prompt = `Generate a personalized and detailed meal plan for a ${gender} whose height is ${height} cm and weight is ${weight} kg.
    Goal: ${goal}
    Diet Preference: ${dietType}
    Include meal timings, portion sizes, and nutritional breakdowns.Also include table of contents with meal names and timings.
    Make sure to include a variety of foods and ensure the plan is balanced and healthy.`;
    console.log("📝 Prompt for Gemini API:", prompt);

    try {
        const geminiResponse = await axios.post(GEMINI_URL, {
            contents: [{ parts: [{ text: prompt }] }]
        });

        console.log("✅ Gemini API response:", geminiResponse.data);

        // Corrected response extraction
        const responseText = geminiResponse.data.candidates?.[0]?.content?.parts?.[0]?.text || "No meal plan generated.";

        res.json({ mealPlan: responseText });

    } catch (error) {
        console.error("❌ Error from Gemini API:", error.response?.data || error.message);

        res.status(500).json({
            error: "Error generating meal plan from Gemini API!",
            details: error.response?.data || error.message
        });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));