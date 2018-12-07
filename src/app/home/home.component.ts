import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'angular-intro-p1';
  name: String = 'francisco';
 currentDay = new Date().getDay();

days: Object = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wed',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};
languages: Object[]= [
{
  names: ['English', 'spanish'],
  country: 'American'
},
{
  names: ['Spanish', 'arabic'],
  country: 'Spain'
},
{
  names: ['French', 'Basque'],
  country: 'France'
}
];
  constructor() { }

  renderThisDay(): String{
    return this.days[this.currentDay];
  }
  renderSpokenLanguages(languages): String {
    return languages.join(', ');
  }
  ignoreLanguage(language): Boolean {
    const languageToIgnore = 'English';
    return !language.names.includes(languageToIgnore);
  }
  ngOnInit() {
    console.log('Hello');
  }
  ngOnDestroy() {
    console.log('goodbye');
  }


}
