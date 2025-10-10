import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { BlogComponent } from 'src/app/shared/components/apps-blog/apps-blog.component';
import { TopEmployeesComponent } from 'src/app/shared/components/top-employees/top-employees.component';
import { UpcomingSchedulesComponent } from 'src/app/shared/components/upcoming-schedules/upcoming-schedules.component';



@Component({
    selector: 'app-starter',
    imports: [
        MaterialModule,
        UpcomingSchedulesComponent,
        TopEmployeesComponent,
        BlogComponent
    ],
    templateUrl: './starter.component.html',
    encapsulation: ViewEncapsulation.None
})
export class StarterComponent { }