import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="inline-flex p-4 rounded-full bg-red-100 text-red-600 mb-6">
          <AlertCircle className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            Or try one of these pages:
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              About Us
            </Link>
            <Link href="/gallery" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Gallery
            </Link>
            <Link href="/profiles" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Our Team
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
