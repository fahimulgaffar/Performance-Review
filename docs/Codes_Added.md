# Code added for assignment 3 by Fahimul Gaffar

performance-review/package-lock.json

    "node_modules/react-icons": {
      "version": "4.12.0",
      "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-4.12.0.tgz",
      "integrity": "sha512-IBaDuHiShdZqmfc/TwHu6+d6k2ltNCf3AszxNmjJc1KUfXdEeRJOKyNvLmAHaarhzGmTSVygNdyu8/opXv2gaw==",
      "peerDependencies": {
        "react": "*"
      }
    },


performance-review/src/App.css

    /* Global Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        width: 100%;
        min-height: 100%;
        font-family: 'Roboto', sans-serif;
        background-color: var(--background-color);
        color: var(--text-color);
        padding-bottom: 100px;
        scroll-behavior: smooth;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: auto; /* Allow vertical scrolling */
    
    
    .App {
        position: relative; /* If .App contains your entire application */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Adjust to start to allow natural page flow */
        min-height: 100vh; /* Ensure it takes at least the full viewport height */
        padding-top: 40px; /* Adjust as needed for fixed header/navigation */
    }
    
    /* Fixed Position for Signup and Login */
    .signup-section, .login-section {
        position: fixed;
        top: 20%; /* Adjust as per your design */
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    
    
    /* Theme Colors - Dark and Light Modes */
    :root {
        --primary-color: #0d6efd;
        --hover-primary-color: #0a58ca;
        --background-color: #121212;
        --text-color: #e0e0e0;
        --button-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
        --input-background: #1e1e1e;
        --input-border: #333;
        --dashboard-background: #1e1e1e;
        --dashboard-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        --review-item-background: #252525;
        --review-item-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        --action-button-color: #28a745;
        --hover-action-button-color: #218838;
    }
    
    .light {
        --background-color: #ffffff;
        --text-color: #000000;
        --input-background: #ffffff;
        --input-border: #cccccc;
        --dashboard-background: #f8f9fa;
        --review-item-background: #f0f0f0;
    }
    
    /* Typography */
    h1 {
        color: var(--primary-color);
        font-size: 2em;
    }
    
    /* Form Elements */
    input, button, textarea {
        padding: 12px;
        margin: 8px;
        border-radius: 4px;
        transition: all 0.3s ease;
        color: var(--text-color);
        background-color: var(--input-background);
        border: 1px solid var(--input-border);
    }
    
    button {
        background-color: var(--primary-color);
        box-shadow: var(--button-shadow);
        cursor: pointer;
    }
    
    button:hover {
        background-color: var(--hover-primary-color);
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
    }
    
    textarea {
        width: 100%;
    }
    
    /* Dashboard Styles */
    .dashboard {
        background-color: var(--dashboard-background);
        border-radius: 15px;
        padding: 30px;
        box-shadow: var(--dashboard-shadow);
    }
    
    /* Reviews List */
    .reviews-list {
        list-style: none;
        padding: 0;
    }
    
    .review-item {
        background-color: var(--review-item-background);
        padding: 20px;
        margin: 10px 0;
        border-radius: 10px;
        box-shadow: var(--review-item-shadow);
    }
    
    /* Review Actions */
    .review-actions {
        display: flex;
        justify-content: space-between;
    }
    
    .review-actions button {
        background-color: var(--action-button-color);
    }
    
    .review-actions button:hover {
        background-color: var(--hover-action-button-color);
        color: white;
        box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
    }
    
    /* Theme Switch */
    .theme-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin: 10px;
    }
    
    .theme-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .theme-switch .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }
    
    .theme-switch .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    
    .theme-switch input:checked + .slider {
        background-color: #2196F3;
    }
    
    .theme-switch input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }
    
    .theme-switch input:checked + .slider:before {
        transform: translateX(26px);
    }
    
    /* Profile Icon and User Info Popup */
    .profile-icon {
        border: none;
        background: none;
        cursor: pointer;
        position: fixed;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 5px;
        transition: background-color 0.3s ease;
    }
    
    .profile-icon:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    
    .user-info-popup {
        position: fixed;
        top: 60px;
        right: 20px;
        border: 1px solid #ccc;
        background-color: var(--dashboard-background);
        color: var(--text-color);
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        width: 250px;
        z-index: 1001;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
    }
    
    .show-user-info .user-info-popup {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .user-info-popup p {
        margin: 10px 0;
        line-height: 1.4;
    }
    
    .user-info-popup button {
        margin-top: 10px;
        width: 100%;
        padding: 8px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .user-info-popup button:hover {
        background-color: var(--hover-primary-color);
    }
    
    /* Bottom Banner Styles */
    .bottom-banner {
        background-color: #1b1d20;
        color: #ffffff;
        text-align: center;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 20px 0;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5);
        border-top: 3px solid #4a90e2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .contact-info, .group-members {
        margin: 10px 0;
        font-size: 1.1em;
        text-align: center;
    }
    
    .contact-info {
        font-weight: bold;
    }
    
    .group-members {
        font-style: italic;
    }
    
    

performance-review/src/App.js


    import { FaUserCircle } from 'react-icons/fa';
    const [showUserInfo, setShowUserInfo] = useState(false);
    
      const toggleUserInfo = () => {
        setShowUserInfo(prevState => !prevState);
      };
    
    
    
    <div className={`App ${theme} ${showUserInfo ? 'show-user-info' : ''}`}>
     <>
            <button className="profile-icon" onClick={toggleUserInfo}>
              <FaUserCircle size={30} />
            </button>


        {showUserInfo && (
          <div className="user-info-popup">
            <p>Username: {username}</p>
            <button onClick={toggleUserInfo}>Close</button>
          </div>
        )}


     it('displays an error message for unsuccessful signup', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        status: 400,
      });
    
      const { getByPlaceholderText, getByText } = render(<App />);
      fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testUser' } });
      fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testPassword' } });
      fireEvent.click(getByText('Signup'));
    
      await waitFor(() => {
        expect(getByText('Signup failed. Please try again.')).toBeInTheDocument();
      });
    });
    


