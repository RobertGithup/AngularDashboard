import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "./components/footer/footer.component";
import { SideComponent } from "./components/side/side.component";
import { AreaComponent } from "./widgets/area/area.component";
import { HeaderComponent } from "./components/header/header.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HighchartsChartModule } from "highcharts-angular";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
} from "@angular/material";

@NgModule({
  declarations: [
    FooterComponent,
    SideComponent,
    AreaComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    HighchartsChartModule,
  ],
  exports: [FooterComponent, SideComponent, AreaComponent, HeaderComponent],
})
export class SharedModule {}
