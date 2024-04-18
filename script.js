function showDialog(dialogId) {
    var dialog = document.getElementById(dialogId + 'Dialog');
    dialog.classList.remove('hidden');
}

function hideDialog(dialogId) {
    var dialog = document.getElementById(dialogId + 'Dialog');
    dialog.classList.add('hidden');
}

const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
    "Everything you can imagine is real. - Pablo Picasso",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The only source of knowledge is experience. - Albert Einstein",
    "The future depends on what you do today. - Mahatma Gandhi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "It is never too late to be what you might have been. - George Eliot",
    "A journey of a thousand miles begins with a single step. - Lao Tzu",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "It's not what you look at that matters, it's what you see. - Henry David Thoreau",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Whatever you are, be a good one. - Abraham Lincoln",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
    "Everything you can imagine is real. - Pablo Picasso",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The only source of knowledge is experience. - Albert Einstein",
    "The future depends on what you do today. - Mahatma Gandhi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "It is never too late to be what you might have been. - George Eliot",
    "A journey of a thousand miles begins with a single step. - Lao Tzu"
];

function showRandomQuote() {
    const quoteElement = document.getElementById('quoteOfTheDay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
    showDialog('quotes');
}

  