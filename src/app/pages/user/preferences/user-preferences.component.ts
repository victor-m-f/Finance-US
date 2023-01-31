import { Component } from '@angular/core';
import { ThemeService } from 'src/app/shared/services';

@Component({
  templateUrl: 'user-preferences.component.html',
  styleUrls: ['./user-preferences.component.scss']
})

export class UserPreferencesComponent {

  constructor(public theme: ThemeService) {
  }

  onValueChanged(e) {
    this.theme.applyTheme(e.value);
  }
}
