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

  function latLonToMGRS(ll: LatLon): string;
  function MGRStoLatLonPoint(mgrs: string): [number, number, number, number];
  function UTMtoLL(coordinate: UTM): LatLon;
  function LLtoUTM(coordinate: LatLon): UTM;

  export { LatLon, latLonToMGRS, LLtoUTM, MGRStoLatLonPoint, UTM, UTMtoLL };
}
