import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { LiveComponent } from './pages/live/live.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/live',
        pathMatch:'full'
    },
    {
        path:"home",
        redirectTo:'/live',
        title :"Home | Crickinformer"
    },{
        path:"history",
        component:HistoryComponent,
        title: "Match History | Crickinformer"

    },{
        path:"point-table",
        component:PointTableComponent,
        title : "Point Table | Crickinformer"
    },{
        path:"live",
        component:LiveComponent,
        title : "Live Match | Crickinformer"
    }
];
