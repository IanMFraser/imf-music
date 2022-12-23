import React from 'react'
import News from './News'
import Music from './Music'
import Contact from './Contact'
import Home from './Home'

const routes = [
    { path: '/music/news', component: () => <News /> },
    { path: '/music/albums', component: () => <Music /> },
    { path: '/music/contact', component: () => <Contact /> },
    { path: '/music', component: () => <Home /> },
]

export default routes
