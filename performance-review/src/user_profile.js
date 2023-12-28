import React from 'react';
// Importing the image file for the user profile picture
import image from './gojo.jpeg';

// Functional component for the User Profile
const Userp = () => {
    return (
    // Displaying the user profile image with specified height and width

    <img src = {image} alt = "image" height = {200} width = {200}/>

    )
}

// Exporting the Userp component for use in other parts of the application

export default Userp;