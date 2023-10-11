import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LendingAllocations = () => {
  // useState
  const data = {
    labels: ["Strategy 1", "Strategy 2", "Strategy 3", "Strategy 4"],
    datasets: [
      {
        label: "# of Votes",
        data: [12.5, 12.5, 25, 50],
        backgroundColor: ["#E289F2", "#7879F1", "#B085FF", "#855CF8"],
      },
    ],
  };

  return (
    <Box flex={1} m={2}>
      <Paper elevation={3}>
        <Box display={"flex"} p={5} justifyContent={"space-between"}>
          <Typography fontSize={18}>Lending Allocations</Typography>
          <Typography fontSize={18}>$5000 USDC</Typography>
        </Box>
        <Box padding={7}>
          <Pie
            // options={...}
            data={data}
          />
        </Box>
      </Paper>
    </Box>
  );
};

const StrategyPerformanceTable = () => {
  const columns: GridColDef[] = [
    { field: "strategy", headerName: "Strategy", width: 70 },
    { field: "tvl", headerName: "TVL", width: 130 },
    { field: "vol", headerName: "Volatility", width: 130 },
    {
      field: "collateral",
      headerName: "Collateral",
      type: "number",
      width: 90,
    },
    {
      field: "pnl",
      headerName: "PNL",
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      strategy: 1,
      tvl: "$100,000",
      vol: "Low",
      collateral: "$100",
      pnl: "+$100,000",
    },
    {
      id: 2,
      strategy: 2,
      tvl: "$100,000",
      vol: "Medium",
      collateral: "$100",
      pnl: "-$84.23",
    },
    {
      id: 3,
      strategy: 3,
      tvl: "$100,000",
      vol: "Medium",
      collateral: "$100",
      pnl: "+24.53",
    },
    {
      id: 4,
      strategy: 4,
      tvl: "$100,000",
      vol: "High",
      collateral: "$100",
      pnl: "+45.98",
    },
  ];

  return (
    <Box flex={1} m={2}>
      <Paper elevation={3}>
        <Box display={"flex"} p={2}>
          <Typography fontSize={18}>Strategy Performance</Typography>
        </Box>
        <Box padding={2}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </Paper>
    </Box>
  );
};

function App() {
  return (
    <Box display={"flex"} flex={1} padding={4} justifyContent={"center"}>
      <LendingAllocations />
      <StrategyPerformanceTable />
    </Box>
  );
}

export default App;
