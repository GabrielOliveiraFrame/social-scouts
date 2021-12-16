import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.css']
})
export class MatchSummaryComponent implements OnInit {

  @Input()
  summary!: any;

  @Input()
  link!: any;

  @ViewChild('content', {static: false}) modalContent!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  generatePdf(){
    let pdf = new jsPDF('p', 'pt', 'a3');
    pdf.html(this.modalContent.nativeElement, {
      callback: (pdf) => {
        pdf.save('relatorioDaPartida.pdf')
      }
    })
  }

}
