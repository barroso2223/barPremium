module.exports = {
  content: [
    "./index.html",         // Matches your root HTML file
    "./main.js",            // Matches your root JavaScript file
    "./style.css",          // Matches your root CSS file
    "./node_modules/**/*",  // Optional: Matches any Tailwind-related files in node_modules (if needed)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};