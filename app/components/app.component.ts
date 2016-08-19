import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <nav>
      <a routerLink="/organization-register" routerLinkActive="active">Register organization</a>
      <a routerLink="/organizations-list" routerLinkActive="active">All organizations</a>
    </nav>
    <router-outlet></router-outlet>
`,
    styleUrls: ['app/app.component.css'],
})

export class AppComponent {
    title = "Organizations Register";
}
