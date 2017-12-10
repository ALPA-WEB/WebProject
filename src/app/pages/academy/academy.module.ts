
import { NgModule } from '@angular/core';

import { FifoComponent } from './fifo/fifo.component';
import { ZerooneComponent } from './zeroone/zeroone.component';
import { AlpaComponent } from './alpa/alpa.component';
import { JaramComponent } from './jaram/jaram.component';
import { HycubeComponent } from './hycube/hycube.component';

import { AcadComponent } from './academy.component';
import { AcadRoutingModule, routedComponents } from './academy-routing.module';
import { ThemeModule  } from '../../@theme/theme.module';

// import { UiFeaturesModule } from '../ui-features/ui-features.module';

import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlpanoticeComponent } from './alpa/alpa-notice.component';


@NgModule({
    imports: [
        AcadRoutingModule,
        ThemeModule,
        Ng2SmartTableModule,
        // UiFeaturesModule,
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [
      SmartTableService,
    ],
    entryComponents: [
        AlpanoticeComponent,
    ],
})
export class AcadModule {


}
