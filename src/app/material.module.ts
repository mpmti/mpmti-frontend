import { NgModule } from '@angular/core';
import {
    MatNativeDateModule, MatIconModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule,
        MatButtonModule, MatCheckboxModule, MatToolbarModule, FormsModule,
        MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,
        MatSidenavModule
    ],

    exports: [MatNativeDateModule, FormsModule,
        MatDatepickerModule, MatIconModule, MatButtonModule,
        MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
        MatInputModule, MatListModule, MatRadioModule,
        MatSidenavModule
    ],

})

export class MaterialModule { }
