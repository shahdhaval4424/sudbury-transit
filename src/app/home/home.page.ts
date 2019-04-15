import { Component } from '@angular/core';
import { HttpBackendService } from '../http-backend.service';
import { timer } from 'rxjs';
import { stop } from 'src/model/stop';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  stops : stop[];
  map: GoogleMap;
    constructor(public httpServices : HttpBackendService,
                private geolocation: Geolocation,
                private platform : Platform){
    //this.startTimer();
  }

  async ngOnInit()
  {
    await this.platform.ready();
    await this.loadMap();
  }

  // async startTimer() // 1 minute timer to pull latest data.
  // {
  //   let that = this;
  //   //timer(0,60 * 1000).subscribe(async val => {
  //     that.stops = await that.httpServices.getStops();
  //     this.loadMap();
  //     //console.log(that.stops);
  //   //}); //show time in timer
  // }

  // toggleDetails(data) {
  //   console.log(data);
  //   if (data.showDetails) {
  //     data.showDetails = false;
  //     data.icon = 'arrow-dropdown-circle';
  //   } else {
  //     data.showDetails = true;
  //     data.icon = 'arrow-dropup-circle';
  //   }
  // }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');
    //this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      // let currentPoint: Array<ILatLng> = [
      //     {lat:31, lng:-118},
      // ];
      // this.map = GoogleMaps.create('map_canvas', {
      //   camera: {
      //     target: currentPoint
      //   }
      // });
    //}).catch((error) => {
    //    console.log('Error getting location', error);
    //});

    // let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>();
    // this.stops.forEach(stopMarker => {
    //       POINTS.push({
    //         position: {lat:stopMarker.latitude, lng:stopMarker.longitude},
    //         iconData: stopMarker.icon
    //       })
    //   });
    // let bounds: ILatLng[] = POINTS.map((data: any, idx: number) => {
    //     console.log(data);
    //     return data.position;
    //   });
    // this.map = GoogleMaps.create('map_canvas', {
    //     camera: {
    //       target: bounds
    //     }
    //   });

    //   POINTS.forEach((data: any) => {
    //     data.disableAutoPan = true;
    //     let marker: Marker = this.map.addMarkerSync(data);
    //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
    //     marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
    //   });
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   let mapOptions: GoogleMapOptions = {
    //     camera: {
    //        target: {
    //          lat: resp.coords.latitude,
    //          lng: resp.coords.longitude
    //        },
    //        zoom: 18,
    //        tilt: 30
    //      }
    //   };
    //   this.map = GoogleMaps.create('map_canvas', mapOptions);
    //   this.stops.forEach(stopMarker => {
    //     let marker: Marker = this.map.addMarkerSync({
    //       title: stopMarker.name + ' (' + stopMarker.number +')',
    //       icon: 'blue',
    //       animation: 'DROP',
    //       position: {
    //         lat: stopMarker.latitude,
    //         lng: stopMarker.longitude
    //       }
    //     });
    //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //       //alert(marker.getTitle());
    //       //marker.setTitle("3 Mins");
    //     });  
    //   });
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });    
  }

  onMarkerClick(params: any) {
    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }

}
