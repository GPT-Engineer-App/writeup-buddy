# writeup-buddy

Create a new React app with the following features:

1. User registration page with fields for email, username, and password. Validate the fields and show error messages if needed. On successful registration, redirect to the login page.

2. User login page with fields for username and password. Validate the fields and show error messages if needed. On successful login, redirect to the article list page and store the user token in local storage so the user stays logged in on refresh.

3. Article list page that shows a loading state while fetching articles from the API at https://hopeful-desire-21262e95c7.strapiapp.com/api/articles. Once loaded, display each article's title. If the user is not logged in, redirect to the login page.

4. Logout button on the article list page that clears the user token from local storage and redirects to the login page.

Use Chakra UI for the UI components and styling. Let me know if you have any questions!

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/writeup-buddy.git
cd writeup-buddy
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
