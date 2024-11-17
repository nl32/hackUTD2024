import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const heatingOptions = [
  'Electric furnace',
  'Electric packaged unit',
  'Electric boiler',
  'Electric heat pump',
  'Electric space heater',
  'Electric fireplace',
  'Electric duct reheat',
  'Other electric heating equipment',
  'Natural gas furnace',
  'Natural gas packaged unit',
  'Natural gas boiler',
  'Natural gas heat pump',
  'Natural gas space heater',
  'Natural gas fireplace',
  'Other natural gas heating equipment',
  'Fuel oil  furnace',
  'Fuel oil boiler',
  'Fuel oil space heater',
  'Other fuel oil heating equipment',
  'Propane furnace',
  'Propane packaged unit',
  'Propane boiler',
  'Propane heat pump',
  'Propane space heater',
  'Propane fireplace',
  'Other propane heating equipment',
  'District steam heating system',
  'District hot water heating system',
  'Wood furnace',
  'Wood space heater',
  'Wood fireplace',
  'Other wood heating equipment',
  'Coal furnace',
  'Coal boiler',
  'Other coal heating equipment',
  'Solar thermal heating',
  'Other source furnace',
  'Other source packaged unit',
  'Other source boiler',
  'Other source space heater',
  'Other source fireplace',
  'Other source other heating equipment',
];

const coolingOptions = [
  'Residential-type split system',
  'Packaged unit',
  'Electric chiller',
  'Heat pump',
  'Individual air conditioner',
  'Swamp cooler',
  'Other electric air conditioning equipment',
  'Natural gas chiller',
  'Other natural gas air conditioning equipment',
  'Fuel oil/diesel/kerosone chiller',
  'Other fuel oil/diesel/kerosene air conditioning equipment',
  'Propane chiller',
  'Other propane air conditioning equipment',
  'Steam chiller',
  'Other steam air conditioning equipment',
  'District chilled water system',
  'Other source air conditioning equipment',
];

const db = await open({
  filename: path.join(process.cwd(), 'src/app/data.db'),
  driver: sqlite3.Database,
});
export type regions = 'Northeast' | 'Midwest' | 'South' | 'West';
export async function averageEnergy(sqft: number, region: regions) {
  const average = (await db.get(
    `SELECT avg(ELBTU) from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)}`,
  )) as { 'avg(ELBTU)': number };
  return average['avg(ELBTU)'] / 12;
}
export async function averageGas(sqft: number, region: regions) {
  const average = (await db.get(
    `SELECT avg(MFBTU) from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)}`,
  )) as { 'avg(MFBTU)': number };
  return average['avg(MFBTU)'] / 12;
}

export async function genericAverageEnergy() {
  const average = (await db.get(
    `SELECT avg(ELBTU) from energy`,
  )) as { 'avg(ELBTU)': number };
  return average['avg(ELBTU)'] / 12;
}

export async function averageFuel(sqft: number, region: regions) {
  const average = (await db.get(
    `SELECT avg(MFBTU) from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)}`,
  )) as { 'avg(MFBTU)': number };
  return average['avg(MFBTU)'] / 12;
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
  const query = (await db.get(
    `SELECT total(WTCNS),total(SQFT) from water where region=${regionId(region)}`,
  )) as { 'total(WTCNS)': number; 'total(SQFT)': number };
  return ((query['total(WTCNS)'] / query['total(SQFT)']) * sqft) / 12;
}

export async function heatingMode(sqft: number, region: regions) {
  const query = (await db.get(
    `select MAINHT from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)} group by MAINHT order by count(MAINHT) desc limit 1;`,
  )) as { MAINHT: number };
  return heatingOptions[query.MAINHT - 1];
}

export async function coolingMode(sqft: number, region: regions) {
  const query = (await db.get(
    `select MAINCL from energy where SQFTC=${sqftCategory(sqft)} and region=${regionId(region)} group by MAINCL order by count(MAINCL) desc limit 1;`,
  )) as { MAINCL: number };
  return coolingOptions[query.MAINCL - 1];
}
