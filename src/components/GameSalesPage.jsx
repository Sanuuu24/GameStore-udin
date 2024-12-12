import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ShoppingCart, Star, Award, User } from 'lucide-react'
import monyet from '/public/wukong.jpg'
import elden from '/public/elden-ring.jpg'
import jiwa from '/public/dark-soul.jpg'


const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login dengan:', email)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required 
            />
          </div>
          <div className="flex justify-between items-center">
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Login
            </button>
            <button 
              type="button" 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const GameSalesPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const featuredGames = [
    {
      id: 1,
      title: "Black Myth Wukong",
      description: "Game aksi RPG yang memukau ini terinspirasi dari kisah klasik 'Journey to the West'. Pemain akan mengendalikan Sun Wukong dengan grafis yang sangat realistis dan pertarungan epik melawan makhluk mitologi. Dirilis pada platform utama seperti PS5, Xbox, dan PC.",
      price: 599.000,
      rating: 4.7,
      imageUrl: monyet
    },
    {
      id: 2,
      title: "Elden Ring",
      description: "RPG aksi epik dari FromSoftware yang menggabungkan dunia terbuka luas dengan lore kaya oleh George R.R. Martin. Pemain menjelajahi Lands Between dengan kebebasan penuh, menghadapi bos legendaris, dan membangun karakter unik. Tersedia di PS5, Xbox, dan PC.",
      price: 599.000,
      rating: 4.5,
      imageUrl: elden
    },
    {
      id: 3,
      title: "Dark Souls II",
      description: "Bagian dari seri ikonik Dark Souls, game ini menawarkan pengalaman brutal dengan dunia kelam, tantangan tinggi, dan narasi tersembunyi. Gameplay intens menuntut strategi dan kesabaran, menjadikannya favorit penggemar hardcore.",
      price: 499.000,
      rating: 4.8,
      imageUrl: jiwa
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
  
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

      <header 
        className="bg-gray-800 p-4 shadow-md"
        data-aos="fade-down"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-300">UdinStore</h1>
          <nav className="flex space-x-4 items-center">
            <a href="#" className="hover:text-blue-300">Home</a>
            <a href="#" className="hover:text-blue-300">Games</a>
            <a href="#" className="hover:text-blue-300">About</a>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-purple-600 hover:bg-blue-300 text-white px-3 py-1 rounded-full flex items-center space-x-2"
            >
              <User size={16} />
              <span>Login</span>
            </button>
          </nav>
        </div>
      </header>

    
      <section 
        className="container mx-auto px-4 py-16 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-extrabold mb-4">Temukan Game Terbaik Anda</h2>
        <p className="text-xl text-gray-300 mb-8">Koleksi game terkini dengan harga terbaik</p>
        <button className="bg-purple-600 hover:bg-blue-300 text-white px-6 py-3 rounded-full transition">
          Jelajahi Koleksi
        </button>
      </section>

     
      <section className="container mx-auto px-4 py-12">
        <h3 
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          Tren Game
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <div 
              key={game.id} 
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
            >
              <img 
                src={game.imageUrl} 
                alt={game.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{game.title}</h4>
                <p className="text-gray-300 mb-4">{game.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold mr-2">Rp {game.price.toLocaleString()}</span>
                    <button className="bg-green-600 hover:bg-green-700 p-2 rounded-full">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="container mx-auto px-4 py-12 text-center">
        <h3 
          className="text-3xl font-bold mb-12"
          data-aos="fade-up"
        >
          Mengapa Memilih Kami
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="bg-gray-800 p-6 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Award className="mx-auto mb-4 text-blue-500" size={64} />
            <h4 className="text-xl font-bold mb-4">Kualitas Terjamin</h4>
            <p className="text-gray-300">Game Original Dan Mendapat Lissensi Yang Lengkap</p>
          </div>
          <div 
            className="bg-gray-800 p-6 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <ShoppingCart className="mx-auto mb-4 text-green-500" size={64} />
            <h4 className="text-xl font-bold mb-4">Mudah Dibeli</h4>
            <p className="text-gray-300">Proses pembelian cepat dan aman</p>
          </div>
          <div 
            className="bg-gray-800 p-6 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <Star className="mx-auto mb-4 text-yellow-500" size={64} />
            <h4 className="text-xl font-bold mb-4">Dukungan Pelanggan</h4>
            <p className="text-gray-300">Tim dukungan siap membantu 24/7</p>
          </div>
        </div>
      </section>

     
      <footer 
        className="bg-gray-800 py-8"
        data-aos="fade-up"
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2024 UdinStore. Hak Cipta Dilindungi.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-300">Privasi</a>
            <a href="#" className="hover:text-blue-300">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-blue-300">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GameSalesPage