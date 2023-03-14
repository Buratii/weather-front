export interface Condition {
  code: number;
  icon: string;
  text: string;
}

export interface Location {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface Current {
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  gust_mph: number;
  gust_kph: number;
  cloud: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  last_updated: string;
  last_updated_epoch: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

export interface Weather {
  location: Location;
  current: Current;
}