const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const corsOptions = {
    origin: "https://meal-monarch.vercel.app", // Replace with your actual Vercel frontend URL
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  };
  app.use(cors(corsOptions));

// Replace with your actual Gemini API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Securely use environment variables
// const GEMINI_API_KEY = "AIzaSyBYcmJqhACeskQjzwypYiGQEQzHnoduijQ"; // Securely use environment variables

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
    Include meal timings, portion sizes, and nutritional breakdowns. Also include a table of contents with meal names and timings.
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
    
        const statusCode = error.response?.status || 500; // Handle actual error status
        const message = error.response?.data?.error?.message || "Unexpected server error";
    
        res.status(statusCode).json({
            error: "Error generating meal plan from Gemini API!",
            details: message
        });
    }
});

// ✅ Fix: Dynamically bind Render's assigned PORT
const PORT = process.env.PORT || 5000; // Use Render's port or fallback to 5000
app.listen(PORT, () => console.log(`🚀 Server running on PORT: ${PORT}`));