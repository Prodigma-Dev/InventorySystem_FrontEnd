import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipment-confirmation',
  imports: [RouterModule],
  templateUrl: './equipment-confirmation.component.html',
  styleUrl: './equipment-confirmation.component.scss'
})
export class EquipmentConfirmationComponent implements OnInit  {
  status: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.status = params['status'];
    });
  }

  goToMainPage() {
    this.router.navigate(['/dashboard']);
  }
}
