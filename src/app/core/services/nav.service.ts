import { Injectable } from '@angular/core';
import { Event, IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from 'src/app/layouts/full/sidebar/nav-item';

@Injectable({ providedIn: 'root' })
export class NavService {
    matchOptions: IsActiveMatchOptions = {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
    };
    
    public currentUrl = new BehaviorSubject<any>(undefined);

    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.next(event.urlAfterRedirects);
            }
        });
    }

    isActiveItemOrChildItem(item: NavItem): boolean {
        if (this.isActive(item)) {
            return true;
        }

        if (item.children) {
            for (let child of item.children) {
                if (this.isActiveItemOrChildItem(child)) {
                    return true;
                }
            }
        }

        return false;
    }

    isActive(item: NavItem): boolean {
        if (item.route && this.router.isActive(item.route, this.matchOptions)) {
            return true;
        }

        return false;
    }

}
