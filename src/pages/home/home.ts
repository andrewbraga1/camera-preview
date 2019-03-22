import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
picture:any="";
cameraState:Boolean = false;
  constructor(platform: Platform,public navCtrl: NavController,private cameraPreview: CameraPreview) {
    /* platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
    }); */
    
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
      this.cameraState = true
      //alert(res)
    },
    (err) => {
      console.log(err)
      //alert("start: "+err)
    }); 
   

  
}  

 takepicture(){
   alert("tirar foto")
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
    this.picture = 'assets/imgs/logo.png';
  });
}  
/*
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
}*/

}
 