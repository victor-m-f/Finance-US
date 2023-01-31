import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxSelectBoxModule } from 'devextreme-angular';
import { ThemeSelectorModule } from 'src/app/shared/components/theme-selector/theme-selector.component';
import { ThemeService } from 'src/app/shared/services';
import { UserPreferencesComponent } from './preferences/user-preferences.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserPreferencesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DxSelectBoxModule,
    ThemeSelectorModule,
  ],
  providers: [
    ThemeService,
  ],
})
export class UserModule { }
