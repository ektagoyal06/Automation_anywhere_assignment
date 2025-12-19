Automation Assignment – UI & API Testing

Automated testing suite for Automation Anywhere Community Edition using Playwright with Page Object Model design patter

Project Overview
This project demonstrates UI and API automation for Automation Anywhere Community Edition using Playwright.
The automation covers three use cases:

UseCase1- UI Automation – Creating a Task Bot and adding a Message Box

UseCase2- Form with Upload Flow (UI Automation)

UseCase3- API Automation – Backend validation using authentication token

Tech Stack
Playwright

JavaScript (Node.js)

Automation Anywhere Community Edition

Axios / Playwright APIRequest

Project Structure

assignment/
│
├── pages/                    
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── TaskBotPage.js
|   |__ FormPage.js
│
|
├── tests/                    
│   ├── messageBoxTask.spec.js    
│   ├── formUpload.spec.js          
│   └── apiUsecase.spec.js        
|   |__ saveSession.spec.js
│
|
├── utils/  
|   |__ apiHelper.js
│
|
├── playwright.config.js   
|
├── package.json

Setup

Prerequisites

Node.js (v16 or higher)

Automation Anywhere Community Edition account

Installation

npm install

npx playwright install chromium

Use Cases Implemented

Use Case 1: UI Automation – Create Task Bot

Description
Automates the following steps in Automation Anywhere UI:

Login to Automation Anywhere

Navigate to Automation section

Create a new Task Bot

Add a Message Box action

Save the Task Bot

Test File

tests/messageBoxTask.spec.js


Execution

npx playwright test tests/messageBoxTask.spec.js --headed

Use Cases Implemented

Use Case 3: API Automation – Backend Validation

Status: Complete

Description
Performs API automation using token-based authentication to validate Automation Anywhere backend APIs.

Due to OAuth2 and security restrictions in Automation Anywhere Community Edition, some APIs return authorization-related responses.

These responses are expected and valid, confirming correct backend security enforcement.

Test File

tests/apiUsecase.spec.js


Execution

npx playwright test tests/apiUsecase.spec.js

How to Run the Project

1️⃣ Install Dependencies

npm install

2️⃣ Run UI Tests

npx playwright test --headed

3️⃣ Run API Test

npx playwright test tests/apiUsecase.spec.js
