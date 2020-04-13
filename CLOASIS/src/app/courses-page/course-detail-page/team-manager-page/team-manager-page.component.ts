import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team.model';
import { TeamMember } from 'src/app/models/teamMember.model';

@Component({
  selector: 'app-team-manager-page',
  templateUrl: './team-manager-page.component.html',
  styleUrls: ['./team-manager-page.component.css']
})
export class TeamManagerPageComponent implements OnInit {

  teams: Team[] = [];
  members: TeamMember[] = [];

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teams = this.teamService.teams
    this.teamService.getTeams
      .subscribe( teams => {
        this.teams = teams;
      });
  }

}
