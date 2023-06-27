import { supabase } from "@/lib/supabaseClient";
import GameContainer from "./GameContainer/GameContainer";
import { type Game } from "@/types";

export const revalidate = 0;

export default async function GamePage({ params }: { params: { id: string } }) {
  const game = await getGame(params.id);
  const players = await getPlayers(params.id);

  // TODO: Add error handling when game or players doe not exist

  return <GameContainer serverGame={game} serverPlayers={players} />;
}

async function getGame(id: string): Promise<Game> {
  const { data } = await supabase.from("games").select().eq("id", Number(id));
  if (data == null) {
    throw new Error("Failed to fetch game data");
  }
  return data[0];
}

async function getPlayers(gameId: string) {
  const { data } = await supabase
    .from("players")
    .select("*")
    .eq("game_id", gameId);
  if (data == null) {
    throw new Error("Failed to fetch player data");
  }
  return data;
}
