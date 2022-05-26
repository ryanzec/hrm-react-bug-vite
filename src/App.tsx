import { useState, lazy, Suspense } from 'react'
import logo from './logo.svg'
import './App.css'

const HomePage = lazy(() => import('./HomePage'));

export const test = () => {};

export function App() {
  return (<Suspense fallback="loading..."><HomePage /></Suspense>);
}

export default App
