import { Component, ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegesterPage } from '../regester/regester';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  


 @ViewChild('username') uname;
 @ViewChild('password') password; 


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }


signIn() {
  this.navCtrl.push(LoginPage);
}
regester() {
  this.navCtrl.push(RegesterPage);
}
       
    }
  
