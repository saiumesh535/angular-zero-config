import { Component, OnInit } from '@angular/core';
import { beautifyCode } from './../utils/beautify';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  public tinymceProps = {
    selector: 'textarea',
    plugins: 'codesample',
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'PHP', value: 'php' },
      { text: 'Ruby', value: 'ruby' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
      { text: 'C', value: 'c' },
      { text: 'C#', value: 'csharp' },
      { text: 'C++', value: 'cpp' }
    ],
    toolbar: 'codesample'
  };

  public text: string;
  public metadata: string;

  constructor() { }

  ngOnInit() {
  }
  public onChange(event): void {
    this.metadata = beautifyCode(event);
  }

}
