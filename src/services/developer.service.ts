import { client } from "../database";
import { Developer, DeveloperRequest, DeveloperResult } from "../interfaces";
import format from "pg-format";

const create = async (payload: DeveloperRequest): Promise<Developer> => {
  const queryString = format(
    'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const response: DeveloperResult = await client.query(queryString);
  return response.rows[0];
};

const retrieve = async (developerId: string): Promise<Developer> => {
  const queryString: string = `SELECT
    "d"."id" AS "developerId",
    "d"."name" AS "developerName",
    "d"."email" AS "developerEmail",
    "di"."developerInfoDeveloperSince",
    "di"."developerInfoPreferredOS",
    FROM "developers" AS "d"
    LEFT JOIN "developer_infos" AS "di"
        ON "di"."developerId" = "d"."id"
    WHERE "d"."id" = $1 RETURNING *;
    `;
  const queryResult: DeveloperResult = await client.query(queryString, [
    developerId,
  ]);

  return queryResult.rows[0];
};

const read = async(developerId: string ) => {
  const queryString: string = 'SELECT * FROM "developers" WHERE "id" = $1';
  const queryResult: DeveloperResult = await client.query(queryString, [developerId])

  return queryResult.rows[0]
}

const partialUpdate = async (
  developerId: string,
  payload: DeveloperRequest
) => {
  const queryString: string = format(
    'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *',
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: DeveloperResult = await client.query(queryString, [
    developerId,
  ]);
  return queryResult.rows[0];
};

const destroy = async(developerId: string ) => {
  await client.query('DELETE FROM "developers" WHERE "id" = $1;', [developerId])
}

export default { create, retrieve, partialUpdate, read, destroy };
