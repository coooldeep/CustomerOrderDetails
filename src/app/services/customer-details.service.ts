import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { EndPointsService } from '../common-utils/end-points.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private httpClient: HttpClient, private sessionStorageService: SessionStorageService, private endPointsService: EndPointsService) { }

  customerDetails() {
    let accessToken = this.sessionStorageService.retrieve('token');
    return this.httpClient.get(this.endPointsService.fetchCustomerDetailsAPI,
      {
        headers: new HttpHeaders().set('x-access-token', accessToken)
      })
  }
}
