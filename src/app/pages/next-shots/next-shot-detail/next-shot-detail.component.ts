import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';

@Component({
  selector: 'app-next-shot-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './next-shot-detail.component.html',
  styleUrl: './next-shot-detail.component.scss',
  animations: [fadeInUp]
})
export class NextShotDetailComponent implements OnInit {
  id: number | null = null;
  form!: FormGroup;

  customers = [
    { id: 1, name: 'Azəriqaz' },
    { id: 2, name: 'SOCAR' },
    { id: 3, name: 'BP' },
    { id: 4, name: 'TotalEnergies' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      id: 0,
      name: [null, [Validators.required]],
      date: [null, [Validators.required]],
      customer: [null, [Validators.required]],
      address: [null, [Validators.required]],
      note: null,
    });
  }

  get trimmedName(): string {
    const name = this.form.get('name')?.value ?? 'Name not found';
    return name.length > 17 ? name.slice(0, 17) + '...' : name;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  goToAddEquipment() {
    this.router.navigate(
      ['/dashboard/equipment-rental'],
      { queryParams: { shotId: this.id } }
    );
  }
  
}
