/**
 * Application entry point.
 *
 * Bootstraps the React app by mounting the root <App /> component
 * into the #root DOM node defined in index.html.
 */
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)

root.render(<App />)
