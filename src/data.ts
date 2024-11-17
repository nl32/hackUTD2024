import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export type regions = 'Northeast' | 'Midwest' | 'South' | 'West';
export async function averageEnergy(sqft: number, region: regions) {
  const db = await open({
    filename: 'data.db',
    driver: sqlite3.Database,
  });
  const average = (await db.get(
    `SELECT avg(ELBTU) from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)}`,
  )) as { 'avg(ELBTU)': number };
  return average['avg(ELBTU)'] / 12;
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
    case 'Northeast':
      return 1;
    case 'Midwest':
      return 2;
    case 'West':
      return 4;
  }
}

export async function averageWater(sqft: number, region: regions) {
  const db = await open({
    filename: 'data.db',
    driver: sqlite3.Database,
  });
  const query = (await db.get(
    `SELECT total(WTCNS),total(SQFT) from water where region=${regionId(region)}`,
  )) as { 'total(WTCNS)': number; 'total(SQFT)': number };
  console.log(query);
  return ((query['total(WTCNS)'] / query['total(SQFT)']) * sqft) / 12;
}
