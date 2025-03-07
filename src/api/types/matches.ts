type Player = {
  /**
   * Имя игрока
   */
  username: string;

  /**
   * Количество убийств
   */
  kills: number;
};

type Team = {
  /**
   * Название команды
   */
  name: string;

  /**
   * Игроки
   */
  players: Player[];

  /**
   * Количество очков
   */
  points: number;

  /**
   * Название команды
   */
  place: number;

  /**
   * Количество убийств
   */
  total_kills: number;
};

type MatchStatus = "Scheduled" | "Ongoing" | "Finished";

type Match = {
  /**
   * Время проведения матча
   */
  time: Date;

  /**
   * Название матча
   */

  title: string;
  /**
   * Домашняя команда
   */
  homeTeam: Team;
  /**
   * Гостевая команда
   */
  awayTeam: Team;
  /**
   * Счет домашней команды
   */
  homeScore: number;
  /**
   * Счет гостевой команды
   */
  awayScore: number;
  /**
   * Статус матча
   */
  status: MatchStatus;
};

export type GetMathesResponse = {
  matches: Match[];
};
