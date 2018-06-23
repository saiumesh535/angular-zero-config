import { Component } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor() { }

  public githubLink = 'https://github.com/saiumesh535/angular-zero-config';

  public onpenRepo(): void {
    window.open(this.githubLink, '_blank');
  }

}
