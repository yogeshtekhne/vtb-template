import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
registerLocaleData(localeNl, 'nl');

@Component({
  selector: 'app-template',
  templateUrl: './minisite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinisiteComponent implements OnInit {
  itinerary: any;
  showMobileMenu: boolean;

  constructor(private _activatedRoute: ActivatedRoute) {
    const data = this._activatedRoute.snapshot.data;
    this.itinerary = data.itinerary;
  }

  ngOnInit() {
  }

}
