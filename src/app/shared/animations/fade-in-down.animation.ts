import { trigger, transition, style, animate } from "@angular/animations";

export const fadeInDown = trigger('fadeInDown', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-{{offset}}px)' }),
        animate(
            '{{duration}}ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'translateY(0)' })
        )
    ], { params: { duration: 300, offset: 20 } }),

    transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(-50px)' }))
    ])
]);