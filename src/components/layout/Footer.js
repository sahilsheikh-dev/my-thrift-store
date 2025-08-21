import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-pink-200 text-center py-6">
      <p className="text-gray-700 mb-3">
        © {year} Girl's Thrift Store • Sustainable fashion for girls only
      </p>

      <div className="flex justify-center gap-6">
        <Link to="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </Link>
      </div>
    </footer>
  );
}
