import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MenuDetails } from './menu-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  menuDtls: MenuDetails[] = [];
  docContent;
  constructor(private appService : AppService) {
    
  }

  ngOnInit(){
    this.appService.getMenu().subscribe(menuData => {
      this.menuDtls = menuData;
      //console.log(menuData);
    });
    if(this.docContent == undefined){
      this.appService.getDocContent('home').subscribe(docData => {
        this.docContent = docData;
      });
    }

  }

  onMenuClick(fileName:string){
    this.appService.getDocContent(fileName).subscribe(docData => {
      this.docContent = docData;
    });
  }
}
