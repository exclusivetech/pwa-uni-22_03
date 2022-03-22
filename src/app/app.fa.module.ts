import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [
        FontAwesomeModule
    ],
    declarations: [],
    exports: [
        FontAwesomeModule
    ]
})
export class AppFaModule {
    constructor(library: FaIconLibrary) {
        // library.addIconPacks(fas);
        library.addIcons(fasStar, farStar);
    }
}

