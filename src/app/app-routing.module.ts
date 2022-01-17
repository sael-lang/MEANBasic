import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';

const routes: Routes = [
{path:'main',component:MainComponent},
{path:'page1',component:Page1Component},
{path:'page2',component:Page2Component},
{path:'page3',component:Page3Component},
{path:'one',component:OneComponent},
{path:'two',component:TwoComponent},
{path:'three',component:ThreeComponent},
{path:'four',component:FourComponent},
{path:'five',component:FiveComponent},
{path:'six',component:SixComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
