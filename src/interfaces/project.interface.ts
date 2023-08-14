import { QueryResult } from "pg";

type Project = {
    name: string
    description: string
    repository: string
    startDate: Date
    endDate: Date
    developerId: number
};

type ProjectRequest = Omit<Project, "id">
type ProjectResult = QueryResult<Project>

export { Project, ProjectRequest, ProjectResult }