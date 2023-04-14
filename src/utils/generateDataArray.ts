interface Data {
  date: string;
  amount: number;
}

export function generateDataArray(): Data[] {
  const dataArray: Data[] = [];

  for (let i = 0; i < 15; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const amount = Math.floor(Math.random() * 100);

    dataArray.push({ date: date.toISOString().substring(0, 10), amount });
  }

  return dataArray;
}