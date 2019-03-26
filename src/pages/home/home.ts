//import { Component } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { Platform } from 'ionic-angular';
import { Component,ElementRef,ViewChild } from '@angular/core';
import { ImagepagePage } from '../imagepage/imagepage';

 // 'plug into' DOM canvas element using @ViewChild

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild('canvas')canvasEl : ElementRef;
@ViewChild(Content) content: Content;
// Reference Canvas object
private _CANVAS  : any;
// Reference the context for the Canvas element
private _CONTEXT : any;
picture:any="";
cameraState:Boolean = false;
  constructor(platform: Platform,public navCtrl: NavController,private cameraPreview: CameraPreview) {
    /* platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
    }); */
    
  }

  ionViewDidLoad(){
    this._CANVAS 	    = this.canvasEl.nativeElement;
    this._CANVAS.width  	= window.innerWidth     
    this._CANVAS.height 	= window.innerHeight  

    this.initialiseCanvas();
    
    
  }


  initialiseCanvas(){
    if(this._CANVAS.getContext)
    {
        this.setupCanvas();
    }
  }

  setupCanvas(){
    this._CONTEXT = this._CANVAS.getContext('2d');
    //this._CONTEXT.fillStyle = "#3e3e3e";
    //this._CONTEXT.fillRect(0, 50, 500,500);//0,0,500,500
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
      if(this.cameraState==true){
        this.drawCircle();
      }
      
      //alert(res)
    },
    (err) => {
      console.log(err)
      //alert("start: "+err)
    }); 
   

  
}  

 takePicture(){
  
  // picture options
  const pictureOpts: CameraPreviewPictureOptions = {
    
    width: 1280,
    height: 1280,
    quality: 85
  }
  
  // take a picture
  this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
    this.picture = 'data:image/jpeg;base64,' + imageData;
    //this.cameraPreview.hide();
    this._CANVAS.style.display="none";
    this.content.setElementStyle("background-color","white")
  }, (err) => {
    console.log(err);
   
   
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
  this.cameraPreview.hide();
}
 
 drawCircle(){
      
      this._CONTEXT.beginPath();

      // x, y, radius, startAngle, endAngle
      this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 150, 0, 2 * Math.PI);
      this._CONTEXT.lineWidth = 10;
      this._CONTEXT.strokeStyle = '#0000FF'; /* '#ffffff' */
      this._CONTEXT.stroke();
  }
}
 