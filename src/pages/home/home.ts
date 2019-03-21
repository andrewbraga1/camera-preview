import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
picture:any;
  constructor(public navCtrl: NavController,private cameraPreview: CameraPreview) {
   this.initCamera()
  }
  
  // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
initCamera(){
  const cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };
  
  // start camera
  this.cameraPreview.startCamera(cameraPreviewOpts).then(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    });
  
  // Set the handler to run every time we take a picture
  /* this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
    console.log(result);
    // do something with the result
  }); */
  
}  

takepicture(){
  // picture options
  const pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  }
  
  // take a picture
  this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
    this.picture = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    console.log(err);
    this.picture = 'assets/img/test.jpg';
  });
}  
cameraSwitch(){  
  // Switch camera
  this.cameraPreview.switchCamera();
} 
effect(){ 
  // set color effect to negative
  this.cameraPreview.setColorEffect('negative');
}
terminateCamera(){  
  // Stop the camera preview
  this.cameraPreview.stopCamera();
}
}
