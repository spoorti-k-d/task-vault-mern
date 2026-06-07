import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import CSS file in App.jsx
import './App.css'

import App from './App.jsx'

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  // Log the error
  console.error('Error rendering App component:', error);
  // You can also use a monitoring service like Sentry or Bugsnag to track the error
  // For example:
  // Sentry.captureException(error);
}

// You can also add a fallback component to render when the App component fails to render
const FallbackComponent = () => {
  return <div>Error rendering App component</div>;
};

// You can use the FallbackComponent in the catch block
catch (error) {
  // Log the error
  console.error('Error rendering App component:', error);
  // Render the fallback component
  createRoot(rootElement).render(
    <StrictMode>
      <FallbackComponent />
    </StrictMode>,
  );
}