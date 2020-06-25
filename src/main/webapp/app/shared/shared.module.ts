import { NgModule } from '@angular/core';
import { JgatewaySharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [JgatewaySharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [JgatewaySharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
})
export class JgatewaySharedModule {}
