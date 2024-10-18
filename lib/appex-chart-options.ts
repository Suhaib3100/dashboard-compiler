export const getYAxisConfig = (color: string): { labels: { style: { color: string; fontFamily: string; } } } => ({
  labels: {
    style: {
      color: color,
      fontFamily: "Inter",
    },
  },
});


export const getXAxisConfig = (colors: string): { } => ({
  categories: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  labels: getLabel(colors),
  axisBorder: {
    show: false,
  },
  axisTicks: {
    show: false,
  },
});

export const getLabel = (colors:any): {  } => ({
  style: {
    colors: colors,
    fontFamily: "Inter",
  },
});


export const getGridConfig = (color: string): { show: boolean; borderColor: string; strokeDashArray: number; position: string; } => ({
  show: true,
  borderColor: color,
  strokeDashArray: 10,
  position: "back",
});