import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  fileName='home';
  docContent;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getDocContent(this.fileName).subscribe(docData => this.docContent = docData);
  }

}
