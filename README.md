# 🏋️ Workout App

A mobile workout management application built with **React Native and Expo**, designed to help users organize workout plans, exercises, and training sessions from a mobile device.

> 🚧 **Project status: In Development**
>
> This project is being developed as part of my software development portfolio, with a focus on mobile application development, REST API integration, authentication, and clean application architecture.

## 📱 About the Project

Workout App is a mobile application that allows users to manage their training routines and keep track of their workouts.

The application communicates with a dedicated **Laravel REST API** for authentication, workout plans, exercises, and training data.

The project is being developed with a **mobile-first approach**, focusing on a clean and maintainable architecture.

## ✨ Planned Features

* 🔐 User authentication
* 👤 User profile
* 🏋️ Exercise catalog
* 📋 Workout plan management
* 🔢 Sets, repetitions, and rest periods
* 📅 Workout sessions
* 📊 Training progress
* 💾 Persistent authentication
* 🌐 REST API integration
* 🔄 API error handling
* 📱 Responsive mobile interface

Additional features will be added as development continues.

## 🛠️ Tech Stack

### Mobile

* **React Native**
* **Expo**
* **Expo Router**
* **TypeScript**
* **Zustand**
* **Axios**
* **React Native Safe Area Context**
* **React Navigation**

### Backend

The mobile application consumes a separate Laravel REST API.

* **Laravel**
* **PHP**
* **Laravel Passport**
* **PostgreSQL**
* **REST API**

## 🏗️ Architecture

The application follows a service-oriented structure to keep API communication separate from the UI and application state.

```text
React Native / Expo
        │
        ├── Screens
        ├── Components
        ├── Zustand Stores
        └── Services
              │
              ▼
            Axios
              │
              ▼
       Laravel REST API
              │
              ▼
          PostgreSQL
```

## 🔐 Authentication

Authentication is handled through the Laravel API.

After a successful login, the API returns an authentication token that is used to access protected resources.

The mobile application uses Axios as the HTTP client and is structured to centralize authenticated API requests.

## 📂 Project Structure

```text
app/
├── (auth)/
│   ├── login.tsx
│   └── ...
│
├── (tabs)/
│   ├── index.tsx
│   ├── workouts.tsx
│   └── ...
│
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── workoutService.ts
│   └── ...
│
├── stores/
│   ├── authStore.ts
│   └── ...
│
└── components/
    └── ...
```

> The structure may change as the project evolves.

## 🚀 Getting Started

### Requirements

* Node.js
* npm
* Expo CLI / Expo Go
* Android Studio or a physical mobile device
* Running instance of the Workout API

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Run the application using Expo Go, Android Emulator, or another supported Expo environment.

## 🔗 Backend API

This application uses a dedicated Laravel backend:

**Workout API**

> Repository: `<api-repository-url>`

The API must be running and accessible from the mobile development environment.

## 🗺️ Development Roadmap

* [x] Expo project setup
* [x] Expo Router configuration
* [x] Authentication screens
* [x] Axios API client
* [x] Login API integration
* [ ] Persistent authentication
* [ ] Automatic authentication headers
* [ ] Exercise catalog
* [ ] Workout plans
* [ ] Workout sessions
* [ ] Progress tracking
* [ ] UI/UX refinement
* [ ] Production deployment

## 🎯 Portfolio Goals

This project is being developed to demonstrate practical experience with:

* React Native mobile development
* Expo and Expo Router
* TypeScript
* REST API integration
* Authentication
* State management
* Service-based architecture
* Laravel API consumption
* PostgreSQL-backed applications
* Mobile application architecture

## 📌 Project Status

**In Development 🚧**

The application is actively being developed and features may change as new functionality is implemented.
