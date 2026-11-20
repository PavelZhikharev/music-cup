import type { Track } from '../data'

interface MatchProps {
  track1: Track
  track2: Track
  onSelect: (winner: Track) => void
}

export function Match({ track1, track2, onSelect }: MatchProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center relative">
        
        {/* Красивый значок VS (по центру на компьютере, между карточками на телефоне) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl border-4 border-purple-900">
          <span className="text-3xl font-black text-white italic">VS</span>
        </div>

        {/* Трек 1 */}
        <div 
          onClick={() => onSelect(track1)}
          className="w-full sm:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/20 hover:border-purple-400 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={track1.cover} 
            alt={track1.title} 
            className="w-full aspect-square object-cover rounded-2xl mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300 relative z-10" 
          />
          <h3 className="text-white font-bold text-2xl mb-1 relative z-10">{track1.title}</h3>
          <p className="text-purple-200 text-lg mb-4 relative z-10">{track1.artist}</p>
          <audio controls className="w-full relative z-10 rounded-lg" src={track1.audioUrl}>
            Ваш браузер не поддерживает аудио.
          </audio>
        </div>

        {/* Значок VS для мобильных телефонов */}
        <div className="sm:hidden flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl border-4 border-purple-900 my-2">
          <span className="text-2xl font-black text-white italic">VS</span>
        </div>

        {/* Трек 2 */}
        <div 
          onClick={() => onSelect(track2)}
          className="w-full sm:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/20 hover:border-pink-400 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={track2.cover} 
            alt={track2.title} 
            className="w-full aspect-square object-cover rounded-2xl mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300 relative z-10" 
          />
          <h3 className="text-white font-bold text-2xl mb-1 relative z-10">{track2.title}</h3>
          <p className="text-purple-200 text-lg mb-4 relative z-10">{track2.artist}</p>
          <audio controls className="w-full relative z-10 rounded-lg" src={track2.audioUrl}>
            Ваш браузер не поддерживает аудио.
          </audio>
        </div>
      </div>

      <p className="text-center text-white/70 mt-12 text-lg font-medium animate-pulse">
        👆 Кликни на карточку трека, чтобы выбрать победителя
      </p>
    </div>
  )
}