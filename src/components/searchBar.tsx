'use client';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function SearchBar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        height: '15vh', // Full viewport height
        backgroundColor: '#f5f2e8', // Match the background color
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '700px', //Set width of the search bar
        }}
      >
        <TextField
          id="search-bar"
          variant="outlined"
          placeholder="Search..."
          style={{
            flexGrow: 1,
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Floating Action Button */}
        <Fab
          size="medium"
          color="default"
          style={{
            marginLeft: '20px',
            backgroundColor: '#e8e6e3',
          }}
          onClick={() => console.log('Add clicked')}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default SearchBar;
