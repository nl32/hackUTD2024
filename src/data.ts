import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

type regions = 'South';
export async function averageEnergy(sqft: number, region: regions) {
  const db = await open({
    filename: 'data.db',
    driver: sqlite3.Database,
  });
  const average = (await db.get(
    `SELECT avg(ELBTU) from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)}`,
  )) as { 'avg(ELBTU)': number };
  return average['avg(ELBTU)'];
}

function sqftCategory(sqft: number) {
  if (sqft < 5001) return 2;
  if (sqft < 10001) return 3;
  if (sqft < 25001) return 4;
  if (sqft < 50001) return 5;
  if (sqft < 100001) return 6;
  if (sqft < 200001) return 7;
  if (sqft < 500001) return 8;
  if (sqft < 1000001) return 9;
  return 10;
}

function regionId(region: regions) {
  switch (region) {
    case 'South':
      return 3;
  }
}