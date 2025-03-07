"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiMatches } from "@/api/services/matches";
import { LoaderIcon, RefreshCwIcon } from "lucide-react";
import { Match, MatchStatus } from "@/api/types/matches";

export default function HomePage() {
  const matchesData = useQuery({
    queryKey: ["matches"],
    queryFn: apiMatches.getMatches,
  });

  // I used TanStack Query instead of SWR or React-Query, hope this is acceptable.
  const queryClient = useQueryClient();
  function refreshData() {
    queryClient.invalidateQueries({ queryKey: ["matches"] });
  }

  return (
    <div className="flex flex-col gap-5 p-[42px]">
      <div className="flex justify-between">
        <h1 className="text-[32px] font-bold italic">Match Tracker</h1>
        <div className="flex gap-3">
          {matchesData.isLoadingError && (
            <div className="bg-card flex items-center justify-center gap-2.5 rounded-sm px-6">
              <img src="/images/icons/error.svg" alt="error" />
              <p>Ошибка: не удалось загрузить информацию</p>
            </div>
          )}
          <button
            onClick={refreshData}
            className="bg-warning active:bg-button-pressed flex h-14 w-[204px] cursor-pointer items-center justify-center gap-2.5 rounded-sm p-4 font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50"
          >
            <p>Обновить</p>
            <RefreshCwIcon />
          </button>
        </div>
      </div>
      {matchesData.isLoading && (
        <div className="flex w-full items-center justify-center">
          <LoaderIcon />
        </div>
      )}
      {matchesData.isSuccess && (
        <div className="flex flex-col gap-3">
          {matchesData.data.data.data.matches.map((match, matchIndex) => (
            <MatchCard match={match} key={`match-${matchIndex}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function MatchCard({ match }: { match: Match }) {
  const statusColor = new Map<MatchStatus, string>([
    ["Scheduled", "bg-info"],
    ["Ongoing", "bg-success"],
    ["Finished", "bg-warning"],
  ]);

  return (
    <div className="bg-card flex items-center justify-between rounded-sm p-4">
      <div className="flex items-center gap-[14px]">
        <img src="/images/icons/crown.svg" />
        <p className="font-semibold">{match.awayTeam.name}</p>
      </div>

      <div className="flex w-[92px] flex-col gap-1 text-center font-bold">
        <p className="text-xl">
          {match.awayScore} : {match.homeScore}
        </p>
        <div
          className={`${statusColor.get(match.status)} w-full rounded-sm px-[2px] py-[6px] text-xs`}
        >
          {match.status}
        </div>
      </div>

      <div className="flex items-center gap-[14px]">
        <img src="/images/icons/crown.svg" />
        <p className="font-semibold">{match.homeTeam.name}</p>
      </div>
    </div>
  );
}
