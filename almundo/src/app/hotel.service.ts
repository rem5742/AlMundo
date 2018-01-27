import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService {
	constructor (private http:HttpClient) {}
	getHotels(filters) {
		return this.http.get('http://localhost:3000/hotels', { params: filters }).map(res=>{
			return res;
		});
	}
}
