/**
 * Daily Inspiration Hub - Main Application Logic
 * 
 * Handles quote display, category filtering, favorites management,
 * clipboard copying, and UI interactions.
 * 
 * @author Aether Code
 * @version 1.0.0
 */

"use strict";

// ============================================
// DOM Element References
// ============================================

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteCard = document.getElementById("quoteCard");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesList = document.getElementById("favoritesList");
const favoritesSection = document.getElementById("favoritesSection");
const favCount = document.getElementById("favCount");
const quoteCount = document.getElementById("quoteCount");
const toast = document.getElementById("toast");
const categoryButtons = document.querySelectorAll(".category-btn");

// ============================================
// Application State
// ============================================

/** Currently active category filter */
let currentCategory = "all";

/** Currently displayed quote */
let currentQuote = null;

/** Array of favorited quotes loaded from localStorage */
let favorites = [];

// ============================================
// Initialization
// ============================================

/**
 * Initialize the application on page load.
 * Loads favorites, displays quote count, and shows first quote.
 */
function init() {
    loadFavorites();
    updateQuoteCount();
    displayRandomQuote();
    setupEventListeners();
}

// ============================================
// Quote Display Functions
// ============================================

/**
 * Get filtered quotes based on current category selection.
 * @returns {Array} Array of quotes matching the current filter
 */
function getFilteredQuotes() {
    if (currentCategory === "all") {
        return quotes;
    }
    return quotes.filter((quote) => quote.category === currentCategory);
}

/**
 * Select and display a random quote from the filtered list.
 * Ensures the same quote isn't shown twice in a row.
 */
function displayRandomQuote() {
    const filteredQuotes = getFilteredQuotes();

    if (filteredQuotes.length === 0) {
        quoteText.textContent = "No quotes found in this category.";
        quoteAuthor.textContent = "";
        return;
    }

    // Avoid showing the same quote consecutively
    let newQuote;
    do {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        newQuote = filteredQuotes[randomIndex];
    } while (
        currentQuote &&
        filteredQuotes.length > 1 &&
        newQuote.text === currentQuote.text
    );

    currentQuote = newQuote;

    // Animate quote change
    quoteText.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {
        quoteText.textContent = newQuote.text;
        quoteAuthor.textContent = newQuote.author;
        quoteText.style.opacity = "1";
        quoteAuthor.style.opacity = "1";
    }, 200);

    // Update favorite button state
    updateFavoriteButton();
}

/**
 * Update the displayed total quote count.
 */
function updateQuoteCount() {
    quoteCount.textContent = quotes.length.toString();
}

// ============================================
// Category Filtering
// ============================================

/**
 * Handle category button click to filter quotes.
 * @param {Event} event - Click event from category button
 */
function handleCategoryClick(event) {
    const button = event.target;
    const category = button.dataset.category;

    if (!category) return;

    // Update active state
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update filter and display new quote
    currentCategory = category;
    displayRandomQuote();
}

// ============================================
// Favorites Management
// ============================================

/**
 * Load favorites from localStorage.
 */
function loadFavorites() {
    try {
        const stored = localStorage.getItem("dailyInspiration_favorites");
        favorites = stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn("Failed to load favorites:", error);
        favorites = [];
    }
    renderFavorites();
}

/**
 * Save current favorites array to localStorage.
 */
function saveFavorites() {
    try {
        localStorage.setItem(
            "dailyInspiration_favorites",
            JSON.stringify(favorites)
        );
    } catch (error) {
        console.warn("Failed to save favorites:", error);
        showToast("Failed to save favorite");
    }
}

/**
 * Toggle the current quote's favorite status.
 */
function toggleFavorite() {
    if (!currentQuote) return;

    const existingIndex = favorites.findIndex(
        (fav) => fav.text === currentQuote.text
    );

    if (existingIndex > -1) {
        // Remove from favorites
        favorites.splice(existingIndex, 1);
        showToast("Removed from favorites");
    } else {
        // Add to favorites
        favorites.push({ ...currentQuote });
        showToast("Added to favorites! 💖");
    }

    saveFavorites();
    renderFavorites();
    updateFavoriteButton();
}

/**
 * Remove a quote from favorites by index.
 * @param {number} index - Index of the favorite to remove
 */
function removeFavorite(index) {
    favorites.splice(index, 1);
    saveFavorites();
    renderFavorites();
    updateFavoriteButton();
    showToast("Removed from favorites");
}

/**
 * Render the favorites list in the DOM.
 */
function renderFavorites() {
    // Update count
    favCount.textContent = `(${favorites.length})`;

    // Show/hide section based on favorites
    if (favorites.length === 0) {
        favoritesList.innerHTML =
            '<p class="empty-state">No favorites yet. Start collecting inspiration!</p>';
        return;
    }

    // Render favorite items
    favoritesList.innerHTML = favorites
        .map(
            (fav, index) => `
        <div class="favorite-item">
            <div>
                <p class="favorite-quote">"${fav.text}"</p>
                <span class="favorite-author">— ${fav.author}</span>
            </div>
            <button class="favorite-remove" data-index="${index}" title="Remove">✕</button>
        </div>
    `
        )
        .join("");

    // Add event listeners to remove buttons
    document.querySelectorAll(".favorite-remove").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = parseInt(e.target.dataset.index || "0");
            removeFavorite(index);
        });
    });
}

/**
 * Update the favorite button appearance based on current quote status.
 */
function updateFavoriteButton() {
    if (!currentQuote) return;

    const isFavorited = favorites.some(
        (fav) => fav.text === currentQuote.text
    );

    favoriteBtn.textContent = isFavorited ? "❤️" : "🤍";
    favoriteBtn.title = isFavorited ? "Remove from favorites" : "Add to favorites";
}

// ============================================
// Clipboard Functions
// ============================================

/**
 * Copy the current quote to the clipboard.
 */
async function copyQuote() {
    if (!currentQuote) return;

    const textToCopy = `"${currentQuote.text}" — ${currentQuote.author}`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        showToast("Quote copied! 📋");
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showToast("Quote copied! 📋");
    }
}

// ============================================
// Toast Notification
// ============================================

let toastTimeout = null;

/**
 * Display a toast notification message.
 * @param {string} message - Message to display
 */
function showToast(message) {
    // Clear existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    toast.textContent = message;
    toast.classList.add("show");

    toastTimeout = window.setTimeout(() => {
        toast.classList.remove("show");
        toastTimeout = null;
    }, 2500);
}

// ============================================
// Event Listeners Setup
// ============================================

/**
 * Set up all event listeners for the application.
 */
function setupEventListeners() {
    // New quote button
    newQuoteBtn.addEventListener("click", displayRandomQuote);

    // Copy button
    copyBtn.addEventListener("click", copyQuote);

    // Favorite button
    favoriteBtn.addEventListener("click", toggleFavorite);

    // Category buttons
    categoryButtons.forEach((btn) => {
        btn.addEventListener("click", handleCategoryClick);
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
        // Space or Enter for new quote
        if (e.code === "Space" && e.target === document.body) {
            e.preventDefault();
            displayRandomQuote();
        }
        // 'C' for copy
        if (e.key === "c" && e.target === document.body) {
            copyQuote();
        }
        // 'F' for favorite
        if (e.key === "f" && e.target === document.body) {
            toggleFavorite();
        }
    });
}

// ============================================
// Start Application
// ============================================

document.addEventListener("DOMContentLoaded", init);
