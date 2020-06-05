import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormControl } from "@angular/forms";

import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatOptionModule,
  MatAutocompleteModule,
} from "@angular/material";
@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatOptionModule,
    MatInputModule,
    MatAutocompleteModule,
    FormControl,
    FormsModule,
  ],
})
export class DefaultModule {}
