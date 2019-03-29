import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';


import { ImagepagePage } from '../pages/imagepage/imagepage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ImagepagePage;
  picture:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private cameraPreview: CameraPreview) {
    
    platform.ready().then(() => {
      

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //statusBar.overlaysWebView(false);
      statusBar.hide()
      splashScreen.hide();
    });
    
  }
}

