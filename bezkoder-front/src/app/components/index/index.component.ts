import { Component, OnInit } from '@angular/core';
import { TutorialResponse } from 'src/app/model/tutorial.interface';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tutorials: TutorialResponse[] = [];

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.tutorialService.getAllTutorials().subscribe((response: TutorialResponse[]) => {
      response.forEach(tuto => this.tutorials.push(tuto))
    })
  }

}
