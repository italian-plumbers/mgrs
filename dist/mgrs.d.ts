/**
 * Copyright (c) Space Dynamics Laboratory.
 * The U.S. federal government retains a royalty-free, non-exclusive,
 * non-transferable license to VANTAGE pursuant to 48 CFR 52.227-14
 * (Civilian Agencies) or DFARS 252.227-7014 (Defense Agencies).
 */

declare module "mgrs" {
  interface LatLon {
    lat: number;
    lon: number;
  }

  interface UTM {
    easting: string;
    northing: string;
    zoneLetter: string;
    zoneNumber: string;
  }

  class Mgrs {
    latLonToMGRS(ll: LatLon): string;
    MGRStoLatLonPoint(mgrs: string): [number, number, number, number];
    UTMtoLL(coordinate: UTM): LatLon;
    LLtoUTM(coordinate: LatLon): UTM;
  }

  export default Mgrs.prototype;
}
