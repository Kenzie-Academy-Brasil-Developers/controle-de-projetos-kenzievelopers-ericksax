import format from "pg-format";
import { InfoRequest, InfoResult, Infos } from "../interfaces/infos.interface";
import { client } from "../database";

const create = async (payload: InfoRequest): Promise<Infos> => {
  const queryString = format(
    'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const response: InfoResult = await client.query(queryString);
  return response.rows[0];
};

export default { create };
