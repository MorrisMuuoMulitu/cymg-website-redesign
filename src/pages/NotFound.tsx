import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-6"
      style={{ backgroundColor: 'var(--paper)' }}
    >
      <div className="text-center max-w-[600px]">
        <h1
          className="font-display font-bold leading-none mb-4"
          style={{
            color: 'var(--assembly-blue)',
            fontSize: 'clamp(6rem, 15vw, 12rem)',
          }}
        >
          404
        </h1>
        <p className="text-body-lg mb-2" style={{ color: 'var(--ink)' }}>
          This page seems to have wandered off — much like a lost resolution in committee.
        </p>
        <p className="text-sm mb-10" style={{ color: 'var(--ink-60)' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-pill inline-flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--assembly-blue)', color: 'var(--paper)' }}
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            to="/working-groups"
            className="btn-pill inline-flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line)' }}
          >
            Working Groups <ArrowRight size={16} />
          </Link>
          <Link
            to="/unea-and-core-processes"
            className="btn-pill inline-flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line)' }}
          >
            UNEA Hub <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
