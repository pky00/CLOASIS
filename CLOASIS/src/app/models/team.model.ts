import { TeamMember } from './teamMember.model';

export class Team {
    static lastTeamId:number = 2;
    teamId:number
    members: TeamMember[];
    crn:string;
    title:string;
    description:string;
    progress:number;
}