import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-body',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent
    ],
  templateUrl: './body.component.html'
})
export class BodyComponent {

}
