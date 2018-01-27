import { Component } from '@angular/core';
import { HotelService } from './hotel.service';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HotelService, MatIconRegistry]
})
export class AppComponent {
	// hotels: IHotel[];
	Arr = Array;
	hotels: any;
	fieldHotelName: string;
	fieldRangeStars: number;
	fieldPriceMin: number;
	fieldPriceMax: number;

	searching: bool = true;

	setFieldStars(num) {
		this.fieldRangeStars = num;
	}
	search() {
		let filters = {
			name: this.fieldHotelName || '',
			stars: this.fieldRangeStars || '',
			// price: '{$gt: '+this.fieldPriceMin+'}'
			priceMin: this.fieldPriceMin || ''
			priceMax: this.fieldPriceMax || ''
		}
		this.searching = true;
		this.hotelService.getHotels(filters).subscribe(hotels=>{
			this.searching = false;
			this.hotels = hotels;

		});
	}
	constructor (hotelService: HotelService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
		this.hotelService = hotelService;
		hotelService.getHotels().subscribe(hotels=>{
			this.hotels = hotels;
			this.searching = false;
		});
		iconRegistry.addSvgIcon(
			'almundo-star',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/star.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-search',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/search.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-bathtub',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/bathtub.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-bathrobes',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/bathrobes.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-beach',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/beach.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-beach-pool-facilities',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/beach-pool-facilities.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-business-center',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/business-center.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-children-club',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/children-club.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-coffe-maker',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/coffe-maker.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-deep-soaking-bathtub',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/deep-soaking-bathtub.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-fitness-center',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/fitness-center.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-garden',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/garden.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-kitchen-facilities',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/kitchen-facilities.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-newspaper',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/newspaper.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-nightclub',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/nightclub.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-restaurant',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/restaurant.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-safety-box',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/safety-box.svg')
		);
		iconRegistry.addSvgIcon(
			'almundo-separate-bredroom',
			sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/separate-bredroom.svg')
		);
	}
}

interface IHotel {
	id: string;
	name: string;
	stars: number;
	price: number;
	image: string;
	amenities: string[];
}