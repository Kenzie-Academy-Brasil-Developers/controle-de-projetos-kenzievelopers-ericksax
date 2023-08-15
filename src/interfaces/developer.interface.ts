import { QueryResult } from "pg";

type Developer = {
  id: number;
  name: string;
  email: string;
};

type DeveloperRequest = Omit<Developer, "id">;
type DeveloperResult = QueryResult<Developer>;

export { Developer, DeveloperRequest, DeveloperResult };
