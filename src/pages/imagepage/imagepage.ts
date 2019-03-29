import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ImagepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagepage',
  templateUrl: 'imagepage.html',
})
export class ImagepagePage {
image:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagepagePage');
  }
  back(){
    this.navCtrl.pop();
  }
  continue(){
    this.navCtrl.push(HomePage)
  }

}
