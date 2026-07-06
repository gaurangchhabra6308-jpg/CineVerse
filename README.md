# 🎬 React Movie App

A modern, responsive movie discovery application built with React, Vite, and Tailwind CSS. Search through thousands of movies, discover trending titles, and explore detailed information powered by The Movie Database (TMDB) API.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwind-css)
![Appwrite](https://img.shields.io/badge/Appwrite-21.5.0-F02E65?logo=appwrite)

## ✨ Features

- 🔍 **Real-time Search** - Search through thousands of movies with debounced input
- 🔥 **Trending Movies** - View the most searched movies based on user activity
- 📊 **Movie Information** - Display ratings, release dates, and language information
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Fully responsive across all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 💾 **Search Analytics** - Track popular searches using Appwrite backend



## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.18
- **Backend/Database:** Appwrite 21.5.0
- **API:** The Movie Database (TMDB) API
- **Utilities:** react-use (for debouncing)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- A TMDB API key
- An Appwrite account and project

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-movie-app.git
   cd react-movie-app/movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the `movie-app` directory:
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your API keys**
   
   Edit `.env.local` with your credentials:

   **Get TMDB API Key:**
   - Visit [TMDB](https://www.themoviedb.org/)
   - Create an account and go to Settings → API
   - Request an API key (choose "Developer" option)
   - Copy your API Read Access Token

   **Set up Appwrite:**
   - Visit [Appwrite Cloud](https://cloud.appwrite.io/)
   - Create a new project
   - Create a database and collection with the following attributes:
     - `searchTerm` (String, required)
     - `count` (Integer, required)
     - `movie_id` (Integer, required)
     - `poster_url` (String, optional)
   - Copy your Project ID, Database ID, and Collection ID

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
movie-app/
├── public/              # Static assets
│   ├── hero.png
│   ├── hero-bg.png
│   ├── search.svg
│   └── star.svg
├── src/
│   ├── components/      # React components
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx          # Main application component
│   ├── appwrite.js      # Appwrite configuration & functions
│   ├── index.css        # Global styles & Tailwind config
│   └── main.jsx         # Application entry point
├── .env.example         # Environment variables template
├── .env.local           # Your local environment variables (not tracked)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_API_KEY` | Your TMDB API Read Access Token | Yes |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite Project ID | Yes |
| `VITE_APPWRITE_DATABASE_ID` | Appwrite Database ID | Yes |
| `VITE_APPWRITE_COLLECTION_ID` | Appwrite Collection ID | Yes |

## 🌟 Features in Detail

### Search Functionality
- Debounced search input (500ms delay) for optimal performance
- Real-time results from TMDB API
- Fallback to popular movies when no search term

### Trending Movies
- Tracks search frequency using Appwrite
- Displays top 10 most searched movies
- Updates dynamically based on user activity

### Movie Cards
- Movie poster with fallback image
- Star rating display
- Release year
- Original language indicator

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd movie-app
   vercel
   ```

3. Add environment variables in Vercel dashboard

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Configure environment variables in Netlify dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📸 Screenshots

### Hero Section
![Hero Section](public/screenshots/demo-hero.png)

### Trending Movies
![Trending Movies](public/screenshots/demo-trending.png)

### Advanced Filtering
![Filter Bar](public/screenshots/demo-filters-1.png)
![Filter Results](public/screenshots/demo-filters-2.png)

### Footer & Pagination
![Footer](public/screenshots/demo-footer.png)

### Movie Details
![Movie Details Modal](public/screenshots/demo-details.png)

## 👤 Author

**Gaurang Chhabra**
- GitHub: [@Github](https://github.com/gaurangchhabra6308-jpg)
- Linkedin: [Linkedin](https://www.linkedin.com/in/gaurang-chhabra-a0429836b/)

## 📧 Contact

For questions or feedback, please reach out at [gaurangchhabra6308@gmail.com](mailto:gaurangchhabra6308@gmail.com)

---

⭐ If you found this project helpful, please consider giving it a star!
