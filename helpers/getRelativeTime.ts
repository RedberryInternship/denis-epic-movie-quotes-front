const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const units = {
  year: 365 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

export const getRelativeTime = (d1: Date, d2: Date = new Date()) => {
  const elapsed = d1.getTime() - d2.getTime();

  for (const [unit, value] of Object.entries(units)) {
    if (Math.abs(elapsed) > value || unit === 'second') {
      return rtf.format(
        Math.round(elapsed / value),
        unit as 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'
      );
    }
  }
};
