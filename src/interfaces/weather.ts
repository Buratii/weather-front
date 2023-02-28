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
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  temp_c: number;
  temp_f: number;
  uv: number;
}

export interface Weather {
  location: Location;
  current: Current;
}