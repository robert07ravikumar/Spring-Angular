import { NgModule } from '@angular/core';

import { SpringAngularSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringAngularSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringAngularSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringAngularSharedCommonModule {}
