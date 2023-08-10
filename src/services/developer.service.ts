import { client } from "../database"
import {  Developer, DeveloperRequest, DeveloperResult } from "../schemas"
import  format  from 'pg-format'

const read = async (): Promise<DeveloperResult> => {
    const queryString = 'SELECT * FROM "developers";'
    const response = await client.query(queryString)
    
    return response
}

const create = async (payload: DeveloperRequest): Promise<Developer> => {
    const queryString = format(
        'INSERT INTO "developers" (%I) VALUES (%L) RETURNING*;',
            Object.keys(payload),
            Object.values(payload)
        );

    const response: DeveloperResult = await client.query(queryString);
    return response.rows[0];
}

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
    WHERE "d"."id" = $1;
    `;
    const queryResult: DeveloperResult = await client.query(queryString, [developerId])

    return queryResult.rows[0]
}

export default { read, create }