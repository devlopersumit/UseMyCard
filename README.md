# UseMyCard

A modern web application to manage, track, and understand your card benefits—all in one place.

## 🚀 Features

- Add and manage your cards
- View card benefits and usage logs
- User authentication and secure data storage
- Responsive dashboard and clean UI
- FAQ and support section

## 🛠️ Tech Stack

- **React** (with functional components and hooks)
- **Vite** (for fast development and builds)
- **Tailwind CSS** (utility-first styling)
- **Supabase** (backend/database and authentication)
- **Context API** (global state management)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/usemycard.git
   cd usemycard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Supabase:**
   - Create a project at [Supabase](https://supabase.com/)
   - Copy your project URL and anon/public API key
   - Replace the placeholders in `src/supabaseClient.js`:
     ```js
     const supabaseUrl = "https://your-project.supabase.co";
     const supabaseAnonKey = "your-anon-key";
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in your browser:**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
  Components/      # Reusable UI components
  pages/           # Main app pages (Dashboard, AddCard, etc.)
  providers/       # Context providers (global state)
  supabaseClient.js# Supabase client setup
  App.jsx          # Main app component
  main.jsx         # Entry point
```

## 🤓 Key Concepts

- **Context API** for global state (see `src/providers/CardContext.jsx`)
- **Supabase** for backend and authentication (see `src/supabaseClient.js`)
- **Tailwind CSS** for rapid UI development

## 📄 License

[MIT](LICENSE)
