/**
 * The Dashboard component represents the user interface for managing performance reviews.
 * Users can post new reviews, view existing reviews, save drafts, load drafts, and delete reviews.
 * It displays a welcome message with the username and provides options for interaction.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.username - The username of the currently logged-in user.
 * @param {function} props.onLogout - The callback function to log out the user.
 * @returns {JSX.Element} - The Dashboard component's user interface.
 */

import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Userp from "./user_profile";
import Navbar from './navbar';

function Dashboard({ username, onLogout }) {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [ratings, setRatings] = useState({
    effort: 0,
    communication: 0,
    participation: 0,
    meetingAttendance: 0,
  });
  const [filter, setFilter] = useState('');
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [draft, setDraft] = useState(''); // State for saving drafts.

  useEffect(() => {
    // Retrieve the draft review from localStorage when the component mounts.
    const savedDraft = localStorage.getItem(`draft_${username}`);
    if (savedDraft) {
      setDraft(savedDraft);
    }
    handleFetchReviews();
  }, [username]);



const handleDraftChange = (e) => {
    setDraft(e.target.value);
  };



  const handleSaveDraft = () => {
    if (draft.trim() === '') {
      return;
    }

    // Save the draft review to localStorage.
    localStorage.setItem(`draft_${username}`, draft);
  };

  const handleLoadDraft = () => {setDraft('');
    setReview(draft); // Load the draft into the post review box.
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingsChange = (e) => {
    const { name, value } = e.target;
    setRatings({ ...ratings, [name]: parseInt(value, 10) });
  };

  const handleFetchReviews = () => {
    fetch('http://localhost:5000/reviews')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch reviews.');
        }
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error.
      });
  };

  const handlePostReview = async () => {
    if (title.trim() !== '' && review.trim() !== '' && !isValidRating()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, text: review, username, ratings}),
      });

      if (response.status === 201) {
        // Review successfully posted.
        setTitle('');
        setReview('');
        setRatings({
          effort: 0,
          communication: 0,
          participation: 0,
          meetingAttendance: 0,
        });
      } else {
        // Handle the error.
      }
    } catch (error) {
      console.error(error);
    }

    handleFetchReviews();
  };

  const isValidRating = () => {
    // check if ratings are within a valid range (1 to 10)
    return (
      ratings.effort >= 1 &&
      ratings.effort <= 10 &&
      ratings.communication >= 1 &&
      ratings.communication <= 10 &&
      ratings.participation >= 1 &&
      ratings.participation <= 10 &&
      ratings.meetingAttendance >= 1 &&
      ratings.meetingAttendance <= 10
    );
  };

  const handleDeleteReview = async (index) => {
    const reviewToDelete = reviews[index];
    // Check if the logged-in user is the owner of the review
    if (reviewToDelete.username !== username) {
       console.error("You can only delete your own reviews.");
       return;
    }
    try {
      const response = await fetch(`http://localhost:5000/reviews/${index}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        // Review successfully deleted on the server.
        handleFetchReviews();
      } else {
        // Handle the error.
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };


//search button response that filters the reviews list
const handleSearch = (name) => {
    setFiltered(reviews.filter((review) => {return review.username === name}));
};





  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
      // Rendering the Navbar component at the top of the application
      <Navbar />
      {/* Setting up routes for the application using the "Routes" component */}
      <Routes>
      {/* Defining a route for the "/userp" path that renders the Userp component */}
        <Route exact path = "/userp" element = {<Userp/>} />
      </Routes>
      {/* Placeholder div for additional content */}
      <div className = "contet">
      {/* Additional content goes here */}
        </div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title/Topic"
      />
      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your performance review here"
      />
      <h4>Rate the following on a scale from 1 to 10:</h4>
      <label htmlFor="effort">Effort:</label>
      <input
        type="number"
        name="effort"
        value={ratings.effort}
        onChange={handleRatingsChange}
        placeholder="Effort"
        min="1"
        max="10"
      />
      <label htmlFor="communication">Communication:</label>
      <input
        type="number"
        name="communication"
        value={ratings.communication}
        onChange={handleRatingsChange}
        placeholder="Communication"
        min="1"
        max="10"
      />
      <label htmlFor="participation">Participation:</label>
      <input
        type="number"
        name="participation"
        value={ratings.participation}
        onChange={handleRatingsChange}
        placeholder="Participation"
        min="1"
        max="10"
      />
      <label htmlFor="meetingAttendance">Meeting Attendance:</label>
      <input
        type="number"
        name="meetingAttendance"
        value={ratings.meetingAttendance}
        onChange={handleRatingsChange}
        placeholder="Meeting Attendance"
        min="1"
        max="10"
      />
      <button onClick={handlePostReview}>Post Review</button>
      <div>
        <h4>Your Reviews:</h4>
          <textarea
        value={filter}
        onChange={handleSearchChange}
        placeholder="Search for a review by username"
      />
      <button onClick={() => {handleSearch(filter)}}>Search</button>
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
      </div>
      <h4>Save Draft:</h4>
      <textarea
        value={draft}
        onChange={handleDraftChange}
        placeholder="Save your draft here"
      />
      <button onClick={handleSaveDraft}>Save Draft</button>
      <button onClick={handleLoadDraft}>Load Draft</button>
    </div>
  );
}

export default Dashboard;
