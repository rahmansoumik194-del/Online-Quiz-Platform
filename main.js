        // Quiz data with 100 questions each
        const quizData = {
            general: {
                title: "🌍 General Knowledge Quiz",
                questions: [
                    // Geography Questions (25)
                    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
                    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "North America", "Europe"], correct: 1 },
                    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], correct: 1 },
                    { question: "Which country has the most time zones?", options: ["Russia", "USA", "China", "Canada"], correct: 0 },
                    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
                    { question: "Which mountain range contains Mount Everest?", options: ["Andes", "Alps", "Himalayas", "Rockies"], correct: 2 },
                    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3 },
                    { question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], correct: 2 },
                    { question: "What is the deepest ocean trench?", options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Peru-Chile Trench"], correct: 1 },
                    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], correct: 1 },
                    { question: "What is the largest lake in the world?", options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"], correct: 1 },
                    { question: "Which European capital is known as the City of Light?", options: ["London", "Rome", "Paris", "Madrid"], correct: 2 },
                    { question: "What is the highest waterfall in the world?", options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"], correct: 1 },
                    { question: "Which strait separates Europe and Asia?", options: ["Strait of Gibraltar", "Bosphorus", "Strait of Hormuz", "Strait of Malacca"], correct: 1 },
                    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
                    { question: "Which island is the largest in the Mediterranean Sea?", options: ["Sicily", "Sardinia", "Cyprus", "Corsica"], correct: 0 },
                    { question: "What is the longest mountain range in the world?", options: ["Himalayas", "Andes", "Rocky Mountains", "Alps"], correct: 1 },
                    { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York", "Boston"], correct: 2 },
                    { question: "What is the largest island in the world?", options: ["Australia", "Greenland", "New Guinea", "Borneo"], correct: 1 },
                    { question: "Which country has the longest coastline?", options: ["Russia", "Canada", "Norway", "Chile"], correct: 1 },
                    { question: "What is the capital of Egypt?", options: ["Alexandria", "Cairo", "Giza", "Luxor"], correct: 1 },

                    { question: "Which sea is the saltiest?", options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Black Sea"], correct: 0 },
                    { question: "What is the largest city in Africa?", options: ["Cairo", "Lagos", "Kinshasa", "Johannesburg"], correct: 1 },
                    { question: "Which river flows through Paris?", options: ["Thames", "Rhine", "Seine", "Danube"], correct: 2 },
                    { question: "What is the highest capital city in the world?", options: ["Quito", "La Paz", "Bogotá", "Addis Ababa"], correct: 1 },

                    // History Questions (25)
                    { question: "In which year did World War II end?", options: ["1944", "1945", "1946", "1947"], correct: 1 },
                    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"], correct: 1 },
                    { question: "Which ancient wonder was located in Alexandria?", options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Statue of Zeus"], correct: 1 },
                    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correct: 2 },
                    { question: "In which year did the Berlin Wall fall?", options: ["1987", "1988", "1989", "1990"], correct: 2 },
                    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], correct: 2 },
                    { question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Byzantine", "Ottoman"], correct: 1 },
                    { question: "In which year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], correct: 2 },
                    { question: "Who wrote the Communist Manifesto?", options: ["Vladimir Lenin", "Karl Marx", "Friedrich Engels", "Both Marx and Engels"], correct: 3 },
                    { question: "Which war was fought between 1950-1953?", options: ["Vietnam War", "Korean War", "Cold War", "World War II"], correct: 1 },
                    { question: "Who was known as the Iron Lady?", options: ["Queen Elizabeth II", "Margaret Thatcher", "Golda Meir", "Indira Gandhi"], correct: 1 },
                    { question: "In which year did India gain independence?", options: ["1946", "1947", "1948", "1949"], correct: 1 },

                    { question: "Who discovered America in 1492?", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"], correct: 1 },
                    { question: "Which revolution began in 1789?", options: ["American Revolution", "Industrial Revolution", "French Revolution", "Russian Revolution"], correct: 2 },
                    { question: "Who was the last Pharaoh of Egypt?", options: ["Tutankhamun", "Ramesses II", "Cleopatra VII", "Akhenaten"], correct: 2 },
                    { question: "In which year did the Soviet Union collapse?", options: ["1989", "1990", "1991", "1992"], correct: 2 },
                    { question: "Who led the Mongol Empire?", options: ["Attila the Hun", "Genghis Khan", "Tamerlane", "Kublai Khan"], correct: 1 },

                    { question: "Which city was the capital of the Byzantine Empire?", options: ["Rome", "Athens", "Constantinople", "Alexandria"], correct: 2 },
                    { question: "Who invented the printing press?", options: ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "Thomas Edison"], correct: 0 },
                    { question: "In which year did World War I begin?", options: ["1912", "1913", "1914", "1915"], correct: 2 },
                    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Bertha von Suttner"], correct: 0 },
                    { question: "Which ancient civilization built Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], correct: 2 },
                    { question: "Who was assassinated in Sarajevo in 1914?", options: ["Kaiser Wilhelm II", "Archduke Franz Ferdinand", "Tsar Nicholas II", "King George V"], correct: 1 },
                    { question: "Which dynasty ruled China for the longest time?", options: ["Ming", "Qing", "Han", "Zhou"], correct: 3 },
                    { question: "In which year did the Great Depression begin?", options: ["1927", "1928", "1929", "1930"], correct: 2 },

                    // Science Questions (25)
                    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
                    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
                    { question: "How many bones are there in an adult human body?", options: ["206", "208", "210", "212"], correct: 0 },
                    { question: "What is the speed of light in vacuum?", options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"], correct: 0 },
                    { question: "Which gas makes up about 78% of Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2 },
                    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
                    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], correct: 1 },
                    { question: "What is the largest organ in the human body?", options: ["Brain", "Liver", "Lungs", "Skin"], correct: 3 },
                    { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Lithium", "Carbon"], correct: 1 },
                    { question: "What is the study of earthquakes called?", options: ["Geology", "Seismology", "Meteorology", "Volcanology"], correct: 1 },
                    { question: "How many chambers does a human heart have?", options: ["2", "3", "4", "5"], correct: 2 },
                    { question: "What is the smallest unit of matter?", options: ["Molecule", "Atom", "Electron", "Proton"], correct: 1 },
                    { question: "Which blood type is known as the universal donor?", options: ["A", "B", "AB", "O"], correct: 3 },
                    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "CH4"], correct: 0 },
                    { question: "Which scientist discovered penicillin?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Charles Darwin"], correct: 1 },
                    { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 1 },
                    { question: "How many chromosomes do humans have?", options: ["44", "46", "48", "50"], correct: 1 },
                    { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correct: 1 },
                    { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correct: 1 },
                    { question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In", "I"], correct: 1 },
                    { question: "How long does it take for light from the Sun to reach Earth?", options: ["8 minutes", "8 hours", "8 days", "8 seconds"], correct: 0 },
                    { question: "What is the most abundant gas in the universe?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"], correct: 2 },
                    { question: "Which organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], correct: 2 },
                    { question: "What is the study of heredity called?", options: ["Biology", "Genetics", "Anatomy", "Physiology"], correct: 1 },
                    { question: "How many teeth does an adult human typically have?", options: ["28", "30", "32", "34"], correct: 2 },

                    // Sports & Entertainment (25)
                    { question: "How many players are on a basketball team on the court?", options: ["4", "5", "6", "7"], correct: 1 },
                    { question: "Which sport is known as 'The Beautiful Game'?", options: ["Basketball", "Tennis", "Football/Soccer", "Cricket"], correct: 2 },
                    { question: "How often are the Summer Olympics held?", options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"], correct: 2 },
                    { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Badminton"], correct: 1 },
                    { question: "What is the maximum score possible in ten-pin bowling?", options: ["200", "250", "300", "350"], correct: 2 },
                    { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Brazil", "Italy"], correct: 2 },
                    { question: "In tennis, what does 'love' mean?", options: ["15 points", "30 points", "40 points", "0 points"], correct: 3 },
                    { question: "How many holes are there in a standard golf course?", options: ["16", "17", "18", "19"], correct: 2 },
                    { question: "Which sport uses the terms 'strike' and 'spare'?", options: ["Baseball", "Bowling", "Cricket", "Golf"], correct: 1 },
                    { question: "In which sport would you find a pommel horse?", options: ["Gymnastics", "Equestrian", "Wrestling", "Fencing"], correct: 0 },
                    { question: "What is the diameter of a basketball hoop in inches?", options: ["16", "17", "18", "19"], correct: 2 },
                    { question: "Which swimmer has won the most Olympic gold medals?", options: ["Mark Spitz", "Michael Phelps", "Ian Thorpe", "Ryan Lochte"], correct: 1 },
                    { question: "In American football, how many points is a touchdown worth?", options: ["3", "6", "7", "8"], correct: 1 },
                    { question: "Which sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Golf", "Rugby"], correct: 1 },
                    { question: "How many minutes are in a soccer match?", options: ["80", "85", "90", "95"], correct: 2 },
                    { question: "In which sport would you perform a slam?", options: ["Tennis", "Volleyball", "Basketball", "All of the above"], correct: 3 },
                    { question: "What is the highest possible hand in poker?", options: ["Full House", "Four of a Kind", "Straight Flush", "Royal Flush"], correct: 3 },
                    { question: "Which country invented the sport of rugby?", options: ["Australia", "New Zealand", "England", "South Africa"], correct: 2 },
                    { question: "In baseball, how many strikes result in an out?", options: ["2", "3", "4", "5"], correct: 1 },
                    { question: "Which sport uses a shuttlecock?", options: ["Tennis", "Squash", "Badminton", "Table Tennis"], correct: 2 },
                    { question: "How many players are on a volleyball team on the court?", options: ["5", "6", "7", "8"], correct: 1 },
                    { question: "In which sport would you find a wicket?", options: ["Baseball", "Cricket", "Hockey", "Lacrosse"], correct: 1 },
                    { question: "What is the length of a marathon in miles?", options: ["24.2", "25.2", "26.2", "27.2"], correct: 2 },
                    { question: "Which sport is known as the 'Sport of Kings'?", options: ["Polo", "Horse Racing", "Golf", "Tennis"], correct: 1 },
                    { question: "In ice hockey, how many players per team are on the ice?", options: ["5", "6", "7", "8"], correct: 1 }
                ]
            },
            coding: {
                title: "💻 Programming Quiz",
                questions: [
                    // Basic Programming (25)
                    { question: "Which of the following is NOT a programming language?", options: ["Python", "JavaScript", "HTML", "Java"], correct: 2 },
                    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], correct: 1 },
                    { question: "Which symbol is used for comments in JavaScript?", options: ["#", "//", "/*", "Both // and /*"], correct: 3 },
                    { question: "What is the correct way to declare a variable in JavaScript?", options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"], correct: 0 },
                    { question: "Which HTML tag is used for the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<header>"], correct: 1 },
                    { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Interface"], correct: 0 },
                    { question: "Which of these is a Python web framework?", options: ["React", "Angular", "Django", "Vue"], correct: 2 },
                    { question: "What is the file extinsion for Python files?", options: [".py", ".python", ".pt", ".pyt"], correct: 0 },
                    { question: "Which operator is used for equality comparison in most languages?", options: ["=", "==", "===", "!="], correct: 1 },
                    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"], correct: 0 },
                    { question: "Which HTML tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
                    { question: "What is the correct syntax for a for loop in Python?", options: ["for i in range(10):", "for (i=0; i<10; i++):", "for i = 1 to 10:", "for i in 1..10:"], correct: 0 },
                    { question: "Which CSS property is used to change text color?", options: ["text-color", "font-color", "color", "text-style"], correct: 2 },
                    { question: "What is the default port for HTTP?", options: ["21", "22", "80", "443"], correct: 2 },
                    { question: "Which JavaScript method adds an element to the end of an array?", options: ["append()", "add()", "push()", "insert()"], correct: 2 },
                    { question: "What does IDE stand for?", options: ["Integrated Development Environment", "Interactive Development Environment", "Internal Development Environment", "Intelligent Development Environment"], correct: 0 },
                    { question: "Which HTML attribute specifies the URL of a link?", options: ["src", "href", "link", "url"], correct: 1 },
                    { question: "What is the correct way to write a JavaScript array?", options: ["var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"], correct: 2 },
                    { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], correct: 2 },
                    { question: "What is the correct HTML for creating a checkbox?", options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"], correct: 1 },
                    { question: "Which Python keyword is used to create a function?", options: ["function", "def", "func", "define"], correct: 1 },
                    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Notation", "Java Syntax Object Notation"], correct: 0 },
                    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>", "<link>"], correct: 2 },
                    { question: "What is the correct way to write a JavaScript object?", options: ["var person = (firstName:'John', lastName:'Doe');", "var person = {firstName:'John', lastName:'Doe'};", "var person = [firstName:'John', lastName:'Doe'];", "var person = firstName='John', lastName='Doe';"], correct: 1 },
                    { question: "Which CSS property is used to make text bold?", options: ["font-weight", "text-weight", "font-style", "text-style"], correct: 0 },

                    // Advanced Programming (25)
                    { question: "What is Big O notation used for?", options: ["Memory usage", "Algorithm complexity", "Code readability", "Error handling"], correct: 1 },
                    { question: "Which design pattern ensures a class has only one instance?", options: ["Factory", "Observer", "Singleton", "Strategy"], correct: 2 },
                    { question: "What does MVC stand for?", options: ["Model View Controller", "Multiple View Control", "Main View Component", "Master View Class"], correct: 0 },
                    { question: "Which HTTP method is used to update a resource?", options: ["GET", "POST", "PUT", "DELETE"], correct: 2 },
                    { question: "What is recursion in programming?", options: ["A loop that never ends", "A function calling itself", "Error handling", "Memory allocation"], correct: 1 },

                    { question: "Which data structure follows LIFO principle?", options: ["Queue", "Stack", "Array", "Linked List"], correct: 1 },
                    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1 },
                    { question: "Which principle states that software entities should be open for extension but closed for modification?", options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation"], correct: 1 },
                    { question: "What is polymorphism in OOP?", options: ["Having multiple constructors", "Ability to take multiple forms", "Inheriting from multiple classes", "Creating multiple objects"], correct: 1 },

                    { question: "Which sorting algorithm has the best average time complexity?", options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"], correct: 2 },
                    { question: "What is a closure in JavaScript?", options: ["A function with access to outer scope", "A closed loop", "An error handling mechanism", "A type of variable"], correct: 0 },
                    { question: "Which database type is MongoDB?", options: ["Relational", "NoSQL", "Graph", "Columnar"], correct: 1 },
                    { question: "What does CRUD stand for?", options: ["Create Read Update Delete", "Control Read Update Deploy", "Create Retrieve Update Deploy", "Control Retrieve Update Delete"], correct: 0 },
                    { question: "Which Git command is used to merge branches?", options: ["git merge", "git combine", "git join", "git unite"], correct: 0 },
                    { question: "What is the difference between == and === in JavaScript?", options: ["No difference", "=== checks type and value", "== is faster", "=== is deprecated"], correct: 1 },
                    { question: "Which HTTP status code indicates 'Not Found'?", options: ["400", "401", "403", "404"], correct: 3 },
                    { question: "What is dependency injection?", options: ["Adding dependencies to code", "Removing dependencies", "Providing dependencies from outside", "Creating new dependencies"], correct: 2 },
                    { question: "Which JavaScript feature allows asynchronous programming?", options: ["Callbacks", "Promises", "Async/Await", "All of the above"], correct: 3 },
                    { question: "What is the purpose of a hash able?", options: ["Sorting data", "Fast key-value lookup", "Memory management", "Error handling"], correct: 1 },
                    { question: "Which CSS methodology promotes component-based styling?", options: ["BEM", "OOCSS", "SMACSS", "Atomic CSS"], correct: 0 },
                    { question: "What is the difference between SQL and NoSQL databases?", options: ["SQL is faster", "NoSQL is newer", "SQL uses structured data, NoSQL is flexible", "No difference"], correct: 2 },
                    { question: "Which design pattern is used to create objects without specifying their exact class?", options: ["Singleton", "Factory", "Observer", "Strategy"], correct: 1 },
                    { question: "What is the purpose of unit testing?", options: ["Testing individual components", "Testing the entire system", "Performance testing", "Security testing"], correct: 0 },
                    { question: "Which principle suggests that high-level modules should not depend on low-level modules?", options: ["Single Responsibility", "Open/Closed", "Dependency Inversion", "Interface Segregation"], correct: 2 },
                    { question: "What is the main advantage of microservices architecture?", options: ["Faster development", "Better scalability", "Easier deployment", "All of the above"], correct: 3 },

                    // Web Development (25)
                    { question: "Which HTML5 element is used for navigation links?", options: ["<navigation>", "<nav>", "<menu>", "<links>"], correct: 1 },
                    { question: "What is the box model in CSS?", options: ["A design pattern", "Content, padding, border, margin", "A layout technique", "A CSS framework"], correct: 1 },
                    { question: "Which CSS property is used for responsive design?", options: ["@media", "@responsive", "@screen", "@device"], correct: 0 },
                    { question: "What is the virtual DOM in React?", options: ["A real DOM copy", "A JavaScript representation of DOM", "A server-side DOM", "A mobile DOM"], correct: 1 },
                    { question: "Which HTTP header is used for CORS?", options: ["Access-Control-Allow-Origin", "Cross-Origin-Resource-Sharing", "Allow-Cross-Origin", "CORS-Allow-Origin"], correct: 0 },
                    { question: "What is webpack used for?", options: ["Testing", "Module bundling", "Database management", "Server hosting"], correct: 1 },
                    { question: "Which CSS framework is known for utility-first approach?", options: ["Bootstrap", "Foundation", "Tailwind CSS", "Bulma"], correct: 2 },
                    { question: "What is the purpose of a CDN?", options: ["Content Delivery Network", "Code Development Network", "Central Data Network", "Cloud Distribution Network"], correct: 0 },
                    { question: "Which JavaScript framework is maintained by Google?", options: ["React", "Vue", "Angular", "Ember"], correct: 2 },
                    { question: "What is Progressive Web App (PWA)?", options: ["A mobile app", "A web app with native features", "A desktop app", "A server application"], correct: 1 },
                    { question: "Which CSS property creates animations?", options: ["@keyframes", "animation", "transition", "All of the above"], correct: 3 },
                    { question: "What is the purpose of Babel in JavaScript?", options: ["Testing", "Transpiling", "Bundling", "Minifying"], correct: 1 },
                    { question: "Which HTML attribute makes an input field required?", options: ["mandatory", "required", "necessary", "validate"], correct: 1 },
                    { question: "What is the difference between localStorage and sessionStorage?", options: ["No difference", "localStorage persists, sessionStorage doesn't", "sessionStorage is faster", "localStorage is newer"], correct: 1 },
                    { question: "Which CSS property controls element positioning?", options: ["position", "location", "place", "set"], correct: 0 },
                    { question: "What is Server-Side Rendering (SSR)?", options: ["Rendering on client", "Rendering on server", "Rendering on CDN", "Rendering on database"], correct: 1 },
                    { question: "Which tool is used for CSS preprocessing?", options: ["Sass", "Less", "Stylus", "All of the above"], correct: 3 },
                    { question: "What is the purpose of a service worker?", options: ["Server management", "Background processing", "Database queries", "File uploads"], correct: 1 },
                    { question: "Which HTTP method is idempotent?", options: ["POST", "GET", "PATCH", "All methods"], correct: 1 },
                    { question: "What is the shadow DOM?", options: ["A hidden DOM", "Encapsulated DOM tree", "Server DOM", "Mobile DOM"], correct: 1 },
                    { question: "Which CSS unit is relative to the viewport width?", options: ["px", "em", "vw", "rem"], correct: 2 },
                    { question: "What is the purpose of ESLint?", options: ["Code formatting", "Code linting", "Code compilation", "Code minification"], correct: 1 },
                    { question: "Which JavaScript method prevents the default behavior of an event?", options: ["stopPropagation()", "preventDefault()", "stopDefault()", "preventBubbling()"], correct: 1 },
                    { question: "What is the difference between margin and padding in CSS?", options: ["No difference", "Margin is outside, padding is inside", "Padding is outside, margin is inside", "Margin is for text, padding is for images"], correct: 1 },
                    { question: "Which HTML5 API is used for offline storage?", options: ["Web Storage", "IndexedDB", "Web SQL", "All of the above"], correct: 3 },

                    // Programming Languages & Tools (25)
                    { question: "Which company developed Java?", options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"], correct: 1 },
                    { question: "What is the main philosophy of Python?", options: ["Speed", "Readability", "Complexity", "Security"], correct: 1 },
                    { question: "Which language is known for its use in data science?", options: ["JavaScript", "C++", "Python", "PHP"], correct: 2 },
                    { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Version Manager", "Java Visual Model"], correct: 0 },
                    { question: "Which language is primarily used for iOS development?", options: ["Java", "Swift", "Kotlin", "C#"], correct: 1 },
                    { question: "What is the latest version of JavaScript called?", options: ["ES6", "ES2015", "ES2020", "ECMAScript"], correct: 3 },
                    { question: "Which database query language is most common?", options: ["SQL", "NoSQL", "GraphQL", "MongoDB"], correct: 0 },
                    { question: "What is Docker used for?", options: ["Containerization", "Version control", "Code editing", "Testing"], correct: 0 },
                    { question: "Which tool is used for version control?", options: ["Git", "SVN", "Mercurial", "All of the above"], correct: 3 },

                    { question: "What is the purpose of npm?", options: ["Node Package Manager", "New Project Manager", "Network Protocol Manager", "Native Program Manager"], correct: 0 },
                    { question: "Which language compiles to JavaScript?", options: ["TypeScript", "CoffeeScript", "Dart", "All of the above"], correct: 3 },
                    { question: "What is Kubernetes used for?", options: ["Container orchestration", "Database management", "Code compilation", "Web hosting"], correct: 0 },
                    { question: "Which IDE is popular for Java development?", options: ["Visual Studio Code", "IntelliJ IDEA", "Sublime Text", "Atom"], correct: 1 },
                    { question: "What is the purpose of Redis?", options: ["In-memory data store", "Web server", "Code editor", "Version control"], correct: 0 },
                    { question: "Which language is used for Android development?", options: ["Swift", "Objective-C", "Kotlin", "C#"], correct: 2 },
                    { question: "What is GraphQL?", options: ["A database", "A query language for APIs", "A web framework", "A programming language"], correct: 1 },
                    { question: "Which tool is used for continuous integration?", options: ["Jenkins", "Travis CI", "CircleCI", "All of the above"], correct: 3 },
                    { question: "What is the purpose of Postman?", options: ["API testing", "Code editing", "Database management", "Web hosting"], correct: 0 },
                    { question: "Which language is known for its performance in system programming?", options: ["Python", "JavaScript", "C++", "Ruby"], correct: 2 },

                    { question: "What is the purpose of Vagrant?", options: ["Virtual machine management", "Code compilation", "Database hosting", "Web development"], correct: 0 },
                    { question: "Which framework is used for machine learning in Python?", options: ["Django", "Flask", "TensorFlow", "Pyramid"], correct: 2 },
                    { question: "What is the purpose of Selenium?", options: ["Web automation testing", "Database testing", "API testing", "Performance testing"], correct: 0 },
                    { question: "Which language is primarily functional?", options: ["Java", "C++", "Haskell", "Python"], correct: 2 },
                    { question: "What is the purpose of Apache Kafka?", options: ["Web server", "Message streaming", "Database", "Code editor"], correct: 1 },

                    { question: "Which tool is used for monitoring applications?", options: ["New Relic", "Datadog", "Prometheus", "All of the above"], correct: 3 }
                ]
            },
            movies: {
                title: "🎬 Movies & TV Quiz",
                questions: [
                    // Classic Movies (25)
                    { question: "Who directed the movie 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"], correct: 1 },
                    { question: "Which movie won the Academy Award for Best Picture in 1994?", options: ["Forrest Gump", "The Shawshank Redemption", "Pulp Fiction", "The Lion King"], correct: 0 },
                    { question: "Who played the character of Jack Dawson in 'Titanic'?", options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"], correct: 1 },
                    { question: "In which year was 'The Godfather' released?", options: ["1970", "1971", "1972", "1973"], correct: 2 },
                    { question: "Who directed 'Pulp Fiction'?", options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Francis Ford Coppola"], correct: 1 },
                    { question: "Which actor played Forrest Gump?", options: ["Tom Hanks", "Robin Williams", "Kevin Costner", "Harrison Ford"], correct: 0 },
                    { question: "What is the highest-grossing film of all time (as of 2023)?", options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"], correct: 2 },
                    { question: "Who composed the music for 'Star Wars'?", options: ["Hans Zimmer", "John Williams", "Danny Elfman", "Alan Silvestri"], correct: 1 },
                    { question: "In 'The Matrix', what color pill does Neo take?", options: ["Blue", "Red", "Green", "Yellow"], correct: 1 },
                    { question: "Who played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Joaquin Phoenix", "Heath Ledger", "Jared Leto"], correct: 2 },
                    { question: "Which movie features the quote 'May the Force be with you'?", options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"], correct: 1 },
                    { question: "Who directed 'Jaws'?", options: ["George Lucas", "Steven Spielberg", "Ridley Scott", "James Cameron"], correct: 1 },
                    { question: "In 'Casablanca', what is the name of Humphrey Bogart's character?", options: ["Sam Spade", "Rick Blaine", "Philip Marlowe", "Harry Callahan"], correct: 1 },
                    { question: "Which movie won the first Academy Award for Best Picture?", options: ["Wings", "Sunrise", "The Jazz Singer", "7th Heaven"], correct: 0 },
                    { question: "Who played Dorothy in 'The Wizard of Oz'?", options: ["Judy Garland", "Shirley Temple", "Ginger Rogers", "Katharine Hepburn"], correct: 0 },
                    { question: "In which movie does Tom Hanks say 'Houston, we have a problem'?", options: ["Forrest Gump", "Cast Away", "Apollo 13", "Philadelphia"], correct: 2 },
                    { question: "Who directed 'Citizen Kane'?", options: ["Alfred Hitchcock", "Orson Welles", "John Ford", "Howard Hawks"], correct: 1 },
                    { question: "Which movie features the character Vito Corleone?", options: ["Goodfellas", "The Godfather", "Scarface", "Casino"], correct: 1 },
                    { question: "Who played the lead role in 'Taxi Driver'?", options: ["Al Pacino", "Robert De Niro", "Jack Nicholson", "Dustin Hoffman"], correct: 1 },
                    { question: "In 'Gone with the Wind', what is Scarlett O'Hara's plantation called?", options: ["Twelve Oaks", "Tara", "Ashley Wilkes", "Peachtree"], correct: 1 },
                    { question: "Who directed 'Psycho'?", options: ["Alfred Hitchcock", "Billy Wilder", "John Huston", "William Wyler"], correct: 0 },
                    { question: "Which movie features the song 'Singin' in the Rain'?", options: ["An American in Paris", "Singin' in the Rain", "On the Town", "Anchors Aweigh"], correct: 1 },
                    { question: "Who played the title character in 'Lawrence of Arabia'?", options: ["Richard Burton", "Peter O'Toole", "Omar Sharif", "Alec Guinness"], correct: 1 },
                    { question: "In 'Some Like It Hot', who are the two main male characters?", options: ["Tony Curtis and Jack Lemmon", "Cary Grant and James Stewart", "Clark Gable and Spencer Tracy", "Humphrey Bogart and James Cagney"], correct: 0 },
                    { question: "Who directed '2001: A Space Odyssey'?", options: ["George Lucas", "Ridley Scott", "Stanley Kubrick", "Steven Spielberg"], correct: 2 },

                    // Modern Movies (25)
                    { question: "Which actor played Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1 },
                    { question: "Who directed 'The Lord of the Rings' trilogy?", options: ["George Lucas", "Peter Jackson", "Ridley Scott", "James Cameron"], correct: 1 },
                    { question: "In 'Finding Nemo', what type of fish is Nemo?", options: ["Angelfish", "Clownfish", "Goldfish", "Pufferfish"], correct: 1 },
                    { question: "Who played Hermione Granger in the Harry Potter films?", options: ["Emma Stone", "Emma Watson", "Emma Roberts", "Emily Blunt"], correct: 1 },
                    { question: "Which movie features the character John Wick?", options: ["Taken", "The Equalizer", "John Wick", "Nobody"], correct: 2 },
                    { question: "Who directed 'Mad Max: Fury Road'?", options: ["George Miller", "Ridley Scott", "James Cameron", "Denis Villeneuve"], correct: 0 },
                    { question: "In 'The Hunger Games', what is Katniss Everdeen's weapon of choice?", options: ["Sword", "Bow and arrow", "Spear", "Knife"], correct: 1 },
                    { question: "Who played the Genie in the 2019 live-action 'Aladdin'?", options: ["Dwayne Johnson", "Will Smith", "Kevin Hart", "Eddie Murphy"], correct: 1 },
                    { question: "Which movie won the Academy Award for Best Picture in 2020?", options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"], correct: 2 },
                    { question: "Who directed 'Get Out'?", options: ["Jordan Peele", "Ari Aster", "Robert Eggers", "Nia DaCosta"], correct: 0 },
                    { question: "In 'Black Panther', what is the name of Wakanda's capital city?", options: ["Birnin Zana", "Golden City", "Wakanda City", "Panther City"], correct: 0 },
                    { question: "Who played the lead role in 'La La Land'?", options: ["Ryan Gosling", "Emma Stone", "Both Ryan Gosling and Emma Stone", "Neither"], correct: 2 },
                    { question: "Which movie features the quote 'I am inevitable'?", options: ["Avengers: Infinity War", "Avengers: Endgame", "Thor: Ragnarok", "Guardians of the Galaxy"], correct: 1 },
                    { question: "Who directed 'Dunkirk'?", options: ["Steven Spielberg", "Christopher Nolan", "Ridley Scott", "Sam Mendes"], correct: 1 },
                    { question: "In 'Frozen', what is the name of the snowman?", options: ["Olaf", "Sven", "Kristoff", "Hans"], correct: 0 },
                    { question: "Who played the Joker in 'Joker' (2019)?", options: ["Heath Ledger", "Jared Leto", "Joaquin Phoenix", "Jack Nicholson"], correct: 2 },
                    { question: "Which movie features the character Rey?", options: ["Star Trek", "Star Wars: The Force Awakens", "Guardians of the Galaxy", "Interstellar"], correct: 1 },
                    { question: "Who directed 'Blade Runner 2049'?", options: ["Ridley Scott", "Denis Villeneuve", "Christopher Nolan", "James Cameron"], correct: 1 },
                    { question: "In 'Spider-Man: Into the Spider-Verse', who is the main character?", options: ["Peter Parker", "Miles Morales", "Gwen Stacy", "Spider-Man Noir"], correct: 1 },
                    { question: "Who played Thanos in the Marvel Cinematic Universe?", options: ["James Brolin", "Josh Brolin", "Javier Bardem", "Oscar Isaac"], correct: 1 },
                    { question: "Which movie won the Academy Award for Best Picture in 2017?", options: ["La La Land", "Moonlight", "Manchester by the Sea", "Arrival"], correct: 1 },
                    { question: "Who directed 'The Shape of Water'?", options: ["Guillermo del Toro", "Alfonso Cuarón", "Alejandro G. Iñárritu", "Denis Villeneuve"], correct: 0 },
                    { question: "In 'Wonder Woman', what is Diana's homeland called?", options: ["Atlantis", "Themyscira", "Amazonia", "Paradise Island"], correct: 1 },
                    { question: "Who played the lead role in 'Bohemian Rhapsody'?", options: ["Taron Egerton", "Rami Malek", "Eddie Redmayne", "Benedict Cumberbatch"], correct: 1 },
                    { question: "Which movie features the character Groot?", options: ["Thor", "Guardians of the Galaxy", "Doctor Strange", "Ant-Man"], correct: 1 },

                    // TV Shows (25)
                    { question: "Which TV series features the character Walter White?", options: ["The Sopranos", "Breaking Bad", "Better Call Saul", "Dexter"], correct: 1 },
                    { question: "In 'Friends', what is the name of Ross's pet monkey?", options: ["Marcel", "Gunther", "Janice", "Phoebe"], correct: 0 },
                    { question: "Who created the TV series 'The Simpsons'?", options: ["Seth MacFarlane", "Matt Groening", "Trey Parker", "Mike Judge"], correct: 1 },
                    { question: "In 'Game of Thrones', what is the name of Jon Snow's direwolf?", options: ["Ghost", "Grey Wind", "Lady", "Nymeria"], correct: 0 },
                    { question: "Which TV show features the character Tyrion Lannister?", options: ["The Witcher", "Game of Thrones", "Vikings", "The Last Kingdom"], correct: 1 },
                    { question: "In 'The Office' (US), who plays Jim Halpert?", options: ["Steve Carell", "John Krasinski", "Rainn Wilson", "Ed Helms"], correct: 1 },
                    { question: "Which TV series is set in the fictional town of Hawkins?", options: ["Stranger Things", "Twin Peaks", "Riverdale", "Dark"], correct: 0 },
                    { question: "In 'How I Met Your Mother', what is Barney's catchphrase?", options: ["Legendary!", "Suit up!", "Legen... wait for it... dary!", "All of the above"], correct: 3 },
                    { question: "Who plays Sherlock Holmes in the BBC series 'Sherlock'?", options: ["Martin Freeman", "Benedict Cumberbatch", "Robert Downey Jr.", "Jonny Lee Miller"], correct: 1 },
                    { question: "In 'The Big Bang Theory', what is Sheldon's favorite number?", options: ["42", "73", "88", "144"], correct: 1 },
                    { question: "Which TV show features the character Daenerys Targaryen?", options: ["The Witcher", "Game of Thrones", "Vikings", "Outlander"], correct: 1 },
                    { question: "In 'Parks and Recreation', who plays Leslie Knope?", options: ["Tina Fey", "Amy Poehler", "Mindy Kaling", "Rashida Jones"], correct: 1 },
                    { question: "Which TV series features the character Eleven?", options: ["Stranger Things", "Dark", "The OA", "Westworld"], correct: 0 },
                    { question: "In 'Brooklyn Nine-Nine', who plays Jake Peralta?", options: ["Andy Samberg", "Joe Lo Truglio", "Terry Crews", "Andre Braugher"], correct: 0 },
                    { question: "Which TV show is known for the phrase 'Winter is coming'?", options: ["Vikings", "Game of Thrones", "The Last Kingdom", "Outlander"], correct: 1 },

                    { question: "In 'The Crown', who plays Queen Elizabeth II in the first two seasons?", options: ["Claire Foy", "Olivia Colman", "Helena Bonham Carter", "Vanessa Kirby"], correct: 0 },
                    { question: "Which TV series features the character Rick Grimes?", options: ["Fear the Walking Dead", "The Walking Dead", "Z Nation", "Black Summer"], correct: 1 },
                    { question: "In 'Seinfeld', what is Kramer's first name?", options: ["Cosmo", "Newman", "George", "Jerry"], correct: 0 },
                    { question: "Which TV show features the character Tony Soprano?", options: ["The Sopranos", "Boardwalk Empire", "Goodfellas", "The Godfather"], correct: 0 },
                    { question: "In 'Lost', what is the name of the island's smoke monster?", options: ["The Man in Black", "Jacob", "Ben", "Locke"], correct: 0 },
                    { question: "Which TV series is set in the 1980s and features supernatural elements?", options: ["Stranger Things", "Dark", "The OA", "Mindhunter"], correct: 0 },
                    { question: "In 'Mad Men', who plays Don Draper?", options: ["Jon Hamm", "John Slattery", "Vincent Kartheiser", "Bryan Batt"], correct: 0 },
                    { question: "Which TV show features the character Tyrion Lannister?", options: ["The Witcher", "Game of Thrones", "Vikings", "Rome"], correct: 1 },
                    { question: "In 'House of Cards', who plays Frank Underwood?", options: ["Kevin Spacey", "Robin Wright", "Michael Kelly", "Mahershala Ali"], correct: 0 },
                    { question: "Which TV series features the character Saul Goodman?", options: ["Breaking Bad", "Better Call Saul", "Both Breaking Bad and Better Call Saul", "Neither"], correct: 2 },

                    // Animation & Family (25)
                    { question: "In 'Toy Story', what is the name of the cowboy toy?", options: ["Buzz", "Woody", "Rex", "Slinky"], correct: 1 },
                    { question: "Which Disney movie features the song 'Let It Go'?", options: ["Moana", "Frozen", "Tangled", "Brave"], correct: 1 },
                    { question: "In 'The Lion King', who is Simba's father?", options: ["Scar", "Mufasa", "Timon", "Pumbaa"], correct: 1 },
                    { question: "Which Pixar movie features a robot left alone on Earth?", options: ["WALL-E", "Up", "Inside Out", "Coco"], correct: 0 },
                    { question: "In 'Finding Nemo', what happened to Nemo's mother?", options: ["She got lost", "She was eaten by a barracuda", "She moved away", "She's still alive"], correct: 1 },
                    { question: "Which Disney princess has the longest hair?", options: ["Rapunzel", "Ariel", "Belle", "Jasmine"], correct: 0 },
                    { question: "In 'Monsters, Inc.', what is the name of the blue monster?", options: ["Mike", "Sulley", "Randall", "Boo"], correct: 1 },
                    { question: "Which movie features the character Elsa?", options: ["Tangled", "Frozen", "Moana", "Brave"], correct: 1 },
                    { question: "In 'The Incredibles', what is Mr. Incredible's real name?", options: ["Bob Parr", "Robert Parr", "Both Bob and Robert Parr", "Neither"], correct: 2 },
                    { question: "Which Disney movie is based on a Shakespeare play?", options: ["The Lion King", "Beauty and the Beast", "Aladdin", "The Little Mermaid"], correct: 0 },
                    { question: "In 'Up', what is the name of the talking dog?", options: ["Dug", "Doug", "Duke", "Dude"], correct: 0 },
                    { question: "Which movie features the character Baymax?", options: ["Big Hero 6", "Wreck-It Ralph", "Zootopia", "Moana"], correct: 0 },
                    { question: "In 'Coco', what is Miguel's dream?", options: ["To be a chef", "To be a musician", "To be an artist", "To be a dancer"], correct: 1 },
                    { question: "Which Disney villain turns into a dragon?", options: ["Jafar", "Maleficent", "Ursula", "Scar"], correct: 1 },
                    { question: "In 'Moana', what is the name of Moana's pet pig?", options: ["Pua", "Heihei", "Maui", "Tala"], correct: 0 },
                    { question: "Which movie features the character Olaf?", options: ["Tangled", "Frozen", "Brave", "Moana"], correct: 1 },
                    { question: "In 'Zootopia', what is Judy Hopps' profession?", options: ["Police officer", "Detective", "Mayor", "Lawyer"], correct: 0 },
                    { question: "Which Pixar movie is about emotions?", options: ["Inside Out", "Soul", "Onward", "Luca"], correct: 0 },
                    { question: "In 'The Princess and the Frog', what is Tiana's dream?", options: ["To be a princess", "To own a restaurant", "To travel the world", "To be a singer"], correct: 1 },
                    { question: "Which movie features the character Maui?", options: ["Moana", "Coco", "Encanto", "Raya and the Last Dragon"], correct: 0 },
                    { question: "In 'Brave', what is Merida's weapon of choice?", options: ["Sword", "Bow and arrow", "Magic", "Spear"], correct: 1 },
                    { question: "Which Disney movie features a genie?", options: ["Aladdin", "The Princess and the Frog", "Tangled", "Moana"], correct: 0 },
                    { question: "In 'Ratatouille', what is the rat's name?", options: ["Remy", "Linguini", "Skinner", "Colette"], correct: 0 },
                    { question: "Which movie features the character Hector?", options: ["Coco", "Onward", "Soul", "Luca"], correct: 0 },
                    { question: "In 'Encanto', what is Mirabel's gift?", options: ["Super strength", "Healing", "She doesn't have one", "Shapeshifting"], correct: 2 }
                ]
            },
            science: {
                title: "🔬 Science Quiz",

                questions: [
                    // Physics (25)
                    { question: "What is the speed of light in vacuum?", options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"], correct: 0 },
                    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], correct: 1 },
                    { question: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], correct: 2 },
                    { question: "Which law states that energy cannot be created or destroyed?", options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"], correct: 1 },
                    { question: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "9.6 m/s²", "8.9 m/s²"], correct: 0 },
                    { question: "Who discovered the electron?", options: ["Ernest Rutherford", "J.J. Thomson", "Niels Bohr", "Marie Curie"], correct: 1 },
                    { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], correct: 1 },
                    { question: "Which particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Ion"], correct: 2 },
                    { question: "What is the formula for kinetic energy?", options: ["½mv²", "mgh", "F=ma", "E=mc²"], correct: 0 },
                    { question: "Who formulated the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"], correct: 1 },
                    { question: "What is the unit of frequency?", options: ["Hertz", "Decibel", "Watt", "Joule"], correct: 0 },

                    { question: "Which type of wave requires a medium to travel?", options: ["Light wave", "Radio wave", "Sound wave", "X-ray"], correct: 2 },
                    { question: "What is absolute zero in Celsius?", options: ["-273.15°C", "-273°C", "-270°C", "-300°C"], correct: 0 },
                    { question: "Who discovered radioactivity?", options: ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "Pierre Curie"], correct: 1 },
                    { question: "What is the SI unit of power?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 2 },
                    { question: "Which law relates voltage, current, and resistance?", options: ["Newton's Law", "Ohm's Law", "Faraday's Law", "Coulomb's Law"], correct: 1 },
                    { question: "What is the mass of an electron compared to a proton?", options: ["Equal", "1/1836", "1836 times", "1/2"], correct: 1 },
                    { question: "Who proposed the uncertainty principle?", options: ["Werner Heisenberg", "Erwin Schrödinger", "Max Planck", "Niels Bohr"], correct: 0 },
                    { question: "What is the unit of magnetic field strength?", options: ["Tesla", "Weber", "Henry", "Gauss"], correct: 0 },
                    { question: "Which phenomenon explains why the sky is blue?", options: ["Reflection", "Refraction", "Scattering", "Absorption"], correct: 2 },
                    { question: "What is the escape velocity from Earth?", options: ["11.2 km/s", "9.8 km/s", "15.5 km/s", "7.9 km/s"], correct: 0 },
                    { question: "Who discovered the photoelectric effect?", options: ["Albert Einstein", "Max Planck", "Heinrich Hertz", "Philipp Lenard"], correct: 2 },
                    { question: "What is the SI unit of energy?", options: ["Watt", "Newton", "Joule", "Pascal"], correct: 2 },
                    { question: "Which law describes the relationship between pressure and volume of a gas?", options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"], correct: 1 },
                    { question: "What is the half-life of carbon-14?", options: ["5,730 years", "1,000 years", "10,000 years", "50,000 years"], correct: 0 },

                    // Chemistry (25)
                    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
                    { question: "What is the atomic number of carbon?", options: ["4", "6", "8", "12"], correct: 1 },
                    { question: "Which gas makes up about 78% of Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2 },
                    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "CH4"], correct: 0 },
                    { question: "Who created the periodic table?", options: ["Marie Curie", "Dmitri Mendeleev", "Antoine Lavoisier", "John Dalton"], correct: 1 },
                    { question: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correct: 2 },
                    { question: "Which element has the symbol 'Fe'?", options: ["Fluorine", "Iron", "Francium", "Fermium"], correct: 1 },
                    { question: "What is the pH of pure water?", options: ["6", "7", "8", "9"], correct: 1 },
                    { question: "Which gas is produced when metals react with acids?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"], correct: 2 },
                    { question: "What is the chemical symbol for sodium?", options: ["So", "Sd", "Na", "S"], correct: 2 },
                    { question: "Which element is essential for photosynthesis?", options: ["Carbon", "Oxygen", "Nitrogen", "Magnesium"], correct: 3 },
                    { question: "What is the hardest natural substance?", options: ["Graphite", "Diamond", "Quartz", "Steel"], correct: 1 },
                    { question: "Which acid is found in vinegar?", options: ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Nitric acid"], correct: 2 },
                    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], correct: 0 },
                    { question: "Which element has the highest electronegativity?", options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], correct: 1 },
                    { question: "What is the process of a solid turning directly into a gas?", options: ["Melting", "Evaporation", "Sublimation", "Condensation"], correct: 2 },
                    { question: "Which gas is known as laughing gas?", options: ["Nitrous oxide", "Carbon monoxide", "Sulfur dioxide", "Ammonia"], correct: 0 },
                    { question: "What is the chemical symbol for potassium?", options: ["P", "Po", "K", "Pt"], correct: 2 },
                    { question: "Which type of bond involves sharing electrons?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correct: 1 },
                    { question: "What is the molecular formula for glucose?", options: ["C6H12O6", "C12H22O11", "C2H6O", "CH4"], correct: 0 },
                    { question: "Which element is used in pencils?", options: ["Lead", "Carbon", "Silicon", "Tin"], correct: 1 },
                    { question: "What is the chemical name for rust?", options: ["Iron oxide", "Iron sulfide", "Iron carbonate", "Iron chloride"], correct: 0 },
                    { question: "Which gas is essential for combustion?", options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"], correct: 2 },
                    { question: "What is the atomic number of oxygen?", options: ["6", "7", "8", "9"], correct: 2 },
                    { question: "Which acid is produced in the stomach?", options: ["Sulfuric acid", "Hydrochloric acid", "Acetic acid", "Citric acid"], correct: 1 },

                    // Biology (25)

                    { question: "How many bones are there in an adult human body?", options: ["206", "208", "210", "212"], correct: 0 },
                    { question: "What is the largest organ in the human body?", options: ["Brain", "Liver", "Lungs", "Skin"], correct: 3 },
                    { question: "Which blood type is known as the universal donor?", options: ["A", "B", "AB", "O"], correct: 3 },
                    { question: "How many chambers does a human heart have?", options: ["2", "3", "4", "5"], correct: 2 },
                    { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correct: 1 },
                    { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correct: 1 },

                    { question: "How many chromosomes do humans have?", options: ["44", "46", "48", "50"], correct: 1 },
                    { question: "Which organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], correct: 2 },
                    { question: "What is the study of heredity called?", options: ["Biology", "Genetics", "Anatomy", "Physiology"], correct: 1 },
                    { question: "How many teeth does an adult human typically have?", options: ["28", "30", "32", "34"], correct: 2 },
                    { question: "Which scientist proposed the theory of evolution?", options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alexander Fleming"], correct: 1 },
                    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"], correct: 1 },
                    { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correct: 2 },
                    { question: "What is the longest bone in the human body?", options: ["Tibia", "Fibula", "Femur", "Humerus"], correct: 2 },
                    { question: "Which gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2 },
                    { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], correct: 2 },
                    { question: "Which part of the eye controls the amount of light entering?", options: ["Cornea", "Lens", "Iris", "Retina"], correct: 2 },

                    { question: "What is the gestation period of a human pregnancy?", options: ["8 months", "9 months", "10 months", "11 months"], correct: 1 },
                    { question: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Venules"], correct: 1 },
                    { question: "What is the scientific name for humans?", options: ["Homo erectus", "Homo sapiens", "Homo habilis", "Homo neanderthalensis"], correct: 1 },
                    { question: "Which organ filters blood in the human body?", options: ["Liver", "Lungs", "Kidneys", "Spleen"], correct: 2 },
                    { question: "What is the largest mammal in the world?", options: ["African elephant", "Blue whale", "Giraffe", "Polar bear"], correct: 1 },

                    { question: "Which part of the plant conducts photosynthesis?", options: ["Roots", "Stem", "Leaves", "Flowers"], correct: 2 },
                    { question: "What is the normal human body temperature in Celsius?", options: ["36°C", "37°C", "38°C", "39°C"], correct: 1 },
                    { question: "Which hormone regulates blood sugar levels?", options: ["Adrenaline", "Insulin", "Thyroxine", "Cortisol"], correct: 1 },

                    // Earth Science & Astronomy (25)
                    { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], correct: 2 },
                    { question: "What causes tides on Earth?", options: ["Wind", "Earth's rotation", "Moon's gravity", "Sun's heat"], correct: 2 },
                    { question: "Which layer of the atmosphere contains the ozone layer?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correct: 1 },
                    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2 },
                    { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
                    { question: "What is the study of earthquakes called?", options: ["Geology", "Seismology", "Meteorology", "Volcanology"], correct: 1 },
                    { question: "Which scale is used to measure earthquake intensity?", options: ["Richter scale", "Beaufort scale", "Kelvin scale", "pH scale"], correct: 0 },

                    { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 1 },
                    { question: "Which type of rock is formed by cooling magma?", options: ["Sedimentary", "Metamorphic", "Igneous", "Composite"], correct: 2 },
                    { question: "What is the center of our solar system?", options: ["Earth", "Jupiter", "The Sun", "The Moon"], correct: 2 },
                    { question: "Which planet is known for its rings?", options: ["Jupiter", "Saturn", "Uranus", "All of the above"], correct: 3 },
                    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
                    { question: "Which layer of Earth is liquid?", options: ["Crust", "Mantle", "Outer core", "Inner core"], correct: 2 },
                    { question: "What causes seasons on Earth?", options: ["Distance from Sun", "Earth's tilt", "Solar flares", "Moon phases"], correct: 1 },
                    { question: "Which constellation contains the North Star?", options: ["Ursa Major", "Ursa Minor", "Orion", "Cassiopeia"], correct: 1 },
                    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Pluto"], correct: 0 },
                    { question: "Which gas is most responsible for global warming?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"], correct: 2 },
                    { question: "What is the age of the Earth approximately?", options: ["4.6 million years", "4.6 billion years", "46 billion years", "460 million years"], correct: 1 },
                    { question: "Which planet rotates on its side?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 2 },
                    { question: "What is the boundary between two tectonic plates called?", options: ["Fault line", "Plate boundary", "Seismic zone", "All of the above"], correct: 3 },
                    { question: "Which moon phase occurs when the Moon is between Earth and the Sun?", options: ["Full moon", "New moon", "First quarter", "Last quarter"], correct: 1 },
                    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
                    { question: "Which planet has a day longer than its year?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },

                    { question: "What is the main component of the Sun?", options: ["Helium", "Hydrogen", "Carbon", "Oxygen"], correct: 1 },
                    { question: "Which type of eclipse occurs when the Moon blocks the Sun?", options: ["Lunar eclipse", "Solar eclipse", "Planetary eclipse", "Stellar eclipse"], correct: 1 }
                ]
            }
        };

        // Game state
        let currentQuiz = null;
        let currentQuestionIndex = 0;
        let score = 0;
        let selectedAnswer = null;
        let currentUser = null;

        // Initialize the app

        document.addEventListener('DOMContentLoaded', function() {
            loadUser();
            updateLeaderboard();
        });

        // Tab navigation
        function showTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all nav tabs
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            
            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked nav tab
            event.target.classList.add('active');

            // Update leaderboard when switching to it
            if (tabName === 'leaderboard') {
                updateLeaderboard();
            }
        }

        // Start quiz
        function startQuiz(category) {
            currentQuiz = quizData[category];
            currentQuestionIndex = 0;
            score = 0;

            selectedAnswer = null;

            document.getElementById('categories-view').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            document.getElementById('results-container').style.display = 'none';

            document.getElementById('quiz-title').textContent = currentQuiz.title;
            document.getElementById('total-questions').textContent = currentQuiz.questions.length;

            showQuestion();
        }

        // Show current question
        function showQuestion() {

            const question = currentQuiz.questions[currentQuestionIndex];
            
            document.getElementById('current-question').textContent = currentQuestionIndex + 1;
            document.getElementById('question-text').textContent = question.question;
            
            // Update progress bar
            const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
            document.getElementById('progress-bar').style.width = progress + '%';

            // Create options
            const optionsContainer = 

document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.onclick = () => selectAnswer(index);
                optionsContainer.appendChild(optionElement);
            });

            selectedAnswer = null;
            document.getElementById('next-btn').disabled = true;
            document.getElementById('next-btn').textContent = 
                currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question →';
        }

        // Select answer
        function selectAnswer(index) {
            selectedAnswer = index;
            
            // Remove previous selections
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selection to clicked option

            document.querySelectorAll('.option')[index].classList.add('selected');
            
            document.getElementById('next-btn').disabled = false;
        }

        // Next question or finish quiz
        function nextQuestion() {
            if (selectedAnswer === null) return;

            const question = currentQuiz.questions[currentQuestionIndex];
            const isCorrect = selectedAnswer === question.correct;
            
            if (isCorrect) {
                score++;
            }

            // Show correct/incorrect answers
            document.querySelectorAll('.option').forEach((option, index) => {
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === selectedAnswer && !isCorrect) {
                    option.classList.add('incorrect');
                }
            });

            // Wait a moment to show the results, then proceed
            setTimeout(() => {
                currentQuestionIndex++;
                
                if (currentQuestionIndex < currentQuiz.questions.length) {
                    showQuestion();
                } else {

                    showResults();
                }
            }, 1500);
        }

        // Show quiz results
        function showResults() {
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('results-container').style.display = 'block';

            const percentage = Math.round((score / currentQuiz.questions.length) * 100);
            const scoreAngle = (percentage / 100) * 360;

            document.getElementById('score-circle').style.setProperty('--score-angle', scoreAngle + 'deg');

            document.getElementById('score-percentage').textContent = percentage + '%';
            document.getElementById('final-score').textContent = score;
            document.getElementById('final-total').textContent = currentQuiz.questions.length;

            // Performance message
            let message = '';
            if (percentage >= 90) message = 'Outstanding! You\'re a quiz master! 🏆';
            else if (percentage >= 70) message = 'Great job! Well done! 👏';
            else if (percentage >= 50) message = 'Good effort! Keep practicing! 👍';
            else message = 'Don\'t give up! Try again! 💪';

            

document.getElementById('performance-message').textContent = message;

            // Save score if user is logged in
            if (currentUser) {
                saveScore(percentage);
                updateUserStats();
            }
        }

        // Go back to home
        function goHome() {
            document.getElementById('categories-view').style.display = 'block';
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('results-container').style.display = 'none';
        }

        // User management
        function login() {
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();

            if (!username || !email) {
                alert('Please enter both username and email');
                return;
            }

            currentUser = {
                username: username,
                email: email,
                scores: JSON.parse(localStorage.getItem('quizScores_' + username)) || [],

                totalScore: 0
            };

            // Calculate total score
            currentUser.totalScore = currentUser.scores.reduce((sum, score) => sum + score, 0);

            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            updateUserDisplay();
            showTab('home');
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateUserDisplay();
            showTab('profile');

        }

        function loadUser() {
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                updateUserDisplay();
            }
        }

        function updateUserDisplay() {
            const userInfo = document.getElementById('user-info');
            const loginView = document.getElementById('login-view');
            const profileView = document.getElementById('profile-view');

            if (currentUser) {

                // Show user info in home tab
                userInfo.style.display = 'flex';
                document.getElementById('user-avatar').textContent = currentUser.username.charAt(0).toUpperCase();
                document.getElementById('user-name').textContent = currentUser.username;
                document.getElementById('user-total-score').textContent = currentUser.totalScore;

                // Show profile view
                loginView.style.display = 'none';
                profileView.style.display = 'block';
                document.getElementById('profile-avatar').textContent = currentUser.username.charAt(0).toUpperCase();

                document.getElementById('profile-name').textContent = currentUser.username;
                document.getElementById('profile-email').textContent = currentUser.email;

                updateUserStats();
            } else {
                // Hide user info
                userInfo.style.display = 'none';
                
                // Show login view
                loginView.style.display = 'block';
                profileView.style.display = 'none';
            }
        }

        function updateUserStats() {
            if (!currentUser) return;


            const scores = currentUser.scores;
            document.getElementById('total-quizzes').textContent = scores.length;
            
            if (scores.length > 0) {
                const avgScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
                const bestScore = Math.max(...scores);
                
                document.getElementById('avg-score').textContent = avgScore + '%';
                document.getElementById('best-score').textContent = bestScore + '%';
            } else {
                document.getElementById('avg-score').textContent = '0%';
                document.getElementById('best-score').textContent = '0%';

            }
        }

        function saveScore(percentage) {
            if (!currentUser) return;

            currentUser.scores.push(percentage);
            currentUser.totalScore = currentUser.scores.reduce((sum, score) => sum + score, 0);

            localStorage.setItem('quizScores_' + currentUser.username, JSON.stringify(currentUser.scores));
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            // Update leaderboard
            updateLeaderboard();
        }


        // Leaderboard management
        function updateLeaderboard() {
            const leaderboardList = document.getElementById('leaderboard-list');
            leaderboardList.innerHTML = '';

            // Get all users from localStorage
            const users = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('quizScores_')) {
                    const username = key.replace('quizScores_', '');
                    const scores = JSON.parse(localStorage.getItem(key));
                    const totalScore = scores.reduce((sum, score) => sum + score, 0);

                    const avgScore = scores.length > 0 ? Math.round(totalScore / scores.length) : 0;
                    
                    users.push({
                        username: username,
                        totalScore: totalScore,
                        avgScore: avgScore,
                        quizCount: scores.length
                    });
                }
            }

            // Sort by total score
            users.sort((a, b) => b.totalScore - a.totalScore);

            // Add sample data if no users exist
            if (users.length === 0) {
                const sampleUsers = [
                    { username: 'QuizMaster', 

totalScore: 9500, avgScore: 95, quizCount: 100 },
                    { username: 'BrainBox', totalScore: 8800, avgScore: 88, quizCount: 100 },
                    { username: 'SmartCookie', totalScore: 8200, avgScore: 82, quizCount: 100 },
                    { username: 'ThinkTank', totalScore: 7500, avgScore: 75, quizCount: 100 },
                    { username: 'WiseOwl', totalScore: 6800, avgScore: 68, quizCount: 100 }
                ];
                users.push(...sampleUsers);
            }

            // Display top 10 users
            users.slice(0, 10).forEach((user, index) => {

                const item = document.createElement('div');
                item.className = 'leaderboard-item';
                
                const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';
                
                item.innerHTML = `
                    <div class="rank ${rankClass}">${index + 1}</div>
                    <div class="player-info">
                        <div class="player-name">${user.username}</div>
                        <div class="player-score">Total: ${user.totalScore} pts • Avg: ${user.avgScore}% • Quizzes: ${user.quizCount}</div>
                    </div>
                `;

                
                leaderboardList.appendChild(item);
            });
        }