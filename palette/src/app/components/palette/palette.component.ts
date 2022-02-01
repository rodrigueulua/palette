import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  hValue: number = 0;
  sValue: number = 0;
  lValue: number = 0;
  hColorPrimary: string = "";
  hColorSecondary: string = "";
  hColorTertiary: string = "";

  requestValue: string = "";



  constructor() { }

  ngOnInit(): void {
  }

  ChangeColor(hValue: number, sValue: number, lValue: number): void{
    this.hColorPrimary=`background-color: hsl(${hValue},${sValue}%,${lValue}%)`; 
    this.hColorSecondary=`background-color: hsl(${hValue + 30},${sValue}%,${lValue}%)`;    
    this.hColorTertiary=`background-color: hsl(${hValue + 180},${sValue}%,${lValue}%)`;     
    

    if(hValue <= 180){
      this.requestValue=`:root{
        --clr-primary: hsl(${hValue},${sValue}%,${lValue}%); 
        --clr-secondary: hsl(${hValue + 30},${sValue}%,${lValue}%);
        --clr-tertiary: hsl(${hValue + 180},${sValue}%,${lValue}%);
      }`
    }
    else if((hValue > 180) && (hValue <= 330)){
      this.requestValue=`:root{
        --clr-primary: hsl(${hValue},${sValue}%,${lValue}%); 
        --clr-secondary: hsl(${hValue + 30},${sValue}%,${lValue}%);
        --clr-tertiary: hsl(${hValue - 180},${sValue}%,${lValue}%);
      }`
    }
    else{
      this.requestValue=`:root{
        --clr-primary: hsl(${hValue},${sValue}%,${lValue}%); 
        --clr-secondary: hsl(${hValue - 330},${sValue}%,${lValue}%);
        --clr-tertiary: hsl(${hValue - 180},${sValue}%,${lValue}%);
      }`
    }
    
  }
}