performance-review/src/App.css


      it('displays an error message for unsuccessful signup', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        status: 400,
      });
    
      const { getByPlaceholderText, getByText } = render(<App />);
      fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testUser' } });
      fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testPassword' } });
      fireEvent.click(getByText('Signup'));
    
      await waitFor(() => {
        expect(getByText('Signup failed. Please try again.')).toBeInTheDocument();
      });
    });


# Code added for assignment 3 by Arooz Singh-
performance-review/src/App.css

        /*for bottom banner*/
        .bottom-banner {
          background-color: #1b1d20; /* Darker background color */
          color: #ffffff;
          text-align: center;
          padding: 20px 0;
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5); /* Prominent shadow */
          border-top: 3px solid #4a90e2; /* Top border for contrast */
          font-family: 'Roboto', sans-serif;
        }
        
        .contact-info, .group-members {
          margin: 10px 0;
          font-size: 1.1em; /* Slightly larger font */
        }
        
        .contact-info {
          font-weight: bold; /* Emphasizing contact info */
        }
        
        .group-members {
          font-style: italic; /* Styling for member names */
        }


        
        /* Updated App.css for Dark Mode */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          width: 100%;
          height: 100%;
          font-family: 'Roboto', sans-serif;
          background-color: var(--background-color);
          color: var(--text-color);
        }
        
        :root {
          --primary-color: #0d6efd;
          --hover-primary-color: #0a58ca;
          --background-color: #121212;
          --text-color: #e0e0e0;
          --button-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
          --input-background: #1e1e1e;
          --input-border: #333;
          --dashboard-background: #1e1e1e;
          --dashboard-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          --review-item-background: #252525;
          --review-item-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          --action-button-color: #28a745;
          --hover-action-button-color: #218838;
        }
        
        .App {
          text-align: center;
          font-family: 'Roboto', sans-serif;
          margin: 40px;
          color: var(--text-color);
          background-color: var(--background-color);
        }
        
        h1 {
          color: var(--primary-color);
          font-size: 2em;
        }
        
        input, button, textarea {
          padding: 12px;
          margin: 8px;
          border-radius: 4px;
          transition: all 0.3s ease;
          color: var(--text-color);
          background-color: var(--input-background);
          border: 1px solid var(--input-border);
        }
        
        button {
          background-color: var(--primary-color);
          box-shadow: var(--button-shadow);
        }
        
        button:hover {
          background-color: var(--hover-primary-color);
          box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
        }
        
        textarea {
          width: 100%;
        }
        
        .dashboard {
          background-color: var(--dashboard-background);
          border-radius: 15px;
          padding: 30px;
          box-shadow: var(--dashboard-shadow);
        }
        
        .reviews-list {
          list-style: none;
          padding: 0;
        }
        
        .review-item {
          background-color: var(--review-item-background);
          padding: 20px;
          margin: 10px 0;
          border-radius: 10px;
          box-shadow: var(--review-item-shadow);
        }
        
        .review-actions {
          display: flex;
          justify-content: space-between;
        }
        
        .review-actions button {
          background-color: var(--action-button-color);
        }
        
        .review-actions button:hover {
          background-color: var(--hover-action-button-color);
          color: white;
          box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
        }



performance-review/src/App.css

        {/* Bottom Banner */}
              <footer className="bottom-banner">
                <div className="contact-info">
                  <p>Contact us at: contact@email.com</p>
                </div>
                <div className="group-members">
                  <p>Members: Fahim, Adrian, Arooz, Mamun, Libin</p>
                </div>
              </footer>
            </div>

performance-review/react-auth-backend/Server.js

          if (!username || !password || password.length < 8) {
            return res.status(400).json({ message: 'Username and password are required. Password must be at least 8 characters long.' });
          }

            const [passwordRequirements, setPasswordRequirements] = useState(
            'Password should be at least 8 characters long'
             );

            const handlePasswordChange = (e) => {
            const newPassword = e.target.value;
            setPassword(newPassword);
        
            if (newPassword.length < 8) {
              setPasswordRequirements('Password should be at least 8 characters long');
            } else {
              setPasswordRequirements(''); // Clear the message if the password is long enough.
            }
          };
            <p>{passwordRequirements}</p>


# Code added for assignment 3 by Mamun Rashid

performane-review/react-auth-backend/Server.js

    // API endpoints
    app.post('/reviews', (req, res) => {
      const { title, text, username, ratings } = req.body;
    
      if (!title || !text || !username) {
        return res.status(400).json({ message: 'Title, Text, username and ratings are required.' });
      }
    
      const review = { title, text, username, ratings };
      reviews.push(review);
    
      res.status(201).json({ message: 'Review posted successfully' });
    });

performance-review/src/Dashboard.js

     const [title, setTitle] = useState('');
     const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  
      const handlePostReview = async () => {
    if (title.trim() !== '' && review.trim() !== '' && !isValidRating()) {
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5001/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, text: review, username, ratings}),
      });
      
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title/Topic"
      />
      
      <ul>
          {filtered.map((r, index) => (
            <li key={index}>
              <strong>{r.title}</strong> (Posted by {r.username})
              <br />
              <strong>Review:</strong> {r.text}
              <br />
              <strong>Effort:</strong> {r.ratings.effort}
              <strong style={{marginLeft: '20px'}}>Communication:</strong> {r.ratings.communication}
              <strong style={{marginLeft: '20px'}}>Participation:</strong> {r.ratings.participation}
              <strong style={{marginLeft: '20px'}}>Meeting Attendance:</strong> {r.ratings.meetingAttendance}
              <br />
              <br />
            </li>
          ))}
        </ul>
        
        <ul>
          {reviews.map((r, index) => (
            <li key={index}>
              <strong>{r.title}</strong> (Posted by {r.username})
              <br />
              <strong>Review:</strong> {r.text}
              <br />
              <strong>Effort:</strong> {r.ratings.effort}
              <strong style={{marginLeft: '20px'}}>Communication:</strong> {r.ratings.communication}
              <strong style={{marginLeft: '20px'}}>Participation:</strong> {r.ratings.participation}
              <strong style={{marginLeft: '20px'}}>Meeting Attendance:</strong> {r.ratings.meetingAttendance}
              <br />
              <button style={{marginBottom: '30px'}} onClick={() => handleDeleteReview(index)}>Delete</button>
            </li>
          ))}
        </ul>
