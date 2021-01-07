import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndPointsService {
  url = 'https://common.laalsa.com/support/support/';
  loginAPI = this.url + 'credentials/login';
  fetchCustomerDetailsAPI = this.url + 'crm/detailedOrderDetails?orderId=1f5cf4f0-5ec7-11ea-a92f-aba527ffa0cb';

  constructor() { }
}
