import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 15,
    minZoom: 8,
    mapId: '49e7a56523253342',
  };
  markers: MapMarker[] = [];
  infoContent = '';

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: 1,
        lng: 2,
      },
      label: {
        color: 'red',
        text: 'Marker label',
      },
      title: 'Marker title',
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    } as MapMarker);
  }

  openInfo(marker: MapMarker) {
    this.info.open(marker);
  }
}
