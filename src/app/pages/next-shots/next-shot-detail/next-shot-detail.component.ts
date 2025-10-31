import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-next-shot-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './next-shot-detail.component.html',
  styleUrl: './next-shot-detail.component.scss'
})
export class NextShotDetailComponent {
  id: string | null = null;
  form!: FormGroup;

  customers = [
    { id: 1, name: 'Azəriqaz' },
    { id: 2, name: 'SOCAR' },
    { id: 3, name: 'BP' },
    { id: 4, name: 'TotalEnergies' },
  ];

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.id);
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
    const name = this.form.get('name')?.value ?? '';
    if (!name) return 'Çəkilişin adı';
    return name.length > 17 ? name.slice(0, 17) + '...' : name;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  
}
