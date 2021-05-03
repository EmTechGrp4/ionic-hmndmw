import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css'],
})
export class ContactPage {
  feet: number;
  inch: number;
  new_inch: number;
  gender: string;
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;
  message: string;
  constructor(public navCtrl: NavController) {}



  CalculateIW(){
    this.gender = this.gender.toUpperCase();
    if(this.feet >= 5){
    if (this.gender == "M" || this.gender == "MALE"){
      if (this.feet > 5){
        this.new_inch = this.inch * 1 + 12 * 1
      }
        this.robinson = this.new_inch * 1.9 + 52
        this.miller = this.new_inch * 1.41 + 56.2
        this.hamwi = this.new_inch * 2.7 + 48
        this.devine = this.new_inch * 2.3 + 50
    }
    if (this.gender == "F" || this.gender == "FEMALE"){
      if (this.feet >= 5){
        this.new_inch = this.inch * 1 + 12 * 1
      }
        this.robinson = this.new_inch * 1.7 + 49
        this.miller = this.new_inch * 1.36 + 53
        this.hamwi = this.new_inch * 2.2 + 45.5
        this.devine = this.new_inch * 2.3 +45.5
      }
      this.message = ""
    }
    if(this.feet <= 4){
      this.robinson = 0
      this.miller = 0
      this.hamwi = 0
      this.devine = 0
      this.message = "Please input height greater than 4 ft."
      
    }
    if(this.inch >= 12){
      this.robinson = 0
      this.miller = 0
      this.hamwi = 0
      this.devine = 0
      this.message = "Please convert 12 inches to 1 foot."
  }
}
}
