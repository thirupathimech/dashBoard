(function() {
  const STORAGE_KEY = 'dashboard_projects';
  const defaultProjects = [{
                icon: 'bi-window',
                title: 'Landing Page Showcase',
                description: 'Discover high-quality landing page designs tailored for photographers, videographers, and event professionals at affordable prices.',
                link: 'landingPageShowcase.html',
                tags: ['Photography', 'Videography', 'Events']
            },
            {
                icon: 'bi-code-slash',
                title: 'Learn Automation – TestNG & XPath',
                description: 'Master Selenium automation with TestNG and XPath locators. Includes tutorials, examples, and interview-focused questions.',
                link: 'learnAutomation.html',
                tags: ['Automation', 'Testing', 'Selenium']
            },
            {
                icon: 'bi-database',
                title: 'MySQL Topics Explorer',
                description: 'Discover all MySQL concepts with categorized sections, descriptions, and syntax-highlighted example queries.',
                link: 'mySqlExplorer.html',
                tags: ['Database', 'MySQL', 'SQL']
            },
            {
                icon: 'bi-table',
                title: 'MySQL Table Creator',
                description: 'A simple web-based tool to generate MySQL CREATE TABLE statements easily without writing SQL by hand.',
                link: 'mySQLTableCreator.html',
                tags: ['Database', 'MySQL', 'Tool']
            },
            {
                icon: 'bi-tags',
                title: 'JPA & Hibernate Annotations',
                description: 'A handy web tool to explore and learn JPA & Hibernate annotations with examples — simplify your database mapping.',
                link: 'hibernateAnnotations.html',
                tags: ['Java', 'JPA', 'Hibernate']
            },
            {
                icon: 'bi-file-earmark-excel',
                title: 'Excel Comparison',
                description: 'A simple website to compare two Excel workbooks and download only the rows that are different.',
                link: 'excelComparison.html',
                tags: ['Excel', 'Comparison', 'Tool']
            },
            {
                icon: 'bi-code',
                title: 'XML Formatter',
                description: 'A clean and easy-to-use tool for formatting and beautifying your XML data for better readability.',
                link: 'xmlFormatter.html',
                tags: ['XML', 'Formatter', 'Tool']
            },
            {
                icon: 'bi-code-square',
                title: 'XML Formatter Advanced',
                description: 'A clean and easy-to-use tool for formatting and beautifying your XML data for better readability.',
                link: 'xml-formatter-adv.html',
                tags: ['XML', 'Advanced', 'Tool']
            },
            {
                icon: 'bi-folder',
                title: 'File Manager',
                description: 'You can save your files in localStorage for easy access and management.',
                link: 'fileStorage',
                tags: ['Storage', 'File Manager', 'Tool']
            },
            {
                icon: 'bi-filetype-html',
                title: 'HTML Online Editor',
                description: 'An HTML viewer with a toolbar for easy input and formatting of HTML code.',
                link: 'htmlEditor.html',
                tags: ['HTML', 'Editor', 'Tool']
            },
            {
                icon: 'bi-calculator',
                title: 'Loan Calculator',
                description: 'Understand your loan payments and schedule with this easy-to-use calculator.',
                link: 'https://thirupathimech.github.io/dashBoard/loanCalculator',
                tags: ['Calculator', 'Finance', 'Tool']
            },
            {
                icon: 'bi-search-and-replace',
                title: 'Find And Replace',
                description: 'Streamline text editing with this powerful find and replace tool.',
                link: 'https://thirupathimech.github.io/dashBoard/FindAndReplace',
                tags: ['Text', 'Editor', 'Tool']
            },
            {
                icon: 'bi-file-earmark-code',
                title: 'Java File Scanner',
                description: 'Scan and manage files for seamless data migration.',
                link: 'javaFilePathScanner.html',
                tags: ['Java', 'Scanner', 'Tool']
            },
            {
                icon: 'bi-eraser',
                title: 'Java Block Command Remover',
                description: 'Remove java file block command',
                link: 'javaBlockCommandRemover.html',
                tags: ['Java', 'Command', 'Tool']
            },
            {
                icon: 'bi-basket',
                title: 'Java Unused Variable Finder',
                description: 'Java Unused Variable Finder Tool',
                link: 'javaUnusedVariableFinder.html',
                tags: ['Java', 'Variable', 'Tool']
            },
            {
                icon: 'bi-text-paragraph',
                title: 'Text Processor',
                description: 'Easily edit text—trim whitespace, change case, remove special characters, and more, with a stylish look!',
                link: 'textProcessor.html',
                tags: ['Text', 'Processor', 'Tool']
            },
            {
                icon: 'bi-palette',
                title: 'Color Picker',
                description: 'A simple color picker website to choose any color and get its hex code instantly.',
                link: 'colorPicker.html',
                tags: ['Color', 'Picker', 'Tool']
            },
            {
                icon: 'bi-chat-dots',
                title: 'Chat Bot',
                description: 'Talk to a smart, chatty bot that gets your vibe. Great for dev portfolios, demos, or just some fun!',
                link: 'chatbot.html',
                tags: ['AI', 'Chat', 'Bot']
            },
            {
                icon: 'bi-person-badge',
                title: 'Employee Form',
                description: 'Simplify the management of employee payroll information with this user-friendly application.',
                link: 'https://thirupathimech.github.io/dashBoard/employeeForm',
                tags: ['Form', 'Employee', 'Management']
            },
            {
                icon: 'bi-controller',
                title: 'Snake Game',
                description: 'Enjoy a classic Snake Game with enhanced visuals and gameplay.',
                link: 'snakeGame.html',
                tags: ['Game', 'Snake', 'Fun']
            },
            {
                icon: 'bi-file-earmark-text',
                title: 'Resume Analyzer',
                description: 'Analyze your resume instantly: view ATS score, keyword highlights, and actionable insights to boost your job search.',
                link: 'resume_analyzer.html',
                tags: ['Resume', 'Analyzer', 'Career']
            },
            {
                icon: 'bi-cash-stack',
                title: 'Daily Expense Tracker',
                description: 'Effortlessly record your daily expenses, view spending trends and get budget-friendly tips to stay on top of your finances.',
                link: 'https://expense-eapo.onrender.com/login',
                tags: ['Finance', 'Tracker', 'Expense']
            },
            {
                icon: 'bi-image',
                title: 'Image Base64 Converter',
                description: 'Instantly convert your images to Base64 strings: upload, encode, and copy ready-to-use code for embedding images.',
                link: 'image_base64_converter.html',
                tags: ['Image', 'Converter', 'Base64']
            },
            {
                icon: 'bi-pencil-square',
                title: 'Image Editor',
                description: 'Upload and edit images instantly – crop, resize, and convert to Base64 for easy embedding.',
                link: 'imageEditor.html',
                tags: ['Image', 'Crop', 'Reduce']

            },
            {
                icon: 'bi-qr-code',
                title: 'QR Generator',
                description: 'Easily create custom QR codes for your links, text, or data. Upload or input your content, generate a QR code instantly.',
                link: 'qr_generator.html',
                tags: ['QR', 'Generator', 'Tool']
            },
            {
                icon: 'bi-collection-play',
                title: 'Media Trimmer',
                description: 'Effortlessly trim and edit audio/media files with millisecond precision. Remove unwanted sections.',
                link: 'mediaTrimmer.html',
                tags: ['Audio', 'Trimmer', 'Video']
            },
            {
                icon: 'bi-send',
                title: 'Postman Lite',
                description: 'Test APIs effortlessly with Postman Lite: input your endpoint, select HTTP methods, add headers and payloads.',
                link: 'postman_lite.html',
                tags: ['API', 'Testing', 'Tool']
            },
            {
                icon: 'bi-camera-video',
                title: 'Capture Image Or Video',
                description: 'Capture and process images or videos with ease.',
                link: 'FaceRecognization.html',
                tags: ['Camera', 'Capture', 'Media']
            }
        ];

  function getProjects() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (error) {
      console.warn('Unable to read saved projects:', error);
    }
    return [...defaultProjects];
  }

  function saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }

  function resetProjects() {
    localStorage.removeItem(STORAGE_KEY);
  }

  window.ProjectStore = {
    STORAGE_KEY,
    defaultProjects,
    getProjects,
    saveProjects,
    resetProjects
  };
})();
