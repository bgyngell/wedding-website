import { useState, useRef, useEffect } from "react";
import { Play, Pause, Heart, Clock, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import BookingForm from "@/components/BookingForm";
import { Helmet } from "react-helmet-async";

interface Song {
  id: string;
  title: string;
  artist: string;
  category: string;
  duration: string;
  audioUrl?: string; // Optional audio preview
}

const Songs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const songs: Song[] = [
    {
      id: "1",
      title: "Perfect",
      artist: "Ed Sheeran",
      category: "Modern Romance",
      duration: "4:23",
      audioUrl: "/audio/perfect.mp3", // Example: some songs have audio
    },
    {
      id: "2",
      title: "All of Me",
      artist: "John Legend",
      category: "Modern Romance",
      duration: "4:29",
      // No audioUrl - this song doesn't have an audio clip
    },
    {
      id: "3",
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      category: "Modern Romance",
      duration: "4:41",
      audioUrl: "/audio/thinking-out-loud.mp3",
    },
    {
      id: "4",
      title: "A Thousand Years",
      artist: "Christina Perri",
      category: "Modern Romance",
      duration: "4:45",
    },
    {
      id: "5",
      title: "Marry Me",
      artist: "Train",
      category: "Modern Romance",
      duration: "4:18",
      audioUrl: "/audio/marry-me.mp3",
    },
    {
      id: "6",
      title: "Can't Help Myself",
      artist: "Four Tops",
      category: "Classic Soul",
      duration: "2:53",
    },
    {
      id: "7",
      title: "My Girl",
      artist: "The Temptations",
      category: "Classic Soul",
      duration: "2:55",
      audioUrl: "/audio/my-girl.mp3",
    },
    {
      id: "8",
      title: "I Will Always Love You",
      artist: "Whitney Houston",
      category: "Classic Love",
      duration: "4:31",
    },
    {
      id: "9",
      title: "Unchained Melody",
      artist: "The Righteous Brothers",
      category: "Classic Love",
      duration: "3:36",
      audioUrl: "/audio/unchained-melody.mp3",
    },
    {
      id: "10",
      title: "At Last",
      artist: "Etta James",
      category: "Jazz Standards",
      duration: "3:01",
      audioUrl: "/audio/at-last.mp3",
    },
    {
      id: "11",
      title: "The Way You Look Tonight",
      artist: "Frank Sinatra",
      category: "Jazz Standards",
      duration: "3:21",
      audioUrl: "/audio/the-way-you-look-tonight.mp3",
    },
    {
      id: "12",
      title: "Fly Me to the Moon",
      artist: "Frank Sinatra",
      category: "Jazz Standards",
      duration: "2:28",
    },
    {
      id: "13",
      title: "L-O-V-E",
      artist: "Nat King Cole",
      category: "Jazz Standards",
      duration: "3:04",
      audioUrl: "/audio/love.mp3",
    },
    {
      id: "14",
      title: "Make You Feel My Love",
      artist: "Bob Dylan",
      category: "Folk & Acoustic",
      duration: "3:32",
    },
    {
      id: "15",
      title: "The Night We Met",
      artist: "Lord Huron",
      category: "Folk & Acoustic",
      duration: "3:28",
      audioUrl: "/audio/the-night-we-met.mp3",
    },
    {
      id: "16",
      title: "Ho Hey",
      artist: "The Lumineers",
      category: "Folk & Acoustic",
      duration: "2:43",
    },
    {
      id: "17",
      title: "Better Days",
      artist: "OneRepublic",
      category: "Feel Good",
      duration: "3:23",
    },
    {
      id: "18",
      title: "Good as Hell",
      artist: "Lizzo",
      category: "Feel Good",
      duration: "2:39",
      audioUrl: "/audio/good-as-hell.mp3",
    },
    {
      id: "19",
      title: "Happy",
      artist: "Pharrell Williams",
      category: "Feel Good",
      duration: "3:53",
    },
    {
      id: "20",
      title: "Can't Stop the Feeling",
      artist: "Justin Timberlake",
      category: "Feel Good",
      duration: "3:56",
      audioUrl: "/audio/cant-stop-the-feeling.mp3",
    },
    {
      id: "21",
      title: "Sweet Caroline",
      artist: "Neil Diamond",
      category: "Sing-Along",
      duration: "3:21",
      audioUrl: "/audio/sweet-caroline.mp3",
    },
    {
      id: "22",
      title: "Don't Stop Me Now",
      artist: "Queen",
      category: "Sing-Along",
      duration: "3:29",
    },
    {
      id: "23",
      title: "Mr. Brightside",
      artist: "The Killers",
      category: "Sing-Along",
      duration: "3:42",
      audioUrl: "/audio/mr-brightside.mp3",
    },
    {
      id: "24",
      title: "Living on a Prayer",
      artist: "Bon Jovi",
      category: "Sing-Along",
      duration: "4:09",
    },
    {
      id: "25",
      title: "Wonderwall",
      artist: "Oasis",
      category: "Sing-Along",
      duration: "4:18",
    },
    {
      id: "26",
      title: "Love Story",
      artist: "Taylor Swift",
      category: "Pop Favourites",
      duration: "3:55",
    },
    {
      id: "27",
      title: "Someone Like You",
      artist: "Adele",
      category: "Pop Favourites",
      duration: "4:45",
      audioUrl: "/audio/someone-like-you.mp3",
    },
    {
      id: "28",
      title: "Stay With Me",
      artist: "Sam Smith",
      category: "Pop Favourites",
      duration: "2:52",
    },
    {
      id: "29",
      title: "Shallow",
      artist: "Lady Gaga & Bradley Cooper",
      category: "Movie Songs",
      duration: "3:35",
      audioUrl: "/audio/shallow.mp3",
    },
    {
      id: "30",
      title: "City of Stars",
      artist: "La La Land Soundtrack",
      category: "Movie Songs",
      duration: "2:06",
    },
    {
      id: "31",
      title: "Something Just Like This",
      artist: "Coldplay & The Chainsmokers",
      category: "Modern Hits",
      duration: "4:07",
    },
    {
      id: "32",
      title: "Blinding Lights",
      artist: "The Weeknd",
      category: "Modern Hits",
      duration: "3:20",
      audioUrl: "/audio/blinding-lights.mp3",
    },
    {
      id: "33",
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      category: "Modern Hits",
      duration: "2:54",
    },
    {
      id: "34",
      title: "Levitating",
      artist: "Dua Lipa",
      category: "Modern Hits",
      duration: "3:23",
      audioUrl: "/audio/levitating.mp3",
    },
    {
      id: "35",
      title: "Here Comes the Sun",
      artist: "The Beatles",
      category: "Timeless Classics",
      duration: "3:05",
      audioUrl: "/audio/here-comes-the-sun.mp3",
    },
    {
      id: "36",
      title: "What a Wonderful World",
      artist: "Louis Armstrong",
      category: "Timeless Classics",
      duration: "2:20",
    },
    {
      id: "37",
      title: "Stand by Me",
      artist: "Ben E. King",
      category: "Timeless Classics",
      duration: "2:58",
      audioUrl: "/audio/stand-by-me.mp3",
    },
    {
      id: "38",
      title: "Moon River",
      artist: "Audrey Hepburn",
      category: "Timeless Classics",
      duration: "2:41",
    },
    {
      id: "39",
      title: "Isn't She Lovely",
      artist: "Stevie Wonder",
      category: "Soul & R&B",
      duration: "6:34",
    },
    {
      id: "40",
      title: "Lovely Day",
      artist: "Bill Withers",
      category: "Soul & R&B",
      duration: "4:15",
      audioUrl: "/audio/lovely-day.mp3",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(songs.map((song) => song.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || song.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle audio playback
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const handleEnded = () => {
        setPlayingId(null);
      };

      const handleError = () => {
        setPlayingId(null);
        console.error("Audio playback error");
      };

      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("error", handleError);

      return () => {
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("error", handleError);
      };
    }
  }, []);

  const handlePlay = (songId: string) => {
    const song = songs.find((s) => s.id === songId);

    if (!song?.audioUrl) {
      return; // Can't play if no audio URL
    }

    if (playingId === songId) {
      // Pause current song
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
    } else {
      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Start new audio
      audioRef.current = new Audio(song.audioUrl);
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setPlayingId(null);
      });

      setPlayingId(songId);
    }
  };

  // Clean up audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleFavorite = (songId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(songId)) {
        newFavorites.delete(songId);
      } else {
        newFavorites.add(songId);
      }
      return newFavorites;
    });
  };

  return (
    <>
      <Helmet>
        <title>Wedding Song List | Robbie Gyngell Repertoire</title>
        <meta
          name="description"
          content="Browse an extensive repertoire of romantic ballads, classic hits, and dance floor favourites for your wedding soundtrack."
        />
        <link rel="canonical" href="https://robbiegyngellweddings.com/songs" />
        <meta
          property="og:title"
          content="Wedding Song List | Robbie Gyngell Repertoire"
        />
        <meta
          property="og:description"
          content="Browse an extensive repertoire of romantic ballads, classic hits, and dance floor favourites for your wedding soundtrack."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-colour-2 pt-16 pb-8 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Song Repertoire
            </h1>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my extensive collection of wedding Favourites. From
              romantic ballads to dance floor anthems, find the perfect
              soundtrack for your special day.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="pb-8 pt-24 px-4 bg-card border-b relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px]"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className="fill-colour-2"
              ></path>
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 min-w-[200px] max-w-md">
                <Input
                  placeholder="Search songs or artists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-sans transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Song List */}
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSongs.map((song) => (
                <Card
                  key={song.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-5">
                      {song.audioUrl ? (
                        <button
                          onClick={() => handlePlay(song.id)}
                          className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                          title="Play preview"
                        >
                          {playingId === song.id ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5 ml-0.5" />
                          )}
                        </button>
                      ) : (
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center"
                          title="No preview available"
                        >
                          <Music className="h-5 w-5" />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-semibold text-foreground truncate">
                          {song.title}
                        </h3>
                        <p className="font-sans text-sm text-muted-foreground truncate">
                          {song.artist}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-sans text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                            {song.category}
                          </span>
                          {song.audioUrl && (
                            <span className="font-sans text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {song.duration}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleFavorite(song.id)}
                        className="flex-shrink-0 transition-colors"
                      >
                        <Heart
                          className={`h-5 w-5 cursor-pointer transition-colors ${
                            favorites.has(song.id)
                              ? "text-red-500 fill-red-500"
                              : "text-muted-foreground hover:text-red-500"
                          }`}
                        />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredSongs.length === 0 && (
              <div className="text-center py-12">
                <p className="font-sans text-muted-foreground">
                  No songs found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Note about custom requests */}
        <section className="py-8 px-4 bg-colour-2">
          <div className="container mx-auto text-center mt-4">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Don't See Your Song?
              </h3>
              <p className="font-sans text-muted-foreground">
                This is just a sample of my repertoire! I'm always happy to
                learn new songs for your special day. Include your song requests
                in the booking form below, and I'll let you know if I can
                accommodate them.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pt-24 pb-16 px-4 bg-foreground relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px]"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className="fill-colour-2"
              ></path>
            </svg>
          </div>
          <div className="container mx-auto">
            <BookingForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default Songs;
