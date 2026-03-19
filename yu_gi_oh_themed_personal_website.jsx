import { useState } from "react";
import { motion } from "framer-motion";

const starterDeck = [
  "Blue-Eyes White Dragon",
  "Dark Magician",
  "Ash Blossom",
  "Maxx C",
  "Obelisk",
];

export default function DuelistSite() {
  const [showCards, setShowCards] = useState(false);
  const [lifePoints, setLifePoints] = useState(8000);
  const [deck, setDeck] = useState(starterDeck);
  const [hand, setHand] = useState([]);

  const drawCard = () => {
    if (deck.length === 0) return;
    const card = deck[Math.floor(Math.random() * deck.length)];
    setHand([...hand, card]);
  };

  const takeDamage = () => {
    setLifePoints((lp) => Math.max(lp - 500, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-blue-300">
      {/* HERO BANNER */}
      <div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/428538.jpg"
          alt="Duelist"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-blue-400 drop-shadow-lg">
            Martian M2
          </h1>
          <p className="text-xl mt-2">Kaiba Corp Elite Duelist</p>
        </div>
      </div>

      {/* DUEL DISK UI */}
      <div className="p-6 border-t border-blue-500">
        <h2 className="text-2xl mb-4 text-center">Duel Disk</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl">Life Points: {lifePoints}</div>
          <div className="flex gap-4">
            <button
              onClick={drawCard}
              className="bg-blue-600 px-4 py-2 rounded-xl hover:scale-105"
            >
              Draw Card
            </button>
            <button
              onClick={takeDamage}
              className="bg-red-600 px-4 py-2 rounded-xl hover:scale-105"
            >
              Take Damage
            </button>
          </div>

          {/* HAND */}
          <div className="flex gap-3 mt-4">
            {hand.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-black border border-blue-400 p-3 rounded-lg shadow-lg"
              >
                {card}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CARD BATTLE AREA */}
      <div className="p-6 border-t border-blue-500 text-center">
        <h2 className="text-2xl mb-4">Battle Arena</h2>
        <button
          onClick={() => setShowCards(!showCards)}
          className="bg-purple-600 px-6 py-3 rounded-xl hover:scale-105"
        >
          Summon Monster
        </button>

        {showCards && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 text-3xl"
          >
            ⚡ DARK MAGICIAN ATTACKS ⚡
          </motion.div>
        )}
      </div>

      {/* DECK BUILDER */}
      <div className="p-6 border-t border-blue-500">
        <h2 className="text-2xl mb-4 text-center">Deck Builder</h2>
        <div className="flex justify-center gap-2 mb-4">
          <input
            id="cardInput"
            placeholder="Add card"
            className="px-3 py-2 text-black"
          />
          <button
            onClick={() => {
              const input = document.getElementById("cardInput");
              if (!input.value) return;
              setDeck([...deck, input.value]);
              input.value = "";
            }}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {deck.map((card, i) => (
            <div
              key={i}
              className="bg-black border border-blue-400 p-3 rounded text-center"
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center p-6 border-t border-blue-500">
        <p>© 2026 Martian M2 • Kaiba Corp Systems</p>
      </div>
    </div>
  );
}
