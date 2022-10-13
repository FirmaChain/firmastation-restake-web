export const isValid = (data: any) => {
  if (data === null) return false;
  if (data === undefined) return false;
  if (Object.keys(data).length === 0) return false;

  return true;
};

export const convertNumberFormat = (value: string | number, point: number = 2): string => {
  return convertCurrent(makeDecimalPoint(value, point));
};

export const makeDecimalPoint = (value: string | number, point: number = 2) => {
  if (value === undefined) return '0';
  const val = convertNumber(value).toString();
  const pointPos = val.indexOf('.');

  if (pointPos === -1) return Number(val).toFixed(point);

  const splitValue = val.split('.');
  const belowDecimal = splitValue[1].substring(0, point);
  return Number(`${splitValue[0]}.${belowDecimal}`).toFixed(point);
};

export const convertCurrent = (value: number | string) => {
  var val = value.toString().split('.');
  val[0] = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return val.join('.');
};

export const convertNumber = (value: string | number | undefined) => {
  if (isNaN(Number(value))) return 0;

  return Number(value);
};

export const changeDateFormat = (dateString: string) => {
  const nowDate = new Date(dateString);

  const year = nowDate.getFullYear().toString().slice(2, 4);
  const month = nowDate.getMonth() + 1;
  const day = nowDate.getDate();
  const hour = nowDate.getHours();
  const minute = nowDate.getMinutes();
  const second = nowDate.getSeconds();

  let newMonth = month < 10 ? `0${month}` : month;
  let newDay = day < 10 ? `0${day}` : day;
  let newHour = hour < 10 ? `0${hour}` : hour;
  let newMinute = minute < 10 ? `0${minute}` : minute;
  let newSecond = second < 10 ? `0${second}` : second;
  
  return `${year}/${newMonth}/${newDay} ${newHour}:${newMinute}:${newSecond}`;
}

export const convertTransactionHash = (txHash: string, Hashlength: number) => {
  const frontString = txHash.slice(0, Hashlength);
  const length = txHash.length - 1;
  const endString = txHash.slice(length - Hashlength, length);

  return `${frontString}...${endString}`;
}

export const getGmtOffset = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  console.log(offset);
  const GMT = offset / 60 < 0 ? '+' + Math.abs(offset / 60) : (offset / 60) * -1;
  return `GMT${GMT}`;
}