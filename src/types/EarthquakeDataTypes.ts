export type EQSortTypes = "asc" | "desc";

export interface IEarthquakeData {
  type: string;
  metadata: Metadata;
  features: IEQFeature[];
  bbox: number[];
}

export interface IEQFeature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: number;
  url: string;
  detail: string;
  felt: number | null;
  cdi: number | null;
  mmi: null;
  alert: null;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number | null;
  dmin: number | null;
  rms: number;
  gap: number | null;
  magType: string;
  type: string;
  title: string;
}

export interface Metadata {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}
