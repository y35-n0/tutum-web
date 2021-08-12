export class Position {
  lat: number;
  lng: number;
  alt: number;
  dt: Date;

  constructor(
    lat: number = 33.450701,
    lng: number = 126.570667,
    alt: number = 33,
    dt: Date = new Date()
  ) {
    this.lat = lat;
    this.lng = lng;
    this.alt = alt;
    this.dt = dt;
  }
}
