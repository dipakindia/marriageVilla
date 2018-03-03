import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-form',
  template: `<div class="loading"><img src="assets/images/loading.gif" alt="Loading" width="80" /><br />Loading...</div>`,
  styles: ['']
})
export class LoadingFormComponent implements OnInit {
    constructor() {}
    ngOnInit() {
    }
}
