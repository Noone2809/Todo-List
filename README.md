# Todo-List App

This project is a mobile-first grocery and task management app built with Expo and React Native. It allows users to add items to a shopping list, view them in a clean interface, and remove items when they are no longer needed.

The app is structured as a modern Expo Router project and supports mobile and web development in a single codebase.

## Overview

This app was created to demonstrate a simple but functional productivity tool. It focuses on a minimal and user-friendly experience for managing everyday grocery items. The home screen includes:

- An input field to add new items
- A button to submit the item to the list
- A list view showing all items
- Delete buttons for each item
- A clean, responsive layout for mobile screens

## Features

- Add grocery or task items to a list
- Prevent empty input entries
- Remove items from the list
- Responsive design for small screens and web viewing
- Light and dark theme support via Expo styling
- Tab-based navigation using Expo Router
- Cross-platform compatibility with Expo

## Tech Stack

This project uses:

- React Native
- Expo
- TypeScript
- Expo Router
- React Native Safe Area Context
- Expo Vector Icons
- React Native Web support

## Project Structure

```text
Todo-List/
├── app.json                  # Expo app configuration
├── package.json              # Scripts and dependencies
├── README.md                 # Project documentation
├── tsconfig.json             # TypeScript configuration
├── src/
│   ├── app/
│   │   ├── _layout.tsx       # App layout and theme setup
│   │   ├── index.tsx         # Main grocery list screen
│   │   └── explore.tsx       # Explore screen/tab page
│   ├── components/
│   │   ├── app-tabs.tsx      # Bottom tab navigation
│   │   ├── animated-icon.tsx # Animated splash icon logic
│   │   └── ...
│   ├── constants/
│   │   └── theme.ts          # Theme colors and spacing values
│   ├── global.css            # Global CSS for web styling
│   └── hooks/                # Reusable hooks
├── assets/                   # Images and app assets
├── scripts/
│   └── reset-project.js      # Project reset helper
└── LICENSE
```

## Main Application Logic

The core behavior is centered in the main screen at [src/app/index.tsx](src/app/index.tsx).

That screen includes:

- A state variable for the current item input
- A state array for the grocery list
- An add function that validates and inserts items
- A delete function that removes an item by index
- A FlatList component to render the item list

The layout is styled in the same file using React Native StyleSheet objects, with shared colors and spacing coming from [src/constants/theme.ts](src/constants/theme.ts).

## App Navigation

The application uses Expo Router and includes tab-based navigation via [src/components/app-tabs.tsx](src/components/app-tabs.tsx).

Navigation includes:

- Home tab for the grocery list
- Explore tab for additional app content

The overall app layout is wrapped in [src/app/\_layout.tsx](src/app/_layout.tsx), which sets up the theme provider and the app shell.

## Installation

1. Open the project folder in your terminal.
2. Install dependencies:

```bash
npm install
```

## Run the Project

Start the Expo development server:

```bash
npx expo start
```

You can then open the app in:

- iOS simulator
- Android emulator
- Expo Go
- Web browser using the web option

## Useful Scripts

These scripts are defined in [package.json](package.json):

```bash
npm start
npm run web
npm run android
npm run ios
npx expo lint
```

## Notes

- The project uses the Expo Router entry point defined in the package configuration.
- It is designed to be mobile-first while also working in a browser.
- The app is a simple demonstration of state-driven UI with React Native components.
- It is a good starting point for a more advanced to-do or shopping list app.

## Website Link

Add your live website link here:

https://your-website-link.com
