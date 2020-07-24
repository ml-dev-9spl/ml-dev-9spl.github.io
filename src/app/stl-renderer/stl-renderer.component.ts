import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stl-renderer',
  templateUrl: './stl-renderer.component.html',
  styleUrls: ['./stl-renderer.component.css']
})
export class StlRendererComponent implements OnInit {


  @Input() stlmodels: string [];
  constructor() { }
  
  ngOnInit(): void {
  }

}
