import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public metadata: string;
  constructor(private route: ActivatedRoute) { }

   code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

  ngOnInit() {
    this.route.data.subscribe(lol => {
      this.metadata = lol.metadata;
      console.log('meta', this.metadata);
    });
  }

}
