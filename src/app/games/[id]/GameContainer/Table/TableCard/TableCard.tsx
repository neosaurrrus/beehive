import { type Player } from "@/types";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function TableCard({
  player,
  isRevealed,
  isCurrentPlayer,
}: {
  player: Player;
  isRevealed: boolean;
  isCurrentPlayer: boolean;
}) {
  const { score, name } = player;

  return (
    <motion.div
      className={`bg-accent text-darkText text-center font-medium w-32 h-40 rounded-lg
         flex flex-col justify-evenly items-center shadow-2xl m-2 p-2 pt-12 gap-8 duration-200 ${spaceGrotesk.className}`}
      initial={{
        scale: 1.5,
        opacity: 0,
        rotate: 90,
        translateY: -100,
        translateX: -50,
      }}
      animate={{
        rotate: 0,
        opacity: 1,
        scale: 1,
        translateY: 0,
        translateX: 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`text-[4rem]  duration-300 ${
          !isRevealed && !isCurrentPlayer ? "blur-lg scale-150" : ""
        }`}
      >
        {isRevealed || isCurrentPlayer ? score : "?"}
      </div>
      <div className="text-md truncate w-full">{name}</div>
    </motion.div>
  );
}
