import { inject, Injectable } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { LocalStorageService } from './local-storage.service';
import { Constants } from 'src/app/shared/contsants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorageService = inject(LocalStorageService);
  router = inject(Router);  
  
  login() {
    this.localStorageService.set(Constants.STORAGE_TOKEN, 'token123'); 
    this.router.navigate(['/']);   
  }

  logout() {
    this.localStorageService.remove(Constants.STORAGE_TOKEN);
    this.router.navigate(['/login']);     
  } 

  isLoggedIn(): boolean {
    return !!this.localStorageService.get(Constants.STORAGE_TOKEN);
  }

  getToken(): string | null {
    return this.localStorageService.get(Constants.STORAGE_TOKEN);
  }

}
