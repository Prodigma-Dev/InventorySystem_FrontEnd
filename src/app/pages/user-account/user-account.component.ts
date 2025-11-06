import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';

@Component({
  selector: 'app-user-account',
  imports: [],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss',
  animations: [fadeInUp]
})
export class UserAccountComponent implements OnInit {
  userId: number | null = null;
  startX: number = 0;
  currentX: number = 0;
  swipeThreshold = 50;
  swipedItem: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('User ID:', this.userId);
  }

  startSwipe(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    // this.swipedItem = item;
  }

  moveSwipe(event: TouchEvent) {
    // if (this.swipedItem !== item) return;

    this.currentX = event.touches[0].clientX - this.startX;

    const card = (event.target as HTMLElement).closest('.card-item') as HTMLElement;
    if (!card) return;

    // only allow left swipe
    if (this.currentX < 0) {
      card.style.transform = `translateX(${this.currentX}px)`;
    }
  }

  endSwipe(event: TouchEvent) {
    const card = (event.target as HTMLElement).closest('.card-item') as HTMLElement;
    if (!card) return;

    if (this.currentX < -this.swipeThreshold) {
      // reveal action button
      card.style.transform = 'translateX(-80px)';
    } else {
      // reset position
      card.style.transform = 'translateX(0)';
    }

    // reset swipe data
    this.startX = 0;
    this.currentX = 0;
    this.swipedItem = null;
  }

  goToRefund() {
    this.router.navigate(
      ['/dashboard/equipment-rental'],
      { queryParams: { itemId: 1 } }
    );
  }
}
