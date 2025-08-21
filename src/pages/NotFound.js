// src/pages/NotFound.js
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4">
      <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="btn btn-primary px-6 py-2 rounded-lg shadow-md">
        Back to Home
      </Link>
    </div>
  );
}
