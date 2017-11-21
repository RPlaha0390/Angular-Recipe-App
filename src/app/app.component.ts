import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loadedFeature: string = 'recipe';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyC6B4JvXhbVbAkubxD7UqFtO1QVNb7Ah28",
      authDomain: "angular-recipe-book-95afe.firebaseapp.com"
		})
	}

  onNavigate(feature: string) {
  	this.loadedFeature = feature;
  }
}
