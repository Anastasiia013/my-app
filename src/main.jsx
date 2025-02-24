import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App/App.jsx'
import VideoComponent from './components/VideoComponent.jsx'
import ImageComponent from './components/ImageComponent.jsx'
import ParagraphsComponent from './components/ParagraphsComponent.jsx'
import ListsComponent from './components/ListsComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <VideoComponent />
    <ImageComponent />
    <ParagraphsComponent />
    <ListsComponent />
  </StrictMode>,
)
