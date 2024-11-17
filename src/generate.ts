import { averageEnergy, averageGas, averageWater, regions } from './data';

export async function energyHistory(
  sqft: number,
  region: regions,
  variance: number,
  offset: number,
) {
  const avgEnergy = await averageEnergy(sqft, region);
  const energies: number[] = [];

  for (let i = 0; i < 12; i++) {
    energies.push(
      Math.round(
        avgEnergy +
          avgEnergy * getRandomArbitrary(-variance, variance) +
          offset,
      ),
    );
  }
  return energies;
}

export async function gasHistory(
  sqft: number,
  region: regions,
  variance: number,
  offset: number,
) {
  const avgEnergy = await averageGas(sqft, region);
  const energies: number[] = [];

  for (let i = 0; i < 12; i++) {
    energies.push(
      Math.round(
        avgEnergy +
          avgEnergy * getRandomArbitrary(-variance, variance) +
          offset,
      ),
    );
  }
  return energies;
}

export async function waterHistory(
  sqft: number,
  region: regions,
  variance: number,
  offset: number,
) {
  const avgWater = await averageWater(sqft, region);
  const energies: number[] = [];

  for (let i = 0; i < 12; i++) {
    energies.push(
      Math.round(
        avgWater + avgWater * getRandomArbitrary(-variance, variance) + offset,
      ),
    );
  }
  return energies;
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
