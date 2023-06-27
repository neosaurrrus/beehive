import { type Player } from "@/types";
import { Paragraph } from "@/components/Text/Text";
import TableCard from "./TableCard/TableCard";

interface Props {
  players: Player[];
  isRevealed: boolean;
  currentPlayer: Player;
}
export default function Table({ players, isRevealed, currentPlayer }: Props) {
  const numberOfPlayersWithScore = players.filter(
    (player) => player.score > 0
  ).length;

  const renderPlayerScoreCards = () => {
    return players.map((player, index) => {
      if (player.score > 0) {
        return (
          <TableCard
            player={player}
            isRevealed={isRevealed}
            isCurrentPlayer={player.id === currentPlayer.id}
            key={index}
          />
        );
      } else {
        return <div key={index}></div>;
      }
    });
  };
  const renderResult = () => {
    if (players.every((player) => player.score === currentPlayer.score)) {
      return <span>Everyone is in agreement!</span>;
    } else if (numberOfPlayersWithScore === 1) {
      return <span>1 person played, not that exciting was it?</span>;
    } else {
      return <span>Not everyone is in agreement! Play again?</span>;
    }
  };

  const renderStatus = () => {
    const numberOfPlayers = players.length;

    if (numberOfPlayers === numberOfPlayersWithScore) {
      return <span>Everyone has played! Reveal?</span>;
    } else if (numberOfPlayersWithScore !== 0) {
      return (
        <span>
          {" "}
          {numberOfPlayersWithScore} out of {numberOfPlayers} played so far...{" "}
        </span>
      );
    } else {
      return <span>Waiting for players to play...</span>;
    }
  };

  return (
    <section className="bg-sectionBackground rounded-3xl p-4 h-72 shadow-xl flex flex-col justify-evenly items-center">
      <Paragraph extraClasses="text-accent">
        {isRevealed ? renderResult() : renderStatus()}
      </Paragraph>
      <div className="flex gap-4">{renderPlayerScoreCards()}</div>
    </section>
  );
}
