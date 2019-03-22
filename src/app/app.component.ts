import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  picture:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private cameraPreview: CameraPreview) {
    
    platform.ready().then(() => {
      

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    /* const cameraPreviewOpts: CameraPreviewOptions = {
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
        alert(res)
      },
      (err) => {
        console.log(err)
        alert("start: "+err)
      }); */
  }
}

