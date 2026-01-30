# Playwright Automation – SwiftTranslator

**Student Name: J.A.I.T.KALUGALLA**  
**Registration Number: IT23682764**
**Course: IT3040 – ITProject Management**  
**Group : 3.1 WE**

## Project Overview
This project contains automated test cases written using **Playwright** to test the
Singlish to Sinhala translation functionality of the SwiftTranslator website.

### Include
- Positive Functional test cases(positive.spec.ts)
- Negative Functional test cases(negative.spec.ts)
- Playwright config files

The tests verify:
- correct sinhala conversion from singlish input
- Realtime UI updates

## Technologies Used
- Node.js
- Playwright
- TypeScript
- VS Code

##  Application Under Test
https://www.swifttranslator.com/

##  Project Structure

 Playwright_Project/
 
│
├─ package.json
├─ package-lock.json
├─ playwright.config.ts
├─ README.md
└─ tests/
   ├─ positive.spec.ts
   └─ negative.spec.ts
           


##  Installation Steps

1. Install Node.js  
   https://nodejs.org/

2. Clone the repository

    git clone <YOUR_GITHUB_REPO_URL>
   cd Playwright_Project

3. Install dependencies
   npm install

4. Install Playwright browsers
   npx playwright install

###  Run Tests
   npx playwright test

### View Test Report
   npx playwright show-report







