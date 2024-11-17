import NavBar from 'src/components/navBar';
import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { z } from 'zod';
import { db } from 'src/db';
import { building } from 'src/db/schema';
import { energyHistory, waterHistory } from 'src/generate';
import { redirect } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  region: z.union([
    z.literal('South'),
    z.literal('Northeast'),
    z.literal('Midwest'),
    z.literal('West'),
  ]),
  size: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number()),
  cost: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number()),
  heating: z.string().min(1),
  ac: z.string().min(1),
  FLUORP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
  CFLRP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
  BULBP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
  HALOP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
  HIDP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
  LEDP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
  OTLTP: z
    .string()
    .transform((s) => Number(s))
    .pipe(z.number().default(0)),
});

export default async function NewBuilding() {
  async function createBuilding(formData: FormData) {
    'use server';

    const rawFormData = {
      name: formData.get('name'),
      location: formData.get('location'),
      region: formData.get('region'),
      size: formData.get('size'),
      cost: formData.get('cost'),
      heating: formData.get('heating'),
      ac: formData.get('ac'),
      FLUORP: formData.get('FLUORP'),
      CFLRP: formData.get('CFLRP'),
      BULBP: formData.get('BULBP'),
      HALOP: formData.get('HALOP'),
      HIDP: formData.get('HIDP'),
      LEDP: formData.get('LEDP'),
      OTLTP: formData.get('OTLTP'),
    };
    const parsedData = formSchema.parse(rawFormData);
    const newBuilding = await db
      .insert(building)
      .values({
        title: parsedData.name,
        location: parsedData.location,
        region: parsedData.region,
        squareFeet: parsedData.size,
        MAINHT: parsedData.heating,
        MAINCL: parsedData.ac,
        FLUORP: parsedData.FLUORP,
        CFLRP: parsedData.CFLRP,
        BULBP: parsedData.BULBP,
        HALOP: parsedData.HALOP,
        HIDP: parsedData.HIDP,
        LEDP: parsedData.LEDP,
        OTLTP: parsedData.OTLTP,
        energy: await energyHistory(parsedData.size, parsedData.region, 0.1, 0),
        water: await waterHistory(parsedData.size, parsedData.region, 0.08, 0),
      })
      .returning();
    redirect(`/building/${newBuilding[0].id}`);
  }

  const heatOptions = [
    'Electric furnace',
    'Electric space heater',
    'Electric packaged unit',
    'Electric boiler',
    'Electric heat pump',
    'Other electric heating equipment',
    'Natural gas furnace',
    'Natural gas space heater',
    'Propane boiler',
  ];

  const acOptions = [
    'Residential-type split system',
    'Packaged unit',
    'Electric chiller',
    'Heat pump',
    'Individual air conditioner',
    'Swamp cooler',
    'Natural gas chiller',
    'Fuel oil/diesel/kerosene chiller',
    'Steam chiller',
    'District chilled water system',
    'Other source air conditioning equipment',
  ];
  return (
    <div className="flex h-screen flex-col items-center">
      <NavBar />
      <div className="flex w-1/2 flex-col">
        <Card className="my-10 p-5">
          <form action={createBuilding}>
            <Typography variant="h5">Add a New Building</Typography>
            <FormControl fullWidth>
              <TextField
                className="my-2"
                name="name"
                id="name"
                label="Name"
                required
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                className="my-2"
                name="location"
                id="location"
                label="Location"
                required
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="region-label">Region</InputLabel>
              <Select
                className="my-2"
                label="Region"
                name="region"
                labelId="region-label"
                id="region"
                defaultValue=""
                required
              >
                <MenuItem value="South">South</MenuItem>
                <MenuItem value="Northeast">Northeast</MenuItem>
                <MenuItem value="Midwest">Midwest</MenuItem>
                <MenuItem value="West">West</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                className="my-2"
                id="name"
                name="size"
                label="Size"
                required
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                className="my-2"
                id="cost"
                name="cost"
                label="Average Montly Costs"
                required
              />
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel id="heating-label">Heating Type</InputLabel>
              <Select
                className="my-2"
                label="Heating Type"
                labelId="heating-label"
                id="heating"
                name="heating"
                defaultValue=""
                required
              >
                {heatOptions.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel id="ac-label">Air Conditioning Type</InputLabel>
              <Select
                className="my-2"
                label="Air Conditioning Type"
                labelId="ac-label"
                id="ac"
                name="ac"
                defaultValue=""
                required
              >
                {acOptions.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Typography variant="body1">
                Percentages of lighting types
              </Typography>
              <div className="flex w-full flex-wrap">
                <TextField
                  className="m-2"
                  type="number"
                  name="FLUORP"
                  label="% Fluorescent"
                ></TextField>
                <TextField
                  className="m-2"
                  type="number"
                  name="CFLRP"
                  label="% Compact Fluorexcent"
                ></TextField>
                <TextField
                  className="m-2"
                  type="number"
                  name="BULBP"
                  label="% Incandescent"
                ></TextField>
                <TextField
                  className="m-2"
                  type="number"
                  name="HALOP"
                  label="% Halogen"
                ></TextField>
                <TextField
                  className="m-2"
                  type="number"
                  name="HIDP"
                  label="% HID"
                ></TextField>
                <TextField
                  className="m-2"
                  type="number"
                  name="LEDP"
                  label="% LED"
                ></TextField>
                <TextField
                  className="m-2"
                  type="number"
                  name="OTLTP"
                  label="% Other Lighting"
                ></TextField>
              </div>
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              className="mb-5 mt-10 rounded-full"
            >
              Add new building
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
