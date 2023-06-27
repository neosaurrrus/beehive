"use client";
import { supabase } from "@/lib/supabaseClient";
import {
  ButtonLabel,
  Heading1,
  Heading2,
  Paragraph,
} from "@/components/Text/Text";
import { type Game, type Player } from "@/types";

export default function Header({
  game,
  players,
  currentPlayer,
}: {
  game: Game;
  players: Player[];
  currentPlayer: Player;
}) {
  const { name, admin } = game;

  const hasSomeCardsPlayed = players.some((player) => player.score > 0);

  const renderPlayers = () => {
    return players.map((player, index) => {
      return (
        <span className="text-accent" key={player.id}>
          {index !== 0 && ","} {player.name}{" "}
        </span>
      );
    });
  };

  const revealPlayerScores = async (): Promise<void> => {
    const { error } = await supabase
      .from("games")
      .update({ is_revealed: !game.is_revealed })
      .eq("id", game.id);
    error != null && console.log(error);
  };

  const resetPlayerScores = async (): Promise<void> => {
    await supabase.from("players").update({ score: 0 }).eq("game_id", game.id);

    const { error: gameError } = await supabase
      .from("games")
      .update({ is_revealed: false })
      .eq("id", game.id);
    gameError != null && console.log(gameError);
  };

  const renderAdminButtons = () => (
    <div
      className={`flex flex-col gap-4 justify-center items-center duration-200 ${
        hasSomeCardsPlayed ? "opacity-100" : "opacity-50"
      }`}
    >
      <button
        className={buttonClasses}
        onClick={revealPlayerScores as () => Promise<void>}
        disabled={!hasSomeCardsPlayed}
      >
        <ButtonLabel>{game.is_revealed ? "Hide" : "Reveal"}</ButtonLabel>
      </button>

      <button
        className={buttonClasses}
        onClick={resetPlayerScores}
        disabled={!hasSomeCardsPlayed}
      >
        <ButtonLabel>Reset</ButtonLabel>
      </button>
    </div>
  );

  const buttonClasses = `bg-accent/75 flex justify-center items-center p-4 rounded-4xl shadow-lg w-32 h-12 ${
    hasSomeCardsPlayed ? "hover:bg-accent" : ""
  } duration-200`;

  return (
    <section className="bg-sectionBackground rounded-3xl p-8 h-48 shadow-xl flex">
      <div className="w-4/5 flex flex-col justify-center">
        <Heading1>{name}</Heading1>
        <Heading2 extraClasses="text-lightText mt-2 mb-6">
          Created by <span className="text-accent font-semibold">{admin}</span>
        </Heading2>
        <Paragraph extraClasses="font-semibold">
          Participants:{renderPlayers()}{" "}
        </Paragraph>
      </div>

      {currentPlayer.is_admin && renderAdminButtons()}
    </section>
  );
}
