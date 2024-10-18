import { colors } from '@unovis/ts'

export type EducationDatum = {
  country: string;
  bachelors: number;
  masters: number;
  doctoral: number;
  total?: number;
};

export type ElectionDatum = {
  year: number;
  democrat: number;
  republican: number;
  other: number;
  libertarian: number;
}

export enum Format {
  Vinyl = 'vinyl',
  Cassette = 'cassette',
  Cd = 'cd',
  Download = 'download',
  Streaming = 'streaming',
}

export type DataRecord = Record<Format, number> & { year: number };

export type FormatConfig = {
  format: Format;
  color: string;
  icon: string;
  label: string;
}


export const labels: FormatConfig[] = [
  {
    format: Format.Vinyl,
    color: 'var(--vis-color0)',
    icon: 'vinyl-fill',
    label: 'Vinyl',
  }, {
    format: Format.Cassette,
    color: 'var(--vis-color1)',
    icon: 'cassette-fill',
    label: 'Cassette',
  }, {
    format: Format.Cd,
    color: 'var(--vis-color2)',
    icon: 'disc-fill',
    label: 'CD',
  }, {
    format: Format.Download,
    color: 'var(--vis-color3)',
    icon: 'music-player-fill',
    label: 'Download',
  }, {
    format: Format.Streaming,
    color: 'var(--vis-color4)',
    icon: 'soundwave',
    label: 'Streaming',
  },
]



export type DataRecord2 = {
  name: string;
  startDate: number;
  endDate: number;
  type: ProductType | `${ProductType}`;
  description?: string;
}
export enum ProductType { App = 'app', Hardware = 'hardware', Service = 'service' }

export const colorMap: Record<ProductType, string> = {
  [ProductType.App]: colors[0],
  [ProductType.Hardware]: colors[1],
  [ProductType.Service]: colors[2],
}