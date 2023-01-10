import { VeiculoCreateComponent } from './veiculo-create/component/veiculo-create.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
@NgModule({
    imports: [
        CommonModule,
        // FormsModule
    ],
    declarations: [
        VeiculoCreateComponent
    ],
    exports: [
        VeiculoCreateComponent
    ],
})
export class VeiculoModule { }