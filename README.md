
# Playwright Practice - Automation Testing Framework

## Overview  
This repository contains an automation testing framework built using **Playwright**, designed for web application testing. The framework follows the **Page Object Model (POM)** design pattern, ensuring maintainability, scalability, and efficient testing of web applications.  

The project is integrated with **Azure DevOps Pipelines** for Continuous Integration and Continuous Deployment (CI/CD), enabling automated test execution on every push.  

## Features  
- **Playwright Framework**: Fast, reliable, and cross-browser automation testing.  
- **Page Object Model (POM)**: Ensures maintainable, reusable, and scalable test code.  
- **CI/CD with Azure Pipelines**: Automated testing and deployment on every push to the repository.  
- **Cross-Browser Testing**: Supports testing on Chromium, Firefox, and WebKit.  

## Prerequisites  
- **Node.js** (version >= 14.x)  
- **Git** (for cloning and version control)  

## Installation  

### 1. Clone the repository:  
```bash
git clone https://github.com/rameshlakmal/Playwright-Practice.git  
cd Playwright-Practice
```  

### 2. Install dependencies:  
```bash
npm install
```  

## Usage  

### Run Tests  
To execute the tests, run the following command:  
```bash
npx playwright test
```  

## CI/CD Pipeline  
This repository is integrated with **Azure DevOps Pipelines** for:
- Continuous Integration (CI) to run tests automatically on every push to the repository.
- Continuous Deployment (CD) for seamless execution and reporting.  

The pipeline is configured to run Playwright tests and ensure automated quality checks for every change made to the repository.  

## Contributing  
Contributions are welcome! If you encounter any issues or would like to add improvements, feel free to:  
- Open an issue or pull request.  
- Suggest new features or improvements.  


