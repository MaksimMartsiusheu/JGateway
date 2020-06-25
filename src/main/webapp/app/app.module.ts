import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JgatewaySharedModule } from 'app/shared/shared.module';
import { JgatewayCoreModule } from 'app/core/core.module';
import { JgatewayAppRoutingModule } from './app-routing.module';
import { JgatewayHomeModule } from './home/home.module';
import { JgatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JgatewaySharedModule,
    JgatewayCoreModule,
    JgatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JgatewayEntityModule,
    JgatewayAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JgatewayAppModule {}
