// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AccessTolen : "",
  URL : 'http://mybus.greatersudbury.ca',
  Auth_token : '?auth_token=71Jf7p4ql0wlWPgwp3lVEQ',
  GMAP_API : 'AIzaSyAFtJmKxdM10LaC6XJ15B-43GnVgaeK-o0'
};
export enum BASE_API  {
  get_announcements = "/api/v2/announcements",
  get_destinations = "/api/v2/destinations",
  get_destination = "/api/v2/destinations/{number}",
  get_stops = "/api/v2/stops",
  get_stop = "/api/v2/stops/1000",
  get_routes = "/api/v2/routes",
  get_route = "/api/v2/route",
}
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
