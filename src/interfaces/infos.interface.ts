import { QueryResult } from "pg";

type Infos = {
  id: number;
  preferredOS: string;
  developerSince: Date;
  developerId: number;
};

type InfoRequest = Omit<Infos, "id">
type InfoResult = QueryResult<Infos>

export { Infos, InfoRequest, InfoResult }