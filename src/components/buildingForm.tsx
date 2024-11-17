'use client';
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
import { useState } from 'react';

export function BuildingForm() {
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

  // name
  // location (city, state)
  // region
  // size (sq. ft)
  // monthly costs
  // energy use last 12 months - electricty and natural gas/fuel oil
  // water usage last 12 months
  // type of heating - dropdown
  // lighting breakdown percent

  return (
    <Card className="p-5 my-10">
      <form>
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
            <MenuItem value="south">South</MenuItem>
            <MenuItem value="northeast">Northeast</MenuItem>
            <MenuItem value="midwest">Midwest</MenuItem>
            <MenuItem value="west">West</MenuItem>
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
          <Typography variant="body1">Percentages of lighting types</Typography>
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
        <Button variant="contained" type="submit" className="mb-5 mt-10 rounded-full">
          Add new building
        </Button>
      </form>
    </Card>
  );
}
