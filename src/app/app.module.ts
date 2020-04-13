import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './angular-material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BodyComponent } from './components/body/body.component';
import { PieGridComponent } from './components/charts/pie-grid/pie-grid.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { EmotionTrendsComponent } from './components/charts/emotion-trends/emotion-trends.component';
import { DummyComponent } from './components/charts/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    BarChartComponent,
    PieChartComponent,
    BodyComponent,
    PieGridComponent,
    WorldMapComponent,
    EmotionTrendsComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    NgxChartsModule,
    GoogleChartsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
