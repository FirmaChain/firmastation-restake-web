import moment from 'moment';

export const getDateFormat = (date: string) => {
  if (date === '') date = new Date().toISOString();

  const dateFormat = moment(date).format('YYYY-MM-DD HH:mm:ss');

  return `${dateFormat}`;
};