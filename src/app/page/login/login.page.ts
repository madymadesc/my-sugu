import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EnaService } from 'src/app/service/ena.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private ena: EnaService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  login(){
    // Activation du menu latéral
    this.ena.setMenuState(true);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward'});
    }

}
