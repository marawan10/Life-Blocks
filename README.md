# Life Blocks | مربعات الحياة

A modern, minimalist web application that visualizes your life as a grid of weeks, inspired by the concept that awareness of mortality can be the ultimate motivator for living fully. Each square represents one week of your life - make them count.

## 🚀 Live Demo
Visit the live application: [Life Blocks](https://life-blocks.vercel.app)

## ✨ New Features & Updates

### 🎨 Enhanced User Experience
- **Mobile-First Design**: Fully responsive with optimized touch interactions
- **Professional Favicon**: Custom Life Blocks icon with multiple formats (SVG, PNG, ICO)
- **PWA Ready**: Can be installed as a standalone app with web manifest
- **Visitor Counter**: Privacy-friendly analytics showing daily and total visitors

### 📱 Mobile Optimizations
- **Touch-Friendly Interface**: Optimized for mobile devices with proper touch targets
- **Responsive Grid**: Adaptive life calendar that works perfectly on all screen sizes
- **Mobile Tooltips**: Smart tooltip positioning with auto-hide functionality
- **Improved Typography**: Better font scaling and readability across devices

## Features

### 🎯 Core Functionality
- **Interactive Life Grid**: 75 rows × 52 columns representing years and weeks
- **Real-time Statistics**: Live updates of weeks lived, remaining, and life percentage
- **Current Week Indicator**: Animated red square showing your current week

### Style Variations
- **Minimal**: Clean black and white design with sharp lines
- **Poster**: Bold, high-contrast design perfect for printing
- **Digital**: Modern gradient style with smooth animations

- **25+ Powerful Quotes**: Extensive collection from Quran, Hadith, and wisdom literature
- **Islamic Wisdom**: Authentic Quranic verses and Hadith about time, life, and mortality
- **Multilingual Support**: Arabic quotes with English translations and proper typography
- **Daily Inspiration**: Random quote system with fresh motivation every visit

### Islamic Wisdom Collection
- **Quranic Verses**: Authentic verses about time, life's brevity, and worldly perspective
- **Prophetic Hadith**: Sayings of Prophet Muhammad (PBUH) about time management and mortality
- **Key Themes**: 
  - Surah Al-Asr (Time chapter) - The essence of human loss and salvation
  - "Take advantage of five before five" - Classic hadith about seizing opportunities
  - Remembrance of death - The destroyer of pleasures
  - This world as a temporary journey - Traveler's perspective
- **Authentic Sources**: All quotes verified from Bukhari, Muslim, Tirmidhi, and other reliable collections

### Enhanced Analytics & Export
- **Comprehensive Export**: High-resolution PNG export with complete life data
- **Detailed Statistics**: Birth date, current age, life expectancy, and progress metrics
- **Professional Layout**: Clean export format perfect for sharing or printing
- **Privacy-First Analytics**: Built-in visitor counter without cookies or tracking

## How to Use

1. **Open the Application**: Simply open `index.html` in your web browser
2. **Enter Your Birth Date**: Use the date picker to input when you were born
4. **Explore Styles**: Try different visual themes using the style buttons
5. **Interact**: Hover over squares to see detailed information
6. **Export**: Use the export button to save your calendar as an image

## Technical Details

### Files Structure
```
death/
├── index.html              # Main HTML structure
├── styles.css              # CSS styling and responsive themes
├── script.js               # JavaScript functionality and quotes
├── favicon.svg             # SVG favicon for modern browsers
├── manifest.json           # PWA manifest for app installation
├── vercel.json             # Vercel deployment configuration
├── api/
│   └── visitors.js         # Serverless visitor counter API
├── generate-favicon.html   # Favicon generation tool
├── create-favicon.js       # Favicon creation script
└── README.md               # This documentation
```

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Grid, Flexbox, animations, and responsive design
- **Vanilla JavaScript**: No dependencies, pure ES6+ code with async/await
- **Google Fonts**: Inter font family + Arabic fonts (Amiri, Scheherazade)
- **LocalStorage**: Data persistence and visitor tracking
- **Canvas API**: High-resolution image export functionality
- **Vercel Serverless**: Privacy-friendly visitor analytics
- **PWA Standards**: Web manifest and service worker ready

### Browser Compatibility
- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Philosophy

This application is built around the philosophical concept that awareness of our finite time can be profoundly motivating. Each black square represents a week you've already lived - time that's gone forever. Each white square represents opportunity, potential, and the precious time you still have.

The visual impact of seeing your life laid out in this format can be transformative:
- **Urgency**: Realizing how finite our time really is
- **Clarity**: Understanding what truly matters
- **Motivation**: Inspiring action rather than procrastination
- **Perspective**: Putting daily problems in context

## Customization

The application is designed to be easily customizable:

### Adding New Themes
Add new style classes in `styles.css` and corresponding buttons in the HTML.

### Modifying Life Expectancy Options
Update the select options in `index.html` and the corresponding JavaScript handling.

### Changing Motivational Messages
Edit the `messages` object in the `updateMotivationalMessage` method in `script.js`.

## Inspiration

This project draws inspiration from:
- **Islamic Teachings**: Quranic verses and Hadith about time consciousness and mortality
- **Tim Urban's "Your Life in Weeks"**: Visual representation of life's finite nature
- **Stoic Philosophy**: Memento mori and awareness of mortality as motivation
- **Islamic Time Management**: "Take advantage of five before five" hadith
- **Minimalist Design**: Clean, distraction-free interface focusing on what matters
- **Cross-Cultural Wisdom**: Universal themes of time, purpose, and mortality


## 📊 Analytics
- **Visitor Counter**: Built-in privacy-friendly visitor tracking
- **Daily/Total Visitors**: Displayed in the footer
- **No Cookies**: Uses localStorage for visitor identification

## License

This project is open source and available under the MIT License.

---

*"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time." - Mark Twain*
By: Marwan Mokhtar
