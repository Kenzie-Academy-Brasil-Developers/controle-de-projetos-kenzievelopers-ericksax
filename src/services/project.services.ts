import { client } from "../database";
import { Project, ProjectRequest, ProjectResult} from "../interfaces";
import format from "pg-format";

const create = async (payload: ProjectRequest): Promise<Project> => {
  const queryString = format(
    'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const response: ProjectResult = await client.query(queryString);
  return response.rows[0];
};

const retrieve = async (developerId: string): Promise<Project> => {
  const queryString: string = `
  SELECT
    "p"."id" AS "projectId",
    "p"."name" AS "projectName",
    "p"."description" AS "projectDescription",
    "p"."repository" AS "projectRepository",
    "p"."startDate" AS "projectStartDate",
    "p"."endDate" AS "projectEndDate",
    "d"."name" AS "projectDeveloperName"
  FROM
    "developers" AS "d"
    LEFT JOIN "projects" AS "p" 
      ON "p"."developerId" = "d"."id"
  WHERE
  "d"."id" = $1;
    `;
  const queryResult: ProjectResult = await client.query(queryString, [
    developerId,
  ]);

  return queryResult.rows[0];
};

const read = async (developerId: string) => {
  const queryString: string = 'SELECT * FROM "projects" WHERE "id" = $1';
  const queryResult: ProjectResult = await client.query(queryString, [
    developerId,
  ]);

  return queryResult.rows[0];
};

const partialUpdate = async (
  developerId: string,
  payload: ProjectRequest
) => {
  const queryString: string = format(
    'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *',
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: ProjectResult = await client.query(queryString, [
    developerId,
  ]);
  return queryResult.rows[0];
};

export default { create, retrieve, partialUpdate, read };
