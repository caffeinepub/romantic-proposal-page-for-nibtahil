import { useState } from 'react';
import ProposalButtons from './components/ProposalButtons';
import { Heart } from 'lucide-react';

function App() {
  const [showImage, setShowImage] = useState(false);

  const handleYesClick = () => {
    setShowImage(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-10 left-10 text-romantic-light opacity-20 w-12 h-12 animate-pulse" />
        <Heart className="absolute top-20 right-20 text-romantic-medium opacity-30 w-16 h-16 animate-pulse delay-100" />
        <Heart className="absolute bottom-20 left-20 text-romantic-light opacity-25 w-10 h-10 animate-pulse delay-200" />
        <Heart className="absolute bottom-32 right-32 text-romantic-medium opacity-20 w-14 h-14 animate-pulse delay-300" />
      </div>

      {!showImage ? (
        <main className="text-center z-10 max-w-2xl w-full">
          {/* Main question */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-romantic-dark mb-4 leading-tight">
              Nibtahil,
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-romantic-medium">
              Will you be mine?
            </h2>
          </div>

          {/* Buttons */}
          <ProposalButtons onYesClick={handleYesClick} />
        </main>
      ) : (
        <main className="text-center z-10 max-w-4xl w-full px-4">
          {/* Success message */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-romantic-dark mb-4">
              I knew you'd say yes! 💕
            </h1>
          </div>

          {/* Romantic emoji image */}
          <div className="flex justify-center items-center animate-scale-in">
            <img
              src="/assets/generated/431bcc9e2ede8fba6459866eea92d85f.jpg"
              alt="Romantic celebration"
              className="max-w-full h-auto rounded-3xl shadow-2xl max-h-[70vh] object-contain"
            />
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="absolute bottom-4 text-center text-sm text-romantic-medium/60 z-10">
        <p>
          Built with <Heart className="inline w-4 h-4 text-romantic-medium fill-current" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              window.location.hostname || 'romantic-proposal'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-romantic-dark transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
