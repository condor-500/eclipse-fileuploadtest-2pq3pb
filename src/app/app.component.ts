import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  file: File;
  //@ViewChild('fileInput') fileInput: ElementRef;

  ngOnInit() {}

  onBasicUpload(event) {
    this.file = event.files[0];
    let customFile = new File([this.file], 'NEW_GUID_GOES_HERE.txt', {
      type: this.file.type,
    });

    console.log(customFile.name, customFile.size, customFile.type);
  }

  upload(e) {
    //console.log(this.fileInput);
    const textElement: HTMLElement = document.getElementById('fileInput');
    console.log(textElement);
    const textContes = textElement.innerText;

    console.log(textContes.includes('maximum upload size is 1.907 MB.'));
  }
}
