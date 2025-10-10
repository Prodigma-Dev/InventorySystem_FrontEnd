import { trigger, transition, style, animate } from "@angular/animations";

export const fadeInRight = trigger('fadeInRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX({{offset}}px)' }),
        animate(
            '{{duration}}ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'translateX(0)' })
        )
    ], { params: { duration: 300, offset: 20 } }),

    transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0, transform: 'translateX(50px)' }))
    ])
]);