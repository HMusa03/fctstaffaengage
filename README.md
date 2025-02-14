<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FCT CBT Promotion Exam Training Platform</title>
    <link rel="icon" type="image/png" href="fcta_cbt_icon.png">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #005bb5;
            margin: 0;
            padding: 0;
            background-image: url('CBT_003.jpeg'); /* Add a CBT-related background image */
            background-size: cover;
            background-position: center;
            min-height: 100vh; /* Ensure the body takes at least the full viewport height */
            display: flex;
            flex-direction: column; /* Make the body a flex container */
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #003366;
            color: white;
        }
        .menu-icon {
            font-size: 24px;
            cursor: pointer;
        }
        .slide-out-menu {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #003366;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
            z-index: 1000;
        }
        .slide-out-menu a {
            padding: 10px 15px;
            text-decoration: none;
            font-size: 18px;
            color: white;
            display: block;
            transition: 0.3s;
        }
        .slide-out-menu a:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
        }
        .header-title {
            font-size: 24px;
            font-weight: bold;
        }
        .exam-number {
            text-align: center;
            margin-top: 20px;
        }
        .exam-number input {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .exam-number button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .description {
            max-width: 800px;
            margin: 30px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            flex-grow: 1; /* Allow the content to grow and push the footer down */
        }
        .description h2 {
            color: #003366;
            text-align: center;
        }
        .description ol {
            line-height: 1.6;
        }
        footer {
            background-color: #003366;
            color: white;
            text-align: center;
            padding: 10px;
            margin-top: auto; /* Push the footer to the bottom */
        }
        footer .container {
            margin-bottom: 10px;
        }
        footer a {
            margin: 0 10px;
            text-decoration: none;
            color: white;
        }
        footer a:hover {
            color: #4CAF50;
        }

        /* Chat Interface Styles */
        .chat-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .chat-window {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 300px;
            height: 400px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: none;
            flex-direction: column;
        }

        .chat-header {
            background-color: #003366;
            color: white;
            padding: 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            text-align: center;
        }

        .chat-messages {
            flex-grow: 1;
            padding: 10px;
            overflow-y: auto;
        }

        .chat-input {
            display: flex;
            border-top: 1px solid #ccc;
        }

        .chat-input input {
            flex-grow: 1;
            padding: 10px;
            border: none;
            border-bottom-left-radius: 10px;
        }

        .chat-input button {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-bottom-right-radius: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <div class="menu-icon" onclick="openMenu()">&#9776;</div>
        <div class="header-title">FCT CBT Promotion Exam Training Platform</div>
        <img src="FCTA _LOGO.jpg" alt="Header Icon" style="height: 70px;" onclick="goToHome()">
    </header>

    <!-- Slide-out menu -->
    <div id="slideOutMenu" class="slide-out-menu">
        <span class="close-btn" onclick="closeMenu()">&times;</span>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
    </div>

    <div class="exam-number">
        <input type="text" id="exam-no" placeholder="Enter IPPIS/File No." required>
        <button onclick="startExam()">Start Exam</button>
    </div>  
    
    <!-- Description Section -->
    <div class="description">
        <h2>How to Use This Site</h2>
        <ol>
            <li><strong>Access the Home page:</strong> Enter your user id and click on start exam to redirect you to Home Page. The <strong>Home Page</strong>  Contains The <strong>CBT</strong> platform buttons for various professionalism and <strong>nav</strong> buttons to enable you study to prepare for the exam as well as download more materials for further studies.</li>
            <li><strong>Study before taking the exam:</strong> I will strongly advise that before taking the exam, do a thorough study of all available materials on this site and at home. It will help a lot.<strong>Take Note!</strong>.</li>
            <li><strong>Take the Exam:</strong> You will be required to enter your user id (IPPIS or File number) in the input field provided and click <strong>Start Exam</strong>. Click to open the exam you are prepared to take at the moment</li>
            <li><strong>Follow On-Screen Instructions:</strong> Once the exam starts, carefully read and follow the instructions displayed on the screen. Manage your time wisely before it expires as it will assume that you are done with the exam and the unanswered questions will be considered/remarked as part of failed questions.</li>
            <li><strong>Submit Your Exam:</strong> Before you submit, you can proof-read to check the unanswered questions and review some options that may be wrong using the <strong>previous</strong> and <strong>next</strong> buttons. After completing the exam, ensure you click on submit button to submit your exam before the time runs out.</li>
            <li><strong>Contact Support:</strong> If you encounter any issues, use the social media links in the footer to contact support.</li>
        </ol>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 HM Solutions LTD. All rights reserved.</p>
        </div>
        <div>
            <a href="https://web.facebook.com/HMTelecoms" target="_blank">Facebook</a>
            <a href="https://x.com/HMusa3" target="_blank">Twitter</a>
            <a href="https://www.instagram.com/hmtelecoms0/" target="_blank">Instagram</a>
            <a href="https://wa.me/+2348053579779" target="_blank">WhatsApp</a>
            <a href="https://www.linkedin.com/in/hussaini-musa-68614283/" target="_blank">LinkedIn</a>
        </div>
    </footer>

    <!-- Chat Button -->
    <button class="chat-button" onclick="toggleChat()">💬</button>

    <!-- Chat Window -->
    <div class="chat-window" id="chatWindow">
        <div class="chat-header">Chat with AI</div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="chat-input">
            <input type="text" id="chatInput" placeholder="Type a message...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script>
        function goToHome() {
            window.location.href = "index.html"; // Redirect to the home page
        }

        function openMenu() {
            document.getElementById("slideOutMenu").style.width = "#250px";
        }

        function closeMenu() {
            document.getElementById("slideOutMenu").style.width = "0";
        }
    
        async function startExam() {
            const examNo = document.getElementById('exam-no').value;
            if (examNo) {
                try {
                    const response = await fetch('http://localhost:3000/validate-user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userId: examNo }),
                    });

                    const data = await response.json();

                    if (data.valid) {
                        alert(`Exam Number ${examNo} accepted. Redirecting to the exam page...`);
                        window.location.href = "home.html"; // Replace with the actual URL of your CBT page
                    } else {
                        alert('Invalid user ID. Please enter a registered user ID.');
                    }
                } catch (error) {
                    console.error('Error validating user ID:', error);
                    alert('An error occurred while validating your user ID. Please try again.');
                }
            } else {
                alert('Please enter your exam number.');
            }
        }

        // Chat Interface Functions
        function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
        }

        async function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (message === '') return;

            const chatMessages = document.getElementById('chatMessages');
            chatMessages.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

            // Call OpenAI API
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: message }]
                })
            });

            const data = await response.json();
            const reply = data.choices[0].message.content;

            chatMessages.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;

            input.value = '';
        }
    </script>
</body>
</html>
