import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  correo: string = '';
  alerta = false;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  Volver() {

    this.modalCtrl.dismiss();
    this.alerta = false;
    this.navCtrl.navigateBack('/login', {

    });
  }


  ngOnInit() {
  }

}
