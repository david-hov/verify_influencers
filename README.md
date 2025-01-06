# Verify Influencers

## Influencer Management Tool

**Verify Influencers** is an influencer management tool built with **React-Admin** and **TypeScript**. It allows users to view, manage, and analyze influencer data in an efficient and user-friendly interface.

### Features

- **React-Admin Integration** for easy CMS and table management
- **SCSS** for styling
- **React Hook Form** for seamless form handling
- **AI Integration** using ChatGPT model `gpt-4o-mini`
- **Configurable AI settings** via `.env` file
- **Import and manage influencer data efficiently**
- **Sample Data Switcher**

## Tech Stack

The project utilizes several open-source technologies to provide a rich user experience:

- [React-Admin](https://marmelab.com/react-admin/Demos.html): A powerful tool for building CMS applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed language for better maintainability.
- [React Hook Form](https://react-hook-form.com/): For handling forms with ease.
- [SCSS](https://sass-lang.com/): For robust styling.
- [ChatGPT API](https://openai.com): Powered by the `gpt-4o-mini` model for AI capabilities.

# Project Overview

This project uses **TypeScript**, **React-Admin** ([Documentation](https://marmelab.com/react-admin/Demos.html)), a great tool for building CMS, tables, and other powerful features. It also uses **SCSS** for styling and **React-Hook-Form** for form handling.

## Installation

To ensure the correct Node.js version, this project uses an `.nvmrc` file. If you are using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager), you can run the following command to automatically use the appropriate version:

## API Requests

API requests related to OpenAI, are made in the `dataProvider` file. This file is responsible for handling the communication with the backend, such as fetching data, making POST requests, and interacting with the OpenAI API.

In the `dataProvider` file, you will find logic for:

- **Fetching data** from the openAI.
- **Sending requests to OpenAI** using the token and model specified in the `.env` file.

You can configure or modify the API request logic in this file to suit your project needs, including changing the OpenAI API interactions by adjusting the `VITE_OPEN_AI` token and `VITE_OPEN_AI_MODEL` in your `.env` file.


## AI Integration

The application integrates with an AI API using the **ChatGPT** model `gpt-4o-mini`, which is configurable via the `.env` file. Inside the `.env`, you'll find two key values:

- **VITE_OPEN_AI**: The AI token
- **VITE_OPEN_AI_MODEL**: The model name (e.g., `gpt-4o-mini`)

For configuration, refer to the `.env.example` file for an example setup.

## Project Structure

The project is structured as follows:
```sh
src/
├── resources/                     # Resources for the app (e.g., data, components)
│   ├── influencers/               # Influencer data and components
│   │   ├── InfluencerList/        # Influencer list as a panel
│   │   ├── SingleInfluencer/      # Expandable panel for a single influencer
│   │   └── StatisticsCard/        # Card for influencer statistics
│   └── utils/                     # Utility functions and context
│       └── reducer/               # Reducer wrapped with Context API
│       └── sampleData/            # Sample data for testing
├── styles/                        # SCSS styles
└── .env                           # Environment variables
```
## Project Installation

Follow these steps to set up the project:

1. Copy the example environment file and create your `.env`:

   ```sh
   cp .env.example .env
2. Set your AI token and model in the .env file:
    ```sh
    VITE_OPEN_AI=your-ai-token-here<br>
    VITE_OPEN_AI_MODEL=gpt-4o-mini
    ```
Install the dependencies:

```sh
npm i
```
Start the development server:

```sh
npm run dev
```

# Dockerfile and Docker Compose Environment Variables Setup

In `docker-compose.yml`, ensure that the environment variables are set for use in your application:

```Dockerfile
VITE_OPEN_AI=your-openai-key
VITE_OPEN_AI_MODEL=your-model-name
