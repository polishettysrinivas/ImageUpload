import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  finalImage : any = '';
  showcropper : boolean = false;
  showblob : boolean = false;
  
  btnFileUpload(event:any){
    event.preventDefault();
    let element : HTMLElement = document.getElementById('imageupload') as HTMLElement;
    element.click();
  }
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      this.showcropper = true;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  cancelcrop(){
    this.croppedImage = '';
    this.showcropper = false;
    this.imageChangedEvent = '';
  }
  saveCrop(){
    this.showblob = true;
    this.showcropper = false;
    this.finalImage = this.croppedImage;
  }
}
