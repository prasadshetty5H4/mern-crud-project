This is a full-stack MERN application for managing user data.
Nodejs and mysql server setup are required

// Execute following commands to create database and the table
CREATE DATABASE userdb;
USE userdb;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    mobile_number VARCHAR(20),
    email VARCHAR(255),
    gender ENUM('Male', 'Female', 'Other'),
    photo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
