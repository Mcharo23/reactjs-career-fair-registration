import React, { useState } from "react";
import useRandomNumberGenerator from "../../../../global/function/random-number-generator";
import { Flex, Paper, Select, Space, Title } from "@mantine/core";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { color } from "../../../../lib/colors";

type YearSalesType = {
  year: string;
  data: { month: string; total_sales: number; loss: number }[];
};

const YearlySalesStats: React.FC = () => {
  const { monthlyLossGenerator, monthlySalesGenerator } =
    useRandomNumberGenerator();

  const YEARS_SALES = [
    {
      year: "2023",
      data: [
        {
          month: "Jan",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Feb",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Mar",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Apr",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "May",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jun",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jul",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Aug",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Sep",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Oct",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Nov",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Dec",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
      ],
    },
    {
      year: "2022",
      data: [
        {
          month: "Jan",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Feb",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Mar",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Apr",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "May",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jun",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jul",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Aug",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Sep",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Oct",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Nov",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Dec",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
      ],
    },
    {
      year: "2021",
      data: [
        {
          month: "Jan",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Feb",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Mar",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Apr",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "May",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jun",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jul",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Aug",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Sep",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Oct",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Nov",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Dec",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
      ],
    },
    {
      year: "2020",
      data: [
        {
          month: "Jan",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Feb",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Mar",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Apr",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "May",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jun",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jul",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Aug",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Sep",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Oct",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Nov",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Dec",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
      ],
    },
    {
      year: "2019",
      data: [
        {
          month: "Jan",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Feb",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Mar",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Apr",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "May",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jun",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Jul",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Aug",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Sep",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Oct",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Nov",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
        {
          month: "Dec",
          total_sales: monthlySalesGenerator(),
          loss: monthlyLossGenerator(),
        },
      ],
    },
  ];

  const [yearSales, setYearSales] = useState<YearSalesType>(YEARS_SALES[0]);

  const handleOnYearChange = (saleYear: string) => {
    const yearData = YEARS_SALES.find((year) => year.year === saleYear);

    if (yearData) {
      setYearSales(yearData);
    }
  };

  return (
    <Paper p={"md"} shadow="sm" radius={"md"} w={"100%"}>
      <Flex align={"center"} justify={"space-between"} gap={"md"}>
        <Title order={2} c={`${color.blue_950}`}>
          Sales statistics
        </Title>
        <Select
          variant="filled"
          value={yearSales.year}
          data={YEARS_SALES.map((year) => year.year)}
          onChange={(value) => handleOnYearChange(value ?? "")}
        />
      </Flex>
      <Space h="md" />
      <ResponsiveContainer width={"100%"} height={400}>
        <AreaChart
          width={730}
          height={250}
          data={yearSales.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#008000" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#008000" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D92525" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#EA4A4A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total_sales"
            stroke="#00FF51"
            fillOpacity={1}
            fill="url(#colorUv)"
            name="Monthly income"
          />
          <Area
            type="monotone"
            dataKey="loss"
            stroke="#FF0000"
            fillOpacity={1}
            fill="url(#colorPv)"
            name="Monthly loss"
          />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default YearlySalesStats;
