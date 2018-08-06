import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'innerHTML'
})
export class InnerHTMLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(htmlString: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

}
