// Imports
import { Headers, Http, Response, ResponseContentType } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Imports services
import { FacilityService } from './services/facility.service';

@Component({
  selector: 'epons-facility-time-spent-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private facilityService: FacilityService = null;

  public facilityId: string = null;

  public dataMinutes: number[] = null;
  public dataHours: number[] = null;

  constructor(private http: Http, private el: ElementRef) {
    this.facilityService = new FacilityService(http);

  }

  ngOnInit(): void {

    this.facilityId = this.el.nativeElement.getAttribute('facilityId');

    this.facilityService.timeSpent(this.facilityId).subscribe((result) => {
      this.dataMinutes = result;
      this.dataHours = this.dataMinutes.map((x) => (Math.floor(x / 60 * 100) / 100));
    });
  }
}