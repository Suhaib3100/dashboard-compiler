export type DataRecord = { x: number; y: number }



type Cities = {
  austin: number;
  ny: number;
  sf: number;
}

export type CityTemps = Cities & {
  austin: number;
  ny: number;
  sf: number;
  date: string;
}

export type CityLabels = {
  [k in keyof Cities]: string;
};



export type Country = {
  id: string;
  label: string;
  color: string;
}

export type DataRecord2 = {
  year: number;
  us: number;
  cn?: number;
}

export const countries: Country[] = [{
  id: 'cn',
  label: 'China',
  color: 'var(--vis-color0)',
}, {
  id: 'us',
  label: 'USA',
  color: 'var(--vis-color1)',
}]

export const legendItems = [
  { name: 'undefined', value: undefined },
  { name: '0 or null', value: null },
  { name: '300M', value: 300 },
]