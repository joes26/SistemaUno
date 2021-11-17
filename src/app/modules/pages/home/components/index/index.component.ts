import { Component, OnInit } from '@angular/core';
import { DefaultComponent } from '../../../shared/layout/default/default.component';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../core/common/constants';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private titleService: Title,
    private layout: DefaultComponent
  ) {
    this.titleService.setTitle(Constants.Core.Titulo);
  }

  ngOnInit() {

    const self = this;
    setInterval(function () { self.layout.showToggleMenu = true; }, 500);


  }

}
