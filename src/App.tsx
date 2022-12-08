import './styles/main.css';
import logoImg from './assets/logo-player.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import * as Dialog from '@radix-ui/react-dialog';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games/').then(res => {
      setGames(res.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-6">
      <img className="w-80" src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Não <span className="bg-esport-gradient bg-clip-text text-transparent">jogue</span> sozinho.
      </h1>

      <div className="flex flex-col-reverse lg:flex-col md:flex-col-reverse sm:flex-col-reverse">
        <div className="grid  gap-6 mt-16 justify-center lg:grid-cols-6 md:grid-cols-3">
          {games.map(game => {
            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            )
          })}

        </div>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  )
}

export default App
