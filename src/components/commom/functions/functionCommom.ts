export const flattenArray: any = (arr: any[]) => {
  const flattened = [].concat(...arr);
  return flattened.some((item) => Array.isArray(item))
    ? flattenArray(flattened)
    : flattened;
};

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const changeDayVN = (day: string) => {
  switch (day) {
    case "Sunday":
      return "Chủ nhật";
    case "Monday":
      return "Thứ hai";
    case "Tuesday":
      return "Thứ ba";
    case "Wednesday":
      return "Thứ tư";
    case "Thursday":
      return "Thứ năm";
    case "Friday":
      return "Thứ sáu";
    case "Saturday":
      return "Thứ bảy";
    default:
      break;
  }
}
