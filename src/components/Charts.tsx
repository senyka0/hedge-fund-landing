"use client";
import React, { useState } from "react";
import {
  subDays,
  parseISO,
  subYears,
  subMonths,
  format,
  subWeeks,
  startOfWeek,
} from "date-fns";
import { motion } from "framer-motion";
import {
  AreaChart,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";
import { DataProps } from "@/global";
import Tooltip from "@/components/Tooltip";

export default function Charts({ data = [] }: DataProps) {
  const [selectedInterval, setSelectedInterval] = useState("ALL");
  const [filteredData, setFilteredData] = useState(data);

  const intervals = ["ALL", "1Y", "6M", "3M", "1M"];
  const now = new Date();
  const days = now.getDay() + 21;
  const datesArray: string[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(now, i);
    datesArray.push(format(date, "yyyy-MM-dd"));
  }
  const monday = startOfWeek(now, { weekStartsOn: 1 });
  const returns = data
    .map((item, index, arr) => {
      if (index != 0) {
        return (
          (item["Performance"] / arr[index - 1]["Performance"] - 1) *
          100
        ).toString();
      }
    })
    .filter((x) => x !== undefined)
    .slice(-days);
  returns.push(...new Array(28 - days).fill("-"));
  const splitReturns = [
    returns.slice(0, 7),
    returns.slice(7, 14),
    returns.slice(14, 21),
    returns.slice(21),
  ];
  const handleIntervalChange = (interval: string) => {
    setSelectedInterval(interval);
    let filtered = data;

    switch (interval) {
      case "1Y":
        filtered = data.filter(
          (d) => parseISO(d.timestamp.split(" ")[0]) >= subYears(now, 1)
        );
        break;
      case "6M":
        filtered = data.filter(
          (d) => parseISO(d.timestamp.split(" ")[0]) >= subMonths(now, 6)
        );
        break;
      case "3M":
        filtered = data.filter(
          (d) => parseISO(d.timestamp.split(" ")[0]) >= subMonths(now, 3)
        );
        break;
      case "1M":
        filtered = data.filter(
          (d) => parseISO(d.timestamp.split(" ")[0]) >= subMonths(now, 1)
        );
        break;
      default:
        filtered = data;
        break;
    }
    setFilteredData(filtered);
  };

  return (
    <div className="mt-[300px] md:mt-[50px] lg:mt-[50px] xl:mt-[150px] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#111121] w-full h-full z-0">
      <div className="mt-[300px] md:mt-[250px] lg:mt-[250px] xl:mt-[150px] flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{
            opacity: 0.5,
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "5rem"
                : "15rem",
          }}
          whileInView={{
            opacity: 1,
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "15rem"
                : "30rem",
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#474BB5] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-[#111121] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#111121]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0.5,
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "5rem"
                : "15rem",
          }}
          whileInView={{
            opacity: 1,
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "15rem"
                : "30rem",
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#474BB5] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#111121]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#111121] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#111121] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-20 w-[28rem] -translate-y-1/2 rounded-full bg-[#474BB5] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{
            opacity: 0.5,
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "4rem"
                : "8rem",
          }}
          whileInView={{
            opacity: 1,
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "10rem"
                : "16rem",
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#474BB5] blur-2xl"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#111121] "></div>
      </div>

      <div className="z-40 flex -translate-y-16 xl:-translate-y-40 flex-col items-center px-5">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <p className="bg-gradient-to-br from-slate-300 to-[#9AA2B8] bg-clip-text font-[600] text-center text-[28px] md:text-[48px] tracking-tight text-transparent">
            Track portfolio growth
            <br />
            in real-time
          </p>
          <div className="mt-16 grid gap-[40px] xl:grid-cols-2 items-center justify-center">
            <div className="bg-[#1B1B2F] bg-opacity-60 rounded-[32px] h-[330px] w-[355px] md:h-[275px] md:w-[755px] lg:h-[275px] lg:w-[1000px] xl:h-[275px] xl:w-[615px] border-[1px] border-[#4A4A61] hover:shadow-[0_0_10px_10px_rgba(27,27,47,0.6)] transition-shadow duration-500 ease-in overflow-hidden">
              <div className="text-[#F3F3F4] mt-[15px] mx-[15px] flex flex-col gap-4 md:flex-row md:justify-between">
                <p className=" font-[600] text-[20px]">Portfolio performance</p>
                <div className="flex gap-[6px]">
                  {intervals.map((interval) => (
                    <button
                      key={interval}
                      className={`w-[50px] h-[28px] rounded-[13px] text-[12px] font-[600] text-[#F3F3F4] ${
                        selectedInterval === interval
                          ? "bg-gradient-to-r from-[#5368D4] to-[#2A31CE]"
                          : "bg-[#1B1B2F]"
                      }`}
                      onClick={() => handleIntervalChange(interval)}
                    >
                      {interval}
                    </button>
                  ))}
                </div>
              </div>
              <AreaChart
                className="h-[400px] w-[320px] md:h-[400px] md:w-[725px] lg:h-[400px] lg:w-[970px] xl:h-[400px] xl:w-[585px] mx-[15px]"
                data={filteredData}
                index="timestamp"
                colors={["#09a9dc"]}
                categories={["Performance"]}
                showLegend={false}
                showXAxis={false}
                showYAxis={false}
                showGridLines={false}
                showAnimation={true}
                valueFormatter={(number: number) =>
                  `${((number - 1) * 100).toFixed(2)}%`
                }
              />
            </div>
            <div className="bg-[#1b1b2f] bg-opacity-60 rounded-[32px] h-[275px] w-[355px] md:h-[275px] md:w-[755px] lg:w-[1000px] xl:h-[275px] xl:w-[615px] border-[1px] border-[#4A4A61] hover:shadow-[0_0_10px_10px_rgba(27,27,47,0.6)] transition-shadow duration-500 ease-in">
              <div className="text-[#F3F3F4] my-[15px] ml-[15px] font-[600] text-[20px]">
                <p>Daily change of Balance</p>
              </div>
              <div>
                <Table className="border-t-[2px] border-[#28283E] overflow-hidden">
                  <TableHead className="bg-[#1B1B2F]">
                    <TableRow className="flex-row border-b-[1px]">
                      <TableHeaderCell></TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        MON
                      </TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        TUE
                      </TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        WED
                      </TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        THU
                      </TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        FRI
                      </TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        SAT
                      </TableHeaderCell>
                      <TableHeaderCell className="text-[#9898A7] p-0 text-center text-[12px] font-[500] leading-[16px] md:text-[16px] md:leading-[22px]">
                        SUN
                      </TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="h-[180px] w-[610px] border-transparent border-[1px]">
                    {splitReturns.map((week, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className={`p-0 pl-[3px] md:pl-[15px] ${
                            index === 0
                              ? "border-t-[2px] border-t-[#28283E]"
                              : "border-t-[1px] border-t-[#1B1B2F]"
                          } text-[#B7B7C0] text-[12px] md:text-[15px] font-[500] leading-[16px] md:leading-[22px]`}
                        >
                          {format(subWeeks(monday, 3 - index), "MMM dd")}
                        </TableCell>
                        {week.map((value, idx) =>
                          value !== "-" ? (
                            <TableCell
                              className={`p-0 relative text-center border-t-[1px] border-l-[1px] border-t-[#1B1B2F] ${
                                idx === 0
                                  ? "border-l-[2px] border-l-[#28283E]"
                                  : "border-l-[1px] border-l-[#1B1B2F]"
                              } ${
                                index === 0
                                  ? "border-t-[2px] border-t-[#28283E]"
                                  : "border-t-[1px] border-t-[#1B1B2F]"
                              } text-[12px] md:text-[15px] font-[500] leading-[16px] md:leading-[22px] bg-transparent hover:border-white hover:border-[1px] transition-transform duration-300 ease-in-out hover:scale-10`}
                              key={idx}
                              style={{
                                color:
                                  parseFloat(value || "0") > 0
                                    ? "#7DDE7B"
                                    : "#DD524C",
                              }}
                            >
                              <Tooltip
                                index={idx}
                                content={`(${
                                  datesArray[index * 7 + idx]
                                } - $${filteredData[
                                  filteredData.length - 28 + (index * 7 + idx)
                                ].price?.toFixed(
                                  2
                                )}) Equity curve: ${filteredData[
                                  filteredData.length - 28 + (index * 7 + idx)
                                ]["Performance"].toFixed(2)}`}
                              >
                                {parseFloat(value || "0").toFixed(2)}%
                              </Tooltip>
                            </TableCell>
                          ) : (
                            <TableCell
                              className={`p-0 text-center border-t-[1px] border-l-[1px] border-t-[#1B1B2F] ${
                                idx === 0
                                  ? "border-l-[2px] border-l-[#28283E]"
                                  : "border-l-[1px] border-l-[#1B1B2F]"
                              } ${
                                index === 0
                                  ? "border-t-[2px] border-t-[#28283E]"
                                  : "border-t-[1px] border-t-[#1B1B2F]"
                              } text-[12px] md:text-[15px] font-[500] leading-[16px] md:leading-[22px] bg-transparent`}
                              key={idx}
                            >
                              {value}
                            </TableCell>
                          )
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </motion.h1>
      </div>
    </div>
  );
}
