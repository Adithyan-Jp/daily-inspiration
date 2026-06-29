/**
 * Daily Inspiration Hub - Quote Database
 * 
 * A curated collection of motivational, inspirational, and wisdom quotes
 * organized by category for easy filtering and discovery.
 * 
 * @author Aether Code
 * @version 1.0.0
 */

interface Quote {
    text: string;
    author: string;
    category: string;
}

const quotes: Quote[] = [
    // ===== MOTIVATION =====
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivation"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "motivation"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: "motivation"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "motivation"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "motivation"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "motivation"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        category: "motivation"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "Dream bigger. Do bigger.",
        author: "Unknown",
        category: "motivation"
    },
    {
        text: "Don't stop when you're tired. Stop when you're done.",
        author: "Unknown",
        category: "motivation"
    },

    // ===== SUCCESS =====
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett",
        category: "success"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
        category: "success"
    },
    {
        text: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr.",
        category: "success"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
        category: "success"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
        category: "success"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
        category: "success"
    },
    {
        text: "Fall seven times, stand up eight.",
        author: "Japanese Proverb",
        category: "success"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        category: "success"
    },
    {
        text: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
        category: "success"
    },
    {
        text: "Success is liking yourself, liking what you do, and liking how you do it.",
        author: "Maya Angelou",
        category: "success"
    },
    {
        text: "The secret to success is to know something nobody else knows.",
        author: "Aristotle Onassis",
        category: "success"
    },
    {
        text: "Success is not in what you have, but who you are.",
        author: "Bo Bennett",
        category: "success"
    },

    // ===== LIFE =====
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "life"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        category: "life"
    },
    {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
        category: "life"
    },
    {
        text: "May you live all the days of your life.",
        author: "Jonathan Swift",
        category: "life"
    },
    {
        text: "Life itself is the most wonderful fairy tale.",
        author: "Hans Christian Andersen",
        category: "life"
    },
    {
        text: "Do not let making a living prevent you from making a life.",
        author: "John Wooden",
        category: "life"
    },
    {
        text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author: "Marilyn Monroe",
        category: "life"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
        category: "life"
    },
    {
        text: "Life is a succession of lessons which must be lived to be understood.",
        author: "Ralph Waldo Emerson",
        category: "life"
    },
    {
        text: "The good life is one inspired by love and guided by knowledge.",
        author: "Bertrand Russell",
        category: "life"
    },
    {
        text: "Life is made of ever so many partings welded together.",
        author: "Charles Dickens",
        category: "life"
    },
    {
        text: "Life is a dream for the wise, a fool for the fool, a comedy for the rich, a tragedy for the poor.",
        author: "Sholom Aleichem",
        category: "life"
    },

    // ===== WISDOM =====
    {
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        category: "wisdom"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "wisdom"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        category: "wisdom"
    },
    {
        text: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
        category: "wisdom"
    },
    {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
        category: "wisdom"
    },
    {
        text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare",
        category: "wisdom"
    },
    {
        text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        author: "Rumi",
        category: "wisdom"
    },
    {
        text: "The wise man does at once what the fool does finally.",
        author: "Baltasar Gracian",
        category: "wisdom"
    },
    {
        text: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
        author: "Confucius",
        category: "wisdom"
    },
    {
        text: "The simple things are also the most extraordinary things, and only the wise can see them.",
        author: "Paulo Coelho",
        category: "wisdom"
    },
    {
        text: "Wise men speak because they have something to say; fools because they have to say something.",
        author: "Plato",
        category: "wisdom"
    },
    {
        text: "The beginning of wisdom is the definition of terms.",
        author: "Socrates",
        category: "wisdom"
    },

    // ===== CREATIVITY =====
    {
        text: "Creativity is intelligence having fun.",
        author: "Albert Einstein",
        category: "creativity"
    },
    {
        text: "Every artist was first an amateur.",
        author: "Ralph Waldo Emerson",
        category: "creativity"
    },
    {
        text: "Creativity takes courage.",
        author: "Henri Matisse",
        category: "creativity"
    },
    {
        text: "To live a creative life, we must lose our fear of being wrong.",
        author: "Joseph Chilton Pearce",
        category: "creativity"
    },
    {
        text: "Imagination is the beginning of creation.",
        author: "George Bernard Shaw",
        category: "creativity"
    },
    {
        text: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
        author: "Scott Adams",
        category: "creativity"
    },
    {
        text: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou",
        category: "creativity"
    },
    {
        text: "Creativity is contagious, pass it on.",
        author: "Albert Einstein",
        category: "creativity"
    },
    {
        text: "The desire to create is one of the deepest yearnings of the human soul.",
        author: "Dieter F. Uchtdorf",
        category: "creativity"
    },
    {
        text: "Creativity is just connecting things.",
        author: "Steve Jobs",
        category: "creativity"
    },
    {
        text: "Art is not what you see, but what you make others see.",
        author: "Edgar Degas",
        category: "creativity"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        category: "creativity"
    }
];
