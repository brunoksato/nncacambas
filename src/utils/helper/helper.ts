export const maskDate = (date) => {
  if (!date) return ``;

  if (!date?.includes(`/`) && !date?.includes(`-`)) {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return `${day}/${month}/${year}`;
  }

  return date;
};

export const getMonthName = (month) => {
  switch (month) {
    case `01`:
      return `Jan`;
    case `02`:
      return `Fev`;
    case `03`:
      return `Mar`;
    case `04`:
      return `Abr`;
    case `05`:
      return `Mai`;
    case `06`:
      return `Jun`;
    case `07`:
      return `Jul`;
    case `08`:
      return `Ago`;
    case `09`:
      return `Set`;
    case `10`:
      return `Out`;
    case `11`:
      return `Nov`;
    case `12`:
      return `Dez`;
    default:
      return ``;
  }
};

export const convertText = (text) => {
  if (!text) return ``;

  return text.replace(/\n/g, `<br>`);
};

export const secondsToTime = (v: number) => {
  const h = Math.floor(v / 3600)
      .toString()
      .padStart(2, `0`),
    m = Math.floor((v % 3600) / 60)
      .toString()
      .padStart(2, `0`),
    s = Math.floor(v % 60)
      .toString()
      .padStart(2, `0`);

  if (h === `00`) {
    return m + `:` + s;
  }

  return h + `:` + m + `:` + s;
};
