export class Settings {
    constructor(
        public name: string = 'Alpha Fusion',
        public loadingSpinner: boolean = true,
        public stickyHeader: boolean = true,
        public sidenavIsOpened: boolean = true,
        public sidenavIsPinned: boolean = true,
        public sidenavUserBlock: boolean = true,
        public menu: string = 'vertical',
        public menuType: string = 'full',
        public themeMode: string = 'light',
        public themeColor: string = 'indigo',
        public container: string = 'boxed',
        public rtl: boolean = false,
        public hasFooter: boolean = true,
        public footerPosition: string = 'sticky', // 'sticky' | 'static'
        public breadcrump: boolean = true,
    ) { }
}
