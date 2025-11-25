import { NgxScannerQrcodeComponent, ScannerQRCodeDevice } from 'ngx-scanner-qrcode';
import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-fast-equipment-rental',
  imports: [NgxScannerQrcodeComponent],
  templateUrl: './fast-equipment-rental.component.html',
  styleUrl: './fast-equipment-rental.component.scss',
  animations: [fadeInUp],
})
export class FastEquipmentRentalComponent implements OnInit, AfterViewInit {
  @ViewChild('scanner', { static: false }) scanner!: NgxScannerQrcodeComponent;

  devices: ScannerQRCodeDevice[] = [];
  currentIndex = 0;

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
    this.route.queryParams.subscribe((params) => {
      this.shotId = Number(params['shotId']);
      this.itemId = Number(params['itemId']);
    });
  }

  ngAfterViewInit() {
    // Subscribe before starting the scanner
    this.scanner.isReady.subscribe(r => {
      if (r) this.loadDevices();
    });

    // start scanner
    this.scanner.start();
  }

  loadDevices() {
    this.scanner.devices.subscribe((devices) => {
      if (!devices?.length) return;

      this.devices = devices;

      // Automatically select back camera if possible
      const back = devices.findIndex(d =>
        /(back|rear|environment|main|wide)/i.test(d.label)
      );

      this.currentIndex = back >= 0 ? back : 0;

      this.scanner.playDevice(this.devices[this.currentIndex].deviceId);
    });
  }

  switchCamera() {
    if (!this.devices.length) return;

    // Move to next camera
    this.currentIndex = (this.currentIndex + 1) % this.devices.length;

    const device = this.devices[this.currentIndex];

    this.scanner.playDevice(device.deviceId).subscribe(() => {
      console.log("Switched to:", device.label);
    });
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     // 1. Subscribe to isReady BEFORE start()
  //     this.scanner.isReady.subscribe(ready => {
  //       console.log("READY:", ready);
  //       if (ready) {
  //         this.onScannerReady();
  //       }
  //     });

  //     // 2. Now start the scanner
  //     this.scanner.start().subscribe({
  //       next: () => console.log("Scanner started"),
  //       error: err => console.error("Scanner start ERROR:", err)
  //     });
  //   }, 300);
  // }

  onScanForRental(results: any): void {
    this.scanner.pause();
    const currentScanTime = results[0]?.time;
    if (currentScanTime - this.lastScanTime > 2000) {
      this.lastScanTime = currentScanTime;
      this.result = results[0]?.value;
      console.log('Scanned:', this.result, this.lastScanTime);
    }
    setTimeout(() => {
      this.scanner.play();
    }, 2000);
  }

  onScanForRefund(results: any): void {
    this.scanner.pause();
    const currentScanTime = results[0]?.time;
    if (currentScanTime - this.lastScanTime > 2000) {
      this.lastScanTime = currentScanTime;
      this.result = results[0]?.value;
      console.log('Scanned:', this.result, this.lastScanTime);
    }
    setTimeout(() => {
      this.scanner.play();
    }, 2000);
  }

  equipmentConfirm() {
    this.router.navigate(['/dashboard/equipment-confirmation'], {
      queryParams: { status: 'rented' },
    });
  }

  //#region Swipe scanners for Card Items
  startSwipe(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    // this.swipedItem = item;
  }

  moveSwipe(event: TouchEvent) {
    // if (this.swipedItem !== item) return;

    this.currentX = event.touches[0].clientX - this.startX;

    const card = (event.target as HTMLElement).closest(
      '.card-item'
    ) as HTMLElement;
    if (!card) return;

    // only allow left swipe
    if (this.currentX < 0) {
      card.style.transform = `translateX(${this.currentX}px)`;
    }
  }

  endSwipe(event: TouchEvent) {
    const card = (event.target as HTMLElement).closest(
      '.card-item'
    ) as HTMLElement;
    if (!card) return;

    if (this.currentX < -this.swipeThreshold) {
      // reveal scanner button
      card.style.transform = 'translateX(-130px)';
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
    console.log('Delete scanner triggered');
  }
  //#endregion

//   onScannerReady() {
//     const sub = this.scanner.devices.subscribe((devices) => {
//       if (!devices?.length) return;

//       this.devices.set(devices);

//       // Match common Back camera labels
//       const rear = devices.find((d) =>
//         /(back|rear|environment|main|wide|traseira|trás)/i.test(d.label)
//       );

//       // Fallback for Android (usually "Camera 1")
//       const chosen = rear ?? devices[devices.length - 1];

//       if (chosen) {
//         this.scanner.playDevice(chosen.deviceId).subscribe(() => {
//           console.log("Using camera:", chosen.label);
//         });
//       }

//       sub.unsubscribe();
//     });
//   }

//   toggleCamera() {
//   const devices = this.devices;
//   if (!devices.length) return;

//   this.currentIndex = (this.currentIndex + 1) % devices.length;
//   const selected = devices[this.currentIndex];

//   this.scanner.playDevice(selected.deviceId);
// }

}