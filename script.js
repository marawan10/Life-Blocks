class LifeCalendar {
    constructor() {
        this.birthDate = null;
        this.lifeExpectancy = 75;
        this.currentStyle = 'minimal';
        this.quotes = this.initializeQuotes();
        
        this.initializeElements();
        this.bindEvents();
        this.generateCalendar();
        this.loadFromStorage();
        this.trackVisitor();
        this.showWelcomePopup();
    }
    
    initializeQuotes() {
        return [
            {
                text: "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ",
                translation: "And this worldly life is not but diversion and amusement. But the home of the Hereafter - that is the [eternal] life, if only they knew.",
                source: "Quran 29:64",
                language: "arabic"
            },
            {
                text: "اغْتَنِمْ خَمْسًا قَبْلَ خَمْسٍ: شَبَابَكَ قَبْلَ هَرَمِكَ، وَصِحَّتَكَ قَبْلَ سَقَمِكَ، وَغِنَاكَ قَبْلَ فَقْرِكَ، وَفَرَاغَكَ قَبْلَ شُغُلِكَ، وَحَيَاتَكَ قَبْلَ مَوْتِكَ",
                translation: "Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busyness, and your life before your death.",
                source: "Hadith - Prophet Muhammad (PBUH)",
                language: "arabic"
            },
            {
                text: "كُلُّ ابْنِ آدَمَ خَطَّاءٌ، وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
                translation: "Every son of Adam sins, but the best of sinners are those who repent.",
                source: "Hadith - Prophet Muhammad (PBUH)",
                language: "arabic"
            },
            {
                text: "وَالْعَصْرِ * إِنَّ الْإِنسَانَ لَفِي خُسْرٍ * إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
                translation: "By time, indeed mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
                source: "Quran 103:1-3",
                language: "arabic"
            },
            {
                text: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
                translation: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
                source: "Hadith - Prophet Muhammad (PBUH)",
                language: "arabic"
            },
            {
                text: "The time you enjoy wasting is not wasted time.",
                source: "Marthe Troly-Curtin",
                language: "english"
            },
            {
                text: "Don't wait. The time will never be just right.",
                source: "Napoleon Hill",
                language: "english"
            },
            {
                text: "Time is what we want most, but what we use worst.",
                source: "William Penn",
                language: "english"
            },
            {
                text: "The way we spend our time defines who we are.",
                source: "Jonathan Estrin",
                language: "english"
            },
            {
                text: "Time is more valuable than money. You can get more money, but you cannot get more time.",
                source: "Jim Rohn",
                language: "english"
            },
            {
                text: "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
                source: "Mother Teresa",
                language: "english"
            },
            {
                text: "The trouble is, you think you have time.",
                source: "Buddha",
                language: "english"
            },
            {
                text: "Time flies over us, but leaves its shadow behind.",
                source: "Nathaniel Hawthorne",
                language: "english"
            },
            {
                text: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
                translation: "Actions are but by intention and every man shall have only that which he intended.",
                source: "Hadith - Prophet Muhammad (PBUH)",
                language: "arabic"
            },
            {
                text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
                translation: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
                source: "Quran 65:2-3",
                language: "arabic"
            },
            {
                text: "Life is what happens to you while you're busy making other plans.",
                source: "John Lennon",
                language: "english"
            },
            {
                text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
                source: "Ralph Waldo Emerson",
                language: "english"
            },
            {
                text: "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ",
                translation: "There are two blessings which many people are deceived into losing: health and free time.",
                source: "Hadith - Bukhari",
                language: "arabic"
            },
            {
                text: "لَا تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ، وَعَنْ عِلْمِهِ فِيمَا فَعَلَ، وَعَنْ مَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَا أَنْفَقَهُ، وَعَنْ جِسْمِهِ فِيمَا أَبْلَاهُ",
                translation: "The feet of a servant will not move on the Day of Judgment until he is asked about his life - how he spent it, his knowledge - what he did with it, his wealth - where he acquired it and how he spent it, and his body - how he used it.",
                source: "Hadith - Tirmidhi",
                language: "arabic"
            },
            {
                text: "وَلَتَجِدَنَّهُمْ أَحْرَصَ النَّاسِ عَلَىٰ حَيَاةٍ وَمِنَ الَّذِينَ أَشْرَكُوا ۚ يَوَدُّ أَحَدُهُمْ لَوْ يُعَمَّرُ أَلْفَ سَنَةٍ وَمَا هُوَ بِمُزَحْزِحِهِ مِنَ الْعَذَابِ أَن يُعَمَّرَ",
                translation: "And you will surely find them the most greedy of people for life - [even] more than those who associate others with Allah. One of them wishes that he could be granted life a thousand years, but it would not remove him in the least from the [coming] punishment that he should be granted life.",
                source: "Quran 2:96",
                language: "arabic"
            },
            {
                text: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
                translation: "Be in this world as if you were a stranger or a traveler passing through.",
                source: "Hadith - Bukhari",
                language: "arabic"
            },
            {
                text: "أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ: الْمَوْتَ",
                translation: "Remember often the destroyer of pleasures: death.",
                source: "Hadith - Tirmidhi",
                language: "arabic"
            },
            {
                text: "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ",
                translation: "And worship your Lord until there comes to you the certainty (death).",
                source: "Quran 15:99",
                language: "arabic"
            },
            {
                text: "مَا مِنْ يَوْمٍ يَنْشَقُّ فَجْرُهُ إِلَّا نَادَى مُنَادٍ: يَا ابْنَ آدَمَ، أَنَا خَلْقٌ جَدِيدٌ، وَعَلَى عَمَلِكَ شَهِيدٌ، فَاغْتَنِمْنِي فَإِنِّي لَا أَعُودُ إِلَى يَوْمِ الْقِيَامَةِ",
                translation: "There is no day that dawns except that a caller calls out: 'O son of Adam, I am a new creation and a witness over your deeds, so take advantage of me, for I will not return until the Day of Judgment.'",
                source: "Hadith - Bayhaqi",
                language: "arabic"
            },
            {
                text: "إِنَّمَا مَثَلُ الْحَيَاةِ الدُّنْيَا كَمَاءٍ أَنزَلْنَاهُ مِنَ السَّمَاءِ فَاخْتَلَطَ بِهِ نَبَاتُ الْأَرْضِ مِمَّا يَأْكُلُ النَّاسُ وَالْأَنْعَامُ حَتَّىٰ إِذَا أَخَذَتِ الْأَرْضُ زُخْرُفَهَا وَازَّيَّنَتْ وَظَنَّ أَهْلُهَا أَنَّهُمْ قَادِرُونَ عَلَيْهَا أَتَاهَا أَمْرُنَا لَيْلًا أَوْ نَهَارًا فَجَعَلْنَاهَا حَصِيدًا كَأَن لَّمْ تَغْنَ بِالْأَمْسِ",
                translation: "The example of [this] worldly life is but like rain which We have sent down from the heaven that the plants of the earth absorb - [those] from which men and livestock eat - until, when the earth has taken on its adornment and is beautified and its people suppose that they have capability over it, there comes to it Our command by night or by day, and We make it as a harvest, as if it had not flourished yesterday.",
                source: "Quran 10:24",
                language: "arabic"
            },
            {
                text: "الدُّنْيَا مَلْعُونَةٌ مَلْعُونٌ مَا فِيهَا إِلَّا ذِكْرَ اللَّهِ وَمَا وَالَاهُ وَعَالِمًا أَوْ مُتَعَلِّمًا",
                translation: "This world is cursed and what is in it is cursed, except for the remembrance of Allah and what is connected to it, and a scholar or a student.",
                source: "Hadith - Tirmidhi",
                language: "arabic"
            },
            {
                text: "لَوْ كَانَتِ الدُّنْيَا تَعْدِلُ عِنْدَ اللَّهِ جَنَاحَ بَعُوضَةٍ مَا سَقَى كَافِرًا مِنْهَا شَرْبَةَ مَاءٍ",
                translation: "If this world were worth a mosquito's wing in the sight of Allah, He would not give a disbeliever even a sip of water from it.",
                source: "Hadith - Tirmidhi",
                language: "arabic"
            },
            {
                text: "وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ",
                translation: "And the worldly life is not but the enjoyment of delusion.",
                source: "Quran 3:185",
                language: "arabic"
            },
            {
                text: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُلْهِكُمْ أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ عَن ذِكْرِ اللَّهِ ۚ وَمَن يَفْعَلْ ذَٰلِكَ فَأُولَٰئِكَ هُمُ الْخَاسِرُونَ",
                translation: "O you who have believed, let not your wealth and your children divert you from remembrance of Allah. And whoever does that - then those are the losers.",
                source: "Quran 63:9",
                language: "arabic"
            },
            {
                text: "مَا لِي وَلِلدُّنْيَا، مَا أَنَا فِي الدُّنْيَا إِلَّا كَرَاكِبٍ اسْتَظَلَّ تَحْتَ شَجَرَةٍ ثُمَّ رَاحَ وَتَرَكَهَا",
                translation: "What have I to do with this world? I am in this world like a rider who rests under the shade of a tree, then goes on and leaves it behind.",
                source: "Hadith - Tirmidhi",
                language: "arabic"
            },
            {
                text: "وَمَا أُوتِيتُم مِّن شَيْءٍ فَمَتَاعُ الْحَيَاةِ الدُّنْيَا وَزِينَتُهَا ۚ وَمَا عِندَ اللَّهِ خَيْرٌ وَأَبْقَىٰ ۚ أَفَلَا تَعْقِلُونَ",
                translation: "And whatever you have been given is [but] the enjoyment of worldly life and its adornment. But what is with Allah is better and more lasting; so will you not reason?",
                source: "Quran 28:60",
                language: "arabic"
            },
            {
                text: "بَادِرُوا بِالْأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ، يُصْبِحُ الرَّجُلُ مُؤْمِنًا وَيُمْسِي كَافِرًا، أَوْ يُمْسِي مُؤْمِنًا وَيُصْبِحُ كَافِرًا، يَبِيعُ دِينَهُ بِعَرَضٍ مِنَ الدُّنْيَا",
                translation: "Hasten to do good deeds before trials come like pieces of a dark night, when a man will be a believer in the morning and a disbeliever in the evening, or he will be a believer in the evening and a disbeliever in the morning, selling his religion for some worldly gain.",
                source: "Hadith - Muslim",
                language: "arabic"
            }
        ];
    }

    initializeElements() {
        this.birthdateInput = document.getElementById('birthdate');
        this.lifeExpectancySelect = document.getElementById('life-expectancy');
        this.weeksLivedSpan = document.getElementById('weeks-lived');
        this.weeksRemainingSpan = document.getElementById('weeks-remaining');
        this.lifePercentageSpan = document.getElementById('life-percentage');
        this.calendarContainer = document.getElementById('life-calendar');
        this.yearLabelsContainer = document.getElementById('year-labels');
        this.styleButtons = document.querySelectorAll('.style-btn');
    }

    bindEvents() {
        this.birthdateInput.addEventListener('change', () => {
            this.birthDate = new Date(this.birthdateInput.value);
            this.updateCalendar();
            this.saveToStorage();
        });

        this.lifeExpectancySelect.addEventListener('change', () => {
            this.lifeExpectancy = parseInt(this.lifeExpectancySelect.value);
            this.generateCalendar();
            this.updateCalendar();
            this.saveToStorage();
        });

        this.styleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeStyle(btn.dataset.style);
            });
        });
        
        // Quote button event listener
        const quoteBtn = document.getElementById('show-quote-btn');
        if (quoteBtn) {
            quoteBtn.addEventListener('click', () => {
                this.showRandomQuote();
            });
        }
    }

    generateCalendar() {
        this.calendarContainer.innerHTML = '';
        this.yearLabelsContainer.innerHTML = '';
        
        const totalWeeks = this.lifeExpectancy * 52;
        
        // Generate year labels (vertical layout on left side) - every 5 years
        for (let year = 0; year < this.lifeExpectancy; year += 5) {
            const yearLabel = document.createElement('div');
            yearLabel.className = 'year-label';
            yearLabel.textContent = year;
            this.yearLabelsContainer.appendChild(yearLabel);
        }

        // Generate week squares with years as rows and weeks as columns
        for (let year = 0; year < this.lifeExpectancy; year++) {
            for (let week = 0; week < 52; week++) {
                const weekIndex = year * 52 + week;
                const weekSquare = document.createElement('div');
                weekSquare.className = 'week-square';
                weekSquare.dataset.week = weekIndex;
                weekSquare.dataset.year = year;
                weekSquare.dataset.weekInYear = week;
                
                // Add tooltip
                weekSquare.title = `Age ${year}, Week ${week + 1}`;
                
                // Add hover effect with age info (desktop)
                weekSquare.addEventListener('mouseenter', (e) => {
                    if (!this.isMobile()) {
                        this.showTooltip(e, year, week + 1);
                    }
                });
                
                weekSquare.addEventListener('mouseleave', () => {
                    if (!this.isMobile()) {
                        this.hideTooltip();
                    }
                });
                
                // Add touch support for mobile
                weekSquare.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    this.showTooltip(e.touches[0], year, week + 1);
                    
                    // Auto-hide tooltip after 2 seconds on mobile
                    setTimeout(() => {
                        this.hideTooltip();
                    }, 2000);
                });
                
                // Add click support for mobile
                weekSquare.addEventListener('click', (e) => {
                    if (this.isMobile()) {
                        e.preventDefault();
                        this.showTooltip(e, year, week + 1);
                        
                        // Auto-hide tooltip after 3 seconds on mobile
                        setTimeout(() => {
                            this.hideTooltip();
                        }, 3000);
                    }
                });
                
                this.calendarContainer.appendChild(weekSquare);
            }
        }
        
        // Align year labels with grid rows after rendering
        this.alignYearLabels();
    }
    
    alignYearLabels() {
        // Wait for the grid to be rendered
        setTimeout(() => {
            const gridRect = this.calendarContainer.getBoundingClientRect();
            const gridHeight = gridRect.height;
            const yearLabels = this.yearLabelsContainer.querySelectorAll('.year-label');
            
            if (yearLabels.length > 0 && gridHeight > 0) {
                const yearsPerLabel = 5;
                const totalYears = this.lifeExpectancy;
                const rowHeight = gridHeight / totalYears;
                const labelHeight = rowHeight * yearsPerLabel;
                
                yearLabels.forEach(label => {
                    label.style.height = `${labelHeight}px`;
                });
            }
        }, 100);
    }

    updateCalendar() {
        if (!this.birthDate) return;

        const now = new Date();
        
        // Calculate weeks lived with Saturday as week start
        const birthDate = new Date(this.birthDate);
        const birthDayOfWeek = birthDate.getDay();
        const daysToSaturday = (6 - birthDayOfWeek) % 7;
        
        const firstSaturday = new Date(birthDate);
        firstSaturday.setDate(birthDate.getDate() + daysToSaturday);
        
        // Calculate current week based on Saturday start
        const msPerWeek = 7 * 24 * 60 * 60 * 1000;
        const weeksLived = Math.floor((now - firstSaturday) / msPerWeek);
        
        const totalWeeks = this.lifeExpectancy * 52;
        const weeksRemaining = Math.max(0, totalWeeks - weeksLived);
        const lifePercentage = Math.min(100, (weeksLived / totalWeeks * 100)).toFixed(1);
        
        // Debug logging
        console.log('Current date:', now.toLocaleDateString());
        console.log('Birth date:', this.birthDate.toLocaleDateString());
        console.log('First Saturday:', firstSaturday.toLocaleDateString());
        console.log('Weeks lived:', weeksLived);

        // Update statistics
        this.weeksLivedSpan.textContent = weeksLived.toLocaleString();
        this.weeksRemainingSpan.textContent = weeksRemaining.toLocaleString();
        this.lifePercentageSpan.textContent = `${lifePercentage}%`;

        // Update calendar squares
        const squares = this.calendarContainer.querySelectorAll('.week-square');
        squares.forEach((square, index) => {
            square.classList.remove('lived', 'current');
            
            if (index < weeksLived) {
                square.classList.add('lived');
            } else if (index === weeksLived) {
                square.classList.add('current');
            }
        });

        // Add motivational messages based on life percentage
        this.updateMotivationalMessage(parseFloat(lifePercentage));
        
        // Realign year labels after calendar update
        this.alignYearLabels();
    }
    
    isMobile() {
        return window.innerWidth <= 768 || 'ontouchstart' in window;
    }

    updateMotivationalMessage(percentage) {
        const messages = {
            10: "Your journey has just begun. Make every week count!",
            25: "A quarter of your life has passed. What legacy are you building?",
            50: "Halfway through. Time to accelerate your dreams!",
            75: "Three quarters done. Make the remaining weeks legendary!",
            90: "The final stretch. Every moment is precious now."
        };

        const milestone = Object.keys(messages).find(key => percentage >= key && percentage < (parseInt(key) + 10));
        
        if (milestone && !this.lastMilestone || this.lastMilestone !== milestone) {
            this.showNotification(messages[milestone]);
            this.lastMilestone = milestone;
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #000;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    showTooltip(event, year, week) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        
        // Calculate if this is the current week (using Saturday as week start)
        const now = new Date();
        let weeksLived = 0;
        
        if (this.birthDate) {
            const birthDate = new Date(this.birthDate);
            const birthDayOfWeek = birthDate.getDay();
            const daysToSaturday = (6 - birthDayOfWeek) % 7;
            
            const firstSaturday = new Date(birthDate);
            firstSaturday.setDate(birthDate.getDate() + daysToSaturday);
            
            const msPerWeek = 7 * 24 * 60 * 60 * 1000;
            weeksLived = Math.floor((now - firstSaturday) / msPerWeek);
        }
        
        const weekIndex = year * 52 + (week - 1);
        const isCurrent = weekIndex === weeksLived;
        
        tooltip.innerHTML = `
            <strong>Age ${year}</strong><br>
            Week ${week} of the year<br>
            ${this.birthDate ? this.getDateForWeek(year, week) : ''}
            ${isCurrent ? '<br><em>Current Week</em>' : ''}
        `;
        // Better positioning for mobile
        const isMobile = this.isMobile();
        const tooltipX = isMobile ? '50%' : `${event.pageX + 10}px`;
        const tooltipY = isMobile ? '20px' : `${event.pageY - 10}px`;
        const transform = isMobile ? 'translateX(-50%)' : 'none';
        
        tooltip.style.cssText = `
            position: ${isMobile ? 'fixed' : 'absolute'};
            background: rgba(0,0,0,0.95);
            color: white;
            padding: ${isMobile ? '0.8rem 1rem' : '0.5rem'};
            border-radius: ${isMobile ? '8px' : '4px'};
            font-size: ${isMobile ? '0.9rem' : '0.8rem'};
            pointer-events: none;
            z-index: 1000;
            left: ${tooltipX};
            top: ${tooltipY};
            transform: ${transform};
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            border: ${isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none'};
            backdrop-filter: blur(10px);
            max-width: ${isMobile ? '280px' : 'none'};
            text-align: center;
        `;
        
        document.body.appendChild(tooltip);
        this.currentTooltip = tooltip;
    }

    hideTooltip() {
        if (this.currentTooltip) {
            this.currentTooltip.remove();
            this.currentTooltip = null;
        }
    }

    getDateForWeek(year, week) {
        if (!this.birthDate) return '';
        
        // Find the Saturday of the birth week
        const birthDate = new Date(this.birthDate);
        const birthDayOfWeek = birthDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const daysToSaturday = (6 - birthDayOfWeek) % 7; // Days to reach Saturday
        
        const firstSaturday = new Date(birthDate);
        firstSaturday.setDate(birthDate.getDate() + daysToSaturday);
        
        // Calculate the target Saturday for this week
        const totalWeeks = year * 52 + (week - 1);
        const targetDate = new Date(firstSaturday);
        targetDate.setDate(firstSaturday.getDate() + (totalWeeks * 7));
        
        return targetDate.toLocaleDateString();
    }

    changeStyle(style) {
        // Remove all style classes
        document.body.classList.remove('minimal-style', 'poster-style', 'digital-style');
        
        // Add new style class
        document.body.classList.add(`${style}-style`);
        
        // Update active button
        this.styleButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.style === style);
        });
        
        this.currentStyle = style;
        this.saveToStorage();
    }
    
    async trackVisitor() {
        try {
            // Generate or get visitor ID
            let visitorId = localStorage.getItem('lifeBlocksVisitorId');
            if (!visitorId) {
                visitorId = this.generateVisitorId();
                localStorage.setItem('lifeBlocksVisitorId', visitorId);
            }
            
            // Check if we've already tracked this visitor today
            const lastTracked = localStorage.getItem('lifeBlocksLastTracked');
            const today = new Date().toDateString();
            
            if (lastTracked !== today) {
                // Track the visitor
                const response = await fetch('/api/visitors', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ visitorId })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('lifeBlocksLastTracked', today);
                    this.updateVisitorDisplay(data);
                }
            } else {
                // Just get current count without incrementing
                const response = await fetch('/api/visitors');
                if (response.ok) {
                    const data = await response.json();
                    this.updateVisitorDisplay(data);
                }
            }
        } catch (error) {
            console.log('Visitor tracking unavailable (local development)');
            // Fallback for local development
            this.updateVisitorDisplay({ totalVisitors: '---', dailyVisitors: '---' });
        }
    }
    
    generateVisitorId() {
        // Generate a simple unique ID
        return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    updateVisitorDisplay(data) {
        // Add visitor counter to footer if it doesn't exist
        let visitorCounter = document.getElementById('visitor-counter');
        if (!visitorCounter) {
            visitorCounter = document.createElement('div');
            visitorCounter.id = 'visitor-counter';
            visitorCounter.style.cssText = `
                text-align: center;
                margin-top: 1rem;
                padding: 1rem;
                background: rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                font-size: 0.9rem;
                color: #666;
            `;
            
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.appendChild(visitorCounter);
            }
        }
        
        visitorCounter.innerHTML = `
            <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
                <div>
                    <strong style="color: #000;">${data.totalVisitors}</strong>
                    <span>Total Visitors</span>
                </div>
                <div>
                    <strong style="color: #000;">${data.dailyVisitors}</strong>
                    <span>Today's Visitors</span>
                </div>
            </div>
        `;
    }
    
    showWelcomePopup() {
        // Check if user has seen the welcome popup today
        const today = new Date().toDateString();
        const lastShown = localStorage.getItem('lastWelcomeShown');
        
        if (lastShown === today) {
            return; // Don't show again today
        }
        
        // Select a random quote
        const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        
        // Create professional overlay
        const overlay = document.createElement('div');
        overlay.className = 'welcome-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(8px);
            animation: welcomeFadeIn 0.8s ease-out;
            cursor: pointer;
        `;
        
        // Create welcome popup
        const popup = document.createElement('div');
        popup.className = 'welcome-popup';
        popup.style.cssText = `
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            padding: 4rem 3rem;
            border-radius: 20px;
            max-width: 700px;
            width: 90%;
            text-align: center;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: welcomeSlideUp 0.8s ease-out;
            cursor: default;
            border: 3px solid transparent;
            background-clip: padding-box;
        `;
        
        // Add gradient border effect
        popup.style.position = 'relative';
        popup.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
        
        const isArabic = randomQuote.language === 'arabic';
        if (isArabic) {
            popup.style.fontFamily = "'Amiri', 'Scheherazade New', 'Arabic Typesetting', serif";
        }
        
        popup.innerHTML = `
            <div class="welcome-content">
                <div class="welcome-header" style="
                    margin-bottom: 2rem;
                ">
                    <div class="welcome-icon" style="
                        width: 80px;
                        height: 80px;
                        margin: 0 auto 1.5rem;
                        background: linear-gradient(45deg, #000, #333);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: welcomePulse 2s infinite;
                    ">
                        <span style="color: white; font-size: 2rem; font-weight: bold;">⏳</span>
                    </div>
                    <h2 style="
                        font-size: 2.2rem;
                        font-weight: 800;
                        color: #000;
                        margin-bottom: 0.5rem;
                        background: linear-gradient(45deg, #000, #333);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    ">
                        Welcome to Life Blocks | مربعات الحياة
                    </h2>
                    <p style="
                        font-size: 1.1rem;
                        color: #666;
                        font-weight: 400;
                        margin-bottom: 2rem;
                    ">
                        Visualize your life. Make every week count.
                    </p>
                </div>
                
                <div class="quote-section" style="
                    background: rgba(0, 0, 0, 0.03);
                    padding: 2rem;
                    border-radius: 12px;
                    margin-bottom: 2.5rem;
                    border-left: 4px solid #000;
                    ${isArabic ? 'direction: rtl; text-align: right;' : ''}
                ">
                    <div class="quote-text" style="
                        font-size: ${isArabic ? '1.5rem' : '1.3rem'};
                        line-height: 1.8;
                        margin-bottom: ${randomQuote.translation ? '1.5rem' : '1rem'};
                        color: #222;
                        font-weight: ${isArabic ? '400' : '500'};
                        font-style: italic;
                    ">
                        "${randomQuote.text}"
                    </div>
                    ${randomQuote.translation ? `
                        <div class="quote-translation" style="
                            font-size: 1.1rem;
                            line-height: 1.6;
                            margin-bottom: 1rem;
                            color: #555;
                            font-style: italic;
                            direction: ltr;
                            text-align: center;
                            font-family: 'Inter', sans-serif;
                        ">
                            "${randomQuote.translation}"
                        </div>
                    ` : ''}
                    <div class="quote-source" style="
                        font-size: 1rem;
                        color: #777;
                        font-weight: 600;
                        ${isArabic ? 'direction: ltr; text-align: center;' : ''}
                    ">
                        — ${randomQuote.source}
                    </div>
                </div>
                
                <div class="welcome-actions">
                    <button class="continue-btn" style="
                        background: linear-gradient(45deg, #000, #333);
                        color: white;
                        border: none;
                        padding: 1rem 3rem;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        position: relative;
                        overflow: hidden;
                    ">
                        <span style="position: relative; z-index: 2;">Continue to Calendar</span>
                    </button>
                    <p style="
                        margin-top: 1.5rem;
                        font-size: 0.9rem;
                        color: #999;
                        font-weight: 400;
                    ">
                        Click anywhere or press ESC to continue
                    </p>
                </div>
            </div>
        `;
        
        // Add button hover effects
        const continueBtn = popup.querySelector('.continue-btn');
        continueBtn.addEventListener('mouseenter', () => {
            continueBtn.style.transform = 'translateY(-3px)';
            continueBtn.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)';
        });
        
        continueBtn.addEventListener('mouseleave', () => {
            continueBtn.style.transform = 'translateY(0)';
            continueBtn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
        });
        
        // Close functionality
        const closePopup = () => {
            overlay.style.animation = 'welcomeFadeOut 0.5s ease-in';
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 500);
            
            // Remember that we showed the welcome today
            localStorage.setItem('lastWelcomeShown', today);
        };
        
        // Continue button click
        continueBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closePopup();
        });
        
        // Click anywhere to close
        overlay.addEventListener('click', closePopup);
        
        // Prevent popup from closing when clicking inside
        popup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // ESC key to close
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                closePopup();
                document.removeEventListener('keydown', escapeHandler);
            }
        });
        
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }
    
    showRandomQuote() {
        // Don't check for daily limit when manually triggered
        const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.displayQuotePopup(randomQuote);
    }
    
    displayQuotePopup(quote) {
        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.className = 'quote-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.5s ease;
        `;
        
        // Create popup content
        const popup = document.createElement('div');
        popup.className = 'quote-popup';
        popup.style.cssText = `
            background: white;
            padding: 3rem;
            border-radius: 16px;
            max-width: 600px;
            margin: 2rem;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: slideUp 0.5s ease;
        `;
        
        // Add Arabic font support if needed
        const isArabic = quote.language === 'arabic';
        if (isArabic) {
            popup.style.fontFamily = "'Amiri', 'Scheherazade New', 'Arabic Typesetting', serif";
            popup.style.direction = 'rtl';
        }
        
        popup.innerHTML = `
            <div class="quote-content">
                <div class="quote-text" style="
                    font-size: ${isArabic ? '1.4rem' : '1.2rem'};
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                    color: #333;
                    font-weight: ${isArabic ? '400' : '500'};
                ">
                    "${quote.text}"
                </div>
                ${quote.translation ? `
                    <div class="quote-translation" style="
                        font-size: 1rem;
                        line-height: 1.6;
                        margin-bottom: 1.5rem;
                        color: #666;
                        font-style: italic;
                        direction: ltr;
                        text-align: center;
                    ">
                        "${quote.translation}"
                    </div>
                ` : ''}
                <div class="quote-source" style="
                    font-size: 0.9rem;
                    color: #888;
                    margin-bottom: 2rem;
                    font-weight: 600;
                ">
                    — ${quote.source}
                </div>
                <div class="quote-actions">
                    <button class="new-quote-btn" style="
                        background: linear-gradient(45deg, #4CAF50, #45a049);
                        color: white;
                        border: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 8px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        margin-right: 1rem;
                    ">
                        Another Quote
                    </button>
                    <button class="close-quote-btn" style="
                        background: linear-gradient(45deg, #000, #333);
                        color: white;
                        border: none;
                        padding: 0.75rem 2rem;
                        border-radius: 8px;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    ">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        // Add button functionality
        const closeBtn = popup.querySelector('.close-quote-btn');
        const newQuoteBtn = popup.querySelector('.new-quote-btn');
        
        // Close button
        closeBtn.addEventListener('click', () => {
            overlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        });
        
        // New quote button
        newQuoteBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
            this.showRandomQuote();
        });
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeBtn.click();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                closeBtn.click();
                document.removeEventListener('keydown', escapeHandler);
            }
        });
        
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    saveToStorage() {
        const data = {
            birthDate: this.birthDate ? this.birthDate.toISOString() : null,
            lifeExpectancy: this.lifeExpectancy,
            currentStyle: this.currentStyle
        };
        localStorage.setItem('lifeCalendarData', JSON.stringify(data));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('lifeCalendarData');
        if (saved) {
            const data = JSON.parse(saved);
            
            if (data.birthDate) {
                this.birthDate = new Date(data.birthDate);
                this.birthdateInput.value = this.birthDate.toISOString().split('T')[0];
            }
            
            if (data.lifeExpectancy) {
                this.lifeExpectancy = data.lifeExpectancy;
                this.lifeExpectancySelect.value = data.lifeExpectancy;
            }
            
            if (data.currentStyle) {
                this.changeStyle(data.currentStyle);
            }
            
            this.generateCalendar();
            this.updateCalendar();
        }
    }

    // Export calendar as image
    async exportAsImage() {
        try {
            // Create a larger canvas for better quality
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size for high quality export
            const scale = 3; // Higher resolution
            canvas.width = 900 * scale;
            canvas.height = 700 * scale;
            
            // Scale the context for crisp rendering
            ctx.scale(scale, scale);
            
            // Draw white background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 900, 700);
            
            // Draw title
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 24px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('DEATH IS THE BEST MOTIVATOR', 450, 40);
            
            // Draw subtitle
            ctx.font = '14px Inter, sans-serif';
            ctx.fillStyle = '#666666';
            ctx.fillText('Each square represents one week of your life', 450, 65);
            
            // Calculate grid dimensions
            const gridWidth = 520;
            const gridHeight = 400;
            const startX = 150;
            const startY = 100;
            const squareSize = gridWidth / 52; // 52 weeks
            const squareHeight = gridHeight / 75; // 75 years
            
            // Draw year labels on the left
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = '#999999';
            ctx.textAlign = 'right';
            for (let year = 0; year < 75; year += 5) {
                const y = startY + (year * squareHeight) + (squareHeight / 2);
                ctx.fillText(year.toString(), startX - 10, y + 3);
            }
            
            // Draw the grid with Saturday-based week calculation
            const now = new Date();
            let weeksLived = 0;
            
            if (this.birthDate) {
                const birthDate = new Date(this.birthDate);
                const birthDayOfWeek = birthDate.getDay();
                const daysToSaturday = (6 - birthDayOfWeek) % 7;
                
                const firstSaturday = new Date(birthDate);
                firstSaturday.setDate(birthDate.getDate() + daysToSaturday);
                
                const msPerWeek = 7 * 24 * 60 * 60 * 1000;
                weeksLived = Math.floor((now - firstSaturday) / msPerWeek);
            }
            
            for (let year = 0; year < 75; year++) {
                for (let week = 0; week < 52; week++) {
                    const weekIndex = year * 52 + week;
                    const x = startX + (week * squareSize);
                    const y = startY + (year * squareHeight);
                    
                    // Determine square color
                    if (weekIndex < weeksLived) {
                        ctx.fillStyle = '#000000'; // Lived weeks
                    } else if (weekIndex === weeksLived) {
                        ctx.fillStyle = '#ff0000'; // Current week
                    } else {
                        ctx.fillStyle = '#ffffff'; // Future weeks
                    }
                    
                    ctx.fillRect(x, y, squareSize - 1, squareHeight - 1);
                    
                    // Draw border for empty squares
                    if (weekIndex >= weeksLived) {
                        ctx.strokeStyle = '#e0e0e0';
                        ctx.lineWidth = 0.5;
                        ctx.strokeRect(x, y, squareSize - 1, squareHeight - 1);
                    }
                }
            }
            
            // Draw legend
            const legendY = startY + gridHeight + 30;
            ctx.font = '12px Inter, sans-serif';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'left';
            
            // Lived weeks legend
            ctx.fillStyle = '#000000';
            ctx.fillRect(startX, legendY, 15, 15);
            ctx.fillStyle = '#666666';
            ctx.fillText('Weeks lived', startX + 25, legendY + 12);
            
            // Remaining weeks legend
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(startX + 150, legendY, 15, 15);
            ctx.strokeStyle = '#e0e0e0';
            ctx.strokeRect(startX + 150, legendY, 15, 15);
            ctx.fillStyle = '#666666';
            ctx.fillText('Weeks remaining', startX + 175, legendY + 12);
            
            // Current week legend
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(startX + 320, legendY, 15, 15);
            ctx.fillStyle = '#666666';
            ctx.fillText('Current week', startX + 345, legendY + 12);
            
            // Add comprehensive stats if birth date is set
            if (this.birthDate) {
                const totalWeeks = this.lifeExpectancy * 52;
                const weeksRemaining = Math.max(0, totalWeeks - weeksLived);
                const lifePercentage = Math.min(100, (weeksLived / totalWeeks * 100)).toFixed(1);
                
                // Main stats line
                ctx.font = 'bold 13px Inter, sans-serif';
                ctx.fillStyle = '#000000';
                ctx.textAlign = 'center';
                ctx.fillText(`${weeksLived.toLocaleString()} weeks lived • ${weeksRemaining.toLocaleString()} weeks remaining • ${lifePercentage}% complete`, 450, legendY + 40);
                
                // Birth date and current date
                ctx.font = '11px Inter, sans-serif';
                ctx.fillStyle = '#666666';
                ctx.textAlign = 'center';
                const birthDateStr = this.birthDate.toLocaleDateString();
                const currentDateStr = now.toLocaleDateString();
                ctx.fillText(`Born: ${birthDateStr} • Today: ${currentDateStr} • Life Expectancy: ${this.lifeExpectancy} years`, 450, legendY + 60);
                
                // Age calculation
                const ageYears = Math.floor(weeksLived / 52);
                const ageWeeks = weeksLived % 52;
                ctx.fillText(`Current Age: ${ageYears} years, ${ageWeeks} weeks`, 450, legendY + 75);
            }
            
            // Add footer quote
            ctx.font = 'italic 10px Inter, sans-serif';
            ctx.fillStyle = '#888888';
            ctx.textAlign = 'center';
            ctx.fillText('"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time." - Mark Twain', 450, legendY + 95);
            
            // Add site branding
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.fillStyle = '#999999';
            ctx.textAlign = 'center';
            ctx.fillText('Life Blocks | مربعات الحياة', 450, legendY + 115);
            
            // Convert to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `life-calendar-${new Date().toISOString().split('T')[0]}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                // Show success notification
                this.showNotification('Life calendar exported successfully!');
            }, 'image/png', 1.0);
            
        } catch (error) {
            console.error('Export failed:', error);
            this.showNotification('Export failed. Please try again.');
        }
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        animation: slideIn 0.3s ease;
    }
`;
document.head.appendChild(style);

// Initialize the life calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const lifeCalendar = new LifeCalendar();
    
    // Add export functionality with enhanced styling
    const exportBtn = document.createElement('button');
    exportBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Export
    `;
    exportBtn.className = 'export-btn';
    exportBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 0.75rem 1.25rem;
        background: linear-gradient(45deg, #000, #333);
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    // Add hover effects
    exportBtn.addEventListener('mouseenter', () => {
        exportBtn.style.transform = 'translateY(-2px)';
        exportBtn.style.boxShadow = '0 6px 25px rgba(0,0,0,0.4)';
    });
    
    exportBtn.addEventListener('mouseleave', () => {
        exportBtn.style.transform = 'translateY(0)';
        exportBtn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    });
    
    exportBtn.addEventListener('click', () => {
        exportBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            exportBtn.style.transform = 'translateY(-2px)';
        }, 150);
        lifeCalendar.exportAsImage();
    });
    
    document.body.appendChild(exportBtn);
    
    // Make life calendar globally accessible
    window.lifeCalendar = lifeCalendar;
});

// Export the class for potential module usage
window.LifeCalendar = LifeCalendar;
