import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Plus, 
  ThumbsUp, 
  Info, 
  Search, 
  Bell, 
  User, 
  ArrowLeft,
  Star,
  Calendar,
  Clock,
  X,
  Eye,
  EyeOff
} from 'lucide-react';

// Import Netflix movie posters
import strangerThingsImg from '@/assets/netflix/stranger-things.jpg';
import theCrownImg from '@/assets/netflix/the-crown.jpg';
import blackMirrorImg from '@/assets/netflix/black-mirror.jpg';
import moneyHeistImg from '@/assets/netflix/money-heist.jpg';
import theWitcherImg from '@/assets/netflix/the-witcher.jpg';
import ozarkImg from '@/assets/netflix/ozark.jpg';
import wednesdayImg from '@/assets/netflix/wednesday.jpg';
import squidGameImg from '@/assets/netflix/squid-game.jpg';
import bridgertonImg from '@/assets/netflix/bridgerton.jpg';
import darkImg from '@/assets/netflix/dark.jpg';
import narcosImg from '@/assets/netflix/narcos.jpg';

interface Movie {
  id: number;
  title: string;
  description: string;
  year: number;
  rating: string;
  duration: string;
  genre: string[];
  thumbnail: string;
  banner: string;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
}

const NetflixClone = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Sample movie data
  const movies: Movie[] = [
    {
      id: 1,
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      year: 2023,
      rating: "TV-14",
      duration: "55m",
      genre: ["Sci-Fi", "Horror", "Drama"],
      thumbnail: strangerThingsImg,
      banner: strangerThingsImg,
      featured: true,
      trending: true,
      popular: true
    },
    {
      id: 2,
      title: "The Crown",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      year: 2023,
      rating: "TV-MA",
      duration: "58m",
      genre: ["Drama", "Biography", "History"],
      thumbnail: theCrownImg,
      banner: theCrownImg,
      trending: true,
      popular: true
    },
    {
      id: 3,
      title: "Ozark",
      description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
      year: 2022,
      rating: "TV-MA",
      duration: "60m",
      genre: ["Crime", "Drama", "Thriller"],
      thumbnail: ozarkImg,
      banner: ozarkImg,
      popular: true
    },
    {
      id: 4,
      title: "Wednesday",
      description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.",
      year: 2023,
      rating: "TV-14",
      duration: "50m",
      genre: ["Comedy", "Horror", "Mystery"],
      thumbnail: wednesdayImg,
      banner: wednesdayImg,
      trending: true
    },
    {
      id: 5,
      title: "Money Heist",
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      year: 2021,
      rating: "TV-MA",
      duration: "70m",
      genre: ["Action", "Crime", "Drama"],
      thumbnail: moneyHeistImg,
      banner: moneyHeistImg,
      popular: true
    },
    {
      id: 6,
      title: "Squid Game",
      description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
      year: 2022,
      rating: "TV-MA",
      duration: "60m",
      genre: ["Thriller", "Drama", "Action"],
      thumbnail: squidGameImg,
      banner: squidGameImg,
      trending: true,
      popular: true
    },
    {
      id: 7,
      title: "Bridgerton",
      description: "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
      year: 2023,
      rating: "TV-MA",
      duration: "65m",
      genre: ["Drama", "Romance"],
      thumbnail: bridgertonImg,
      banner: bridgertonImg,
      popular: true
    },
    {
      id: 8,
      title: "The Witcher",
      description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      year: 2023,
      rating: "TV-MA",
      duration: "60m",
      genre: ["Fantasy", "Action", "Adventure"],
      thumbnail: theWitcherImg,
      banner: theWitcherImg,
      trending: true
    },
    {
      id: 9,
      title: "Black Mirror",
      description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      year: 2021,
      rating: "TV-MA",
      duration: "60m",
      genre: ["Sci-Fi", "Thriller", "Drama"],
      thumbnail: blackMirrorImg,
      banner: blackMirrorImg,
      popular: true
    },
    {
      id: 10,
      title: "Dark",
      description: "A family saga with a supernatural twist, set in a German town where the disappearance of children exposes the relationships among four families.",
      year: 2020,
      rating: "TV-MA",
      duration: "60m",
      genre: ["Sci-Fi", "Mystery", "Thriller"],
      thumbnail: darkImg,
      banner: darkImg,
      trending: true
    },
    {
      id: 11,
      title: "Narcos",
      description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
      year: 2019,
      rating: "TV-MA",
      duration: "50m",
      genre: ["Crime", "Biography", "Drama"],
      thumbnail: narcosImg,
      banner: narcosImg,
      popular: true
    }
  ];

  const featuredMovie = movies.find(movie => movie.featured) || movies[0];

  // Filter movies based on search query
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Mock login
      setIsLoggedIn(true);
      setShowAuth(false);
    } else {
      // Mock signup
      if (authForm.password === authForm.confirmPassword) {
        setIsLoggedIn(true);
        setShowAuth(false);
      } else {
        alert('Passwords do not match');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthForm({ email: '', password: '', confirmPassword: '' });
  };

  const MovieCard = ({ movie, size = 'normal' }: { movie: Movie; size?: 'small' | 'normal' | 'large' }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardSizes = {
      small: 'w-32 h-48',
      normal: 'w-48 h-72',
      large: 'w-64 h-96'
    };

    return (
      <div
        className={`${cardSizes[size]} flex-shrink-0 relative cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-20`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setSelectedMovie(movie)}
      >
        <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-black/60 rounded-lg overflow-hidden relative">
          <img 
            src={movie.thumbnail} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-semibold text-sm mb-1 truncate">{movie.title}</h3>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Badge variant="outline" className="bg-red-600 text-white border-red-600 text-xs">
                {movie.rating}
              </Badge>
              <span>{movie.year}</span>
            </div>
          </div>

          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Play className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MovieRow = ({ title, movies: rowMovies }: { title: string; movies: Movie[] }) => (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4 px-4 md:px-16">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-2">
        {rowMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );

  const MovieModal = ({ movie, onClose }: { movie: Movie; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-red-900/20 to-black/60 relative overflow-hidden">
            <img 
              src={movie.banner} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="absolute bottom-8 left-8">
              <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
              <div className="flex gap-4 mb-6">
                <Button className="bg-white text-black hover:bg-gray-200">
                  <Play className="h-5 w-5 mr-2" />
                  Play
                </Button>
                <Button variant="ghost" className="bg-gray-600/50 text-white hover:bg-gray-600/70">
                  <Plus className="h-5 w-5 mr-2" />
                  My List
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-green-500 font-semibold">94% Match</span>
                  </div>
                  <Badge variant="outline" className="bg-red-600 text-white border-red-600">
                    {movie.rating}
                  </Badge>
                  <span className="text-gray-400">{movie.year}</span>
                  <span className="text-gray-400">{movie.duration}</span>
                </div>
                
                <p className="text-gray-300 text-lg mb-6">{movie.description}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Genres: </span>
                  <span className="text-white">{movie.genre.join(', ')}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Rate
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Watchlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          <div className="flex items-center gap-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
            
            <div className="text-2xl font-bold text-red-600">NETFLIX</div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input 
                placeholder="Search titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 bg-black/50 border-white/20 text-white placeholder:text-gray-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </Button>
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" onClick={handleLogout} className="text-white hover:text-gray-300">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={() => setShowAuth(true)} className="bg-red-600 hover:bg-red-700">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={featuredMovie.banner} 
            alt={featuredMovie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative z-10 px-4 md:px-16 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{featuredMovie.title}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">{featuredMovie.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-green-500 font-semibold">96% Match</span>
            </div>
            <Badge variant="outline" className="bg-red-600 text-white border-red-600">
              {featuredMovie.rating}
            </Badge>
            <span className="text-gray-400">{featuredMovie.year}</span>
            <span className="text-gray-400">{featuredMovie.duration}</span>
          </div>
          
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <Play className="h-6 w-6 mr-3" />
              Play
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="bg-gray-600/50 text-white hover:bg-gray-600/70"
              onClick={() => setSelectedMovie(featuredMovie)}
            >
              <Info className="h-6 w-6 mr-3" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="relative z-10 -mt-32">
        {searchQuery ? (
          <div className="px-4 md:px-16 mb-8">
            <h2 className="text-white text-2xl font-semibold mb-6">
              Search Results for "{searchQuery}"
            </h2>
            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No movies found for "{searchQuery}"</p>
                <p className="text-gray-500 text-sm mt-2">Try different keywords</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <MovieRow title="Trending Now" movies={movies.filter(m => m.trending)} />
            <MovieRow title="Popular on Netflix" movies={movies.filter(m => m.popular)} />
            <MovieRow title="Only on Netflix" movies={movies.slice(0, 6)} />
            <MovieRow title="Continue Watching" movies={movies.slice(2, 8)} />
            <MovieRow title="New Releases" movies={movies.slice(1, 7)} />
            <MovieRow title="Top Picks for You" movies={movies.slice(3, 8)} />
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/90 mt-16 px-4 md:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Investor Relations</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Ways to Watch</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Jobs</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Corporate Information</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Account</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Netflix Shop</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Use</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Media Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>© 2024 Netflix Clone Demo by ANURAG</p>
          </div>
        </div>
      </footer>

      {/* Authentication Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-white/20 rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </h2>
              <Button 
                variant="ghost" 
                onClick={() => setShowAuth(false)}
                className="text-white hover:text-gray-300 p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={authForm.email}
                  onChange={(e) => setAuthForm(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm(prev => ({ ...prev, password: e.target.value }))}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              
              {!isLogin && (
                <div>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={authForm.confirmPassword}
                    onChange={(e) => setAuthForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              )}
              
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400">
                {isLogin ? "New to Netflix? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-white hover:underline"
                >
                  {isLogin ? "Sign up now" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Movie Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default NetflixClone;