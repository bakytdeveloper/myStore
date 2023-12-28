// client/src/components/Profile/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState({
        name: 'John Doe', // Предположим, что это данные текущего пользователя
        email: 'john@example.com',
        // Добавьте другие данные профиля по необходимости
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle profile update logic (send data to server, etc.)
        console.log('Updated profile data:', userData);
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Добавьте другие поля профиля по необходимости */}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
