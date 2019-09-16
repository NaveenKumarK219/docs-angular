import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  fileName;
  docContent = '';
  constructor(private appService: AppService,
              private router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.appService.getDocContent(this.fileName).subscribe(docData => this.docContent = docData);
    this.fileName = this.actRoute.snapshot.paramMap.get('docName');
    this.docContent = this.appService.getDocContent(this.fileName);
  }

}
