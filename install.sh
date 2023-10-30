#!/bin/bash
# This script is used to install the prerequisites for the NodeJS MySQL application.

# Generate random session secret
session_secret=$(openssl rand -base64 32)

# Install Node dependencies
npm install

# Ask for the database credentials
echo "Please enter the database username: "
read db_username
echo "Please enter the database password: "
read db_password
echo "Please enter the database name: "
read db_name

# Create the database
mysql -u"$db_username" -p"$db_password" -e "CREATE DATABASE $db_name"

# Create the tables
mysql -u"$db_username" -p"$db_password" "$db_name" < database.sql

# Create environment variables file
echo "PORT=3000" > .env
echo "DB_HOST=localhost" >> .env
echo "DB_USER=$db_username" > .env
echo "DB_PASSWORD=$db_password" >> .env
echo "DB_NAME=$db_name" >> .env
echo "SESSION_SECRET=$session_secret" >> .env

# Running the website using Express
node app.js

# End of script