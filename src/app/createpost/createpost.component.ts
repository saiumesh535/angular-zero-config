import { Component, OnInit } from '@angular/core';
import { beautifyCode } from './../utils/beautify';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from '../firebase';
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
  myGroup: FormGroup;
  constructor(private firebaseService: FirebaseService) {
    this.myGroup = new FormGroup({
      'topic': new FormControl('', { validators: Validators.required }),
      'metadata': new FormControl('', { validators: Validators.required })
    });
  }

  ngOnInit() {
  }

  /**
   * @param event this is an event with code in string format
   */
  public onChange(event: any): void {
    this.metadata = beautifyCode(event);
    this.myGroup.controls['metadata'].setValue(this.metadata);
  }

  /**
   * this is to submit metadata code to firebase
   */
  public submitForm(): void {
    console.log(this.myGroup.controls['topic'].value);
    this.firebaseService.postTopic(this.myGroup.controls['topic'].value);
  }
}
