import { useState } from 'react'
import { initialTracks, type Track } from './data'
import { Match } from './components/Match'

function App() {
  // Текущие треки в раунде (начинаем со всех 4)
  const [currentRound, setCurrentRound] = useState<Track[]>(initialTracks)
  // Индекс текущего матча внутри раунда
  const [matchIndex, setMatchIndex] = useState(0)
  // Победители текущего раунда (собираются по ходу)
  const [roundWinners, setRoundWinners] = useState<Track[]>([])
  // Номер раунда (1 = полуфинал, 2 = финал)
  const [roundNumber, setRoundNumber] = useState(1)
  // Финальный чемпион
  const [champion, setChampion] = useState<Track | null>(null)

  // Функция выбора победителя матча
  const handleSelect = (selectedTrack: Track) => {
    const newWinners = [...roundWinners, selectedTrack]
    setRoundWinners(newWinners)

    // Проверяем, закончился ли текущий раунд
    const matchesInRound = currentRound.length / 2
    if (matchIndex + 1 >= matchesInRound) {
      // Раунд окончен!
      if (newWinners.length === 1) {
        // Это был финал — у нас есть чемпион!
        setChampion(newWinners[0])
      } else {
        // Переходим к следующему раунду
        setCurrentRound(newWinners)
        setRoundWinners([])
        setMatchIndex(0)
        setRoundNumber(roundNumber + 1)
      }
    } else {
      // Просто переходим к следующему матчу в этом раунде
      setMatchIndex(matchIndex + 1)
    }
  }

  // Функция "Начать заново"
  const handleRestart = () => {
    setCurrentRound(initialTracks)
    setMatchIndex(0)
    setRoundWinners([])
    setRoundNumber(1)
    setChampion(null)
  }

  // Определяем название раунда
  const getRoundName = () => {
    if (currentRound.length === 4) return "Полуфинал"
    if (currentRound.length === 2) return "Финал"
    return "Матч"
  }

  // ЭКРАН ЧЕМПИОНА 🏆
  if (champion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 flex flex-col items-center justify-center text-white">
        <div className="text-8xl mb-8 animate-bounce">🏆</div>
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-center bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
          ЧЕМПИОН!
        </h1>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-yellow-400 text-center shadow-2xl max-w-md w-full mt-8">
          <img 
            src={champion.cover} 
            alt={champion.title} 
            className="w-56 h-56 object-cover rounded-2xl mx-auto mb-6 shadow-2xl border-4 border-yellow-400" 
          />
          <h2 className="text-4xl font-bold mb-2">{champion.title}</h2>
          <p className="text-xl text-purple-200 mb-8">{champion.artist}</p>
          <button 
            onClick={handleRestart}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-2xl text-lg"
          >
            🔄 Начать турнир заново
          </button>
        </div>
      </div>
    )
  }

  // Определяем два трека для текущего матча
  const track1 = currentRound[matchIndex * 2]
  const track2 = currentRound[matchIndex * 2 + 1]

  // Основной экран битвы
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-4 drop-shadow-lg tracking-tight">
          🏆 Музыкальный Кубок 2026
        </h1>
        <div className="flex justify-center gap-3 mb-12">
          <span className="bg-white/20 backdrop-blur-md text-white font-bold py-2 px-6 rounded-full border border-white/30">
            {getRoundName()}
          </span>
          <span className="bg-white/10 backdrop-blur-md text-purple-200 py-2 px-6 rounded-full border border-white/20">
            Матч {matchIndex + 1} из {currentRound.length / 2}
          </span>
        </div>
        
        <Match track1={track1} track2={track2} onSelect={handleSelect} />
      </div>
    </div>
  )
}

export default App