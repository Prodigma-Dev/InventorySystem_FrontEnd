import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';

@Component({
  selector: 'app-fast-equipment-rental',
  imports: [NgxScannerQrcodeComponent],
  templateUrl: './fast-equipment-rental.component.html',
  styleUrl: './fast-equipment-rental.component.scss',
  animations: [fadeInUp]
})
export class FastEquipmentRentalComponent implements OnInit, AfterViewInit {
  @ViewChild('action', { static: false }) action!: NgxScannerQrcodeComponent;

  shotId: number | null = null;
  itemId: number | null = null;
  lastScanTime: number = 0;
  result: any;

  startX: number = 0;
  currentX: number = 0;
  swipeThreshold = 50;
  swipedItem: any = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.shotId = Number(params['shotId']);
      this.itemId = Number(params['itemId']);
    });
  }

  ngAfterViewInit(): void {
    this.action.start();
  }

  onScanForRental(results: any): void {
    this.action.pause();
    const currentScanTime = results[0]?.time;
    if (currentScanTime - this.lastScanTime > 2000) {
      this.lastScanTime = currentScanTime;
      this.result = results[0]?.value;
      console.log('Scanned:', this.result, this.lastScanTime);
    }
    setTimeout(() => {
      this.action.play();
    }, 2000);
  }

  onScanForRefund(results: any): void {
    this.action.pause();
    const currentScanTime = results[0]?.time;
    if (currentScanTime - this.lastScanTime > 2000) {
      this.lastScanTime = currentScanTime;
      this.result = results[0]?.value;
      console.log('Scanned:', this.result, this.lastScanTime);
    }
    setTimeout(() => {
      this.action.play();
    }, 2000);
  }

  equipmentConfirm() {
    this.router.navigate(
      ['/dashboard/equipment-confirmation'],
      { queryParams: { status: 'rented' } }
    );
  }

  //#region Swipe Actions for Card Items
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

  onDelete() {
    console.log('Delete action triggered');
  }
  //#endregion

  onScannerReady() {
    const sub = this.action.devices.subscribe(devices => {
      if (!devices?.length) return;

      // try to find a rear/back/environment camera by label
      const rear = devices.find(d =>
        /back|rear|trás|traseira|environment|ambiente/i.test(d.label)
      );

      // fall back to the last camera (often the rear on Android)
      const chosen = rear ?? devices[devices.length - 1];

      if (chosen) this.action.playDevice(chosen.deviceId);
      sub.unsubscribe(); // pick once
    });
  }
  
}
