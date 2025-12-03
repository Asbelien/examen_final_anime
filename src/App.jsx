import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import AnimeDetailPage from './pages/AnimeDetailPage';
import AnimesPage from './pages/AnimesPage';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
       
          <Route path="/animes" element={<AnimesPage />} />

          <Route path="/animes/:id" element={<AnimeDetailPage />} />

          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
