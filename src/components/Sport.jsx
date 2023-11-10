import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detail } from "../Global/Slice/blogSlice";
import { Center, Pagination } from "@mantine/core";
import { get } from "../Global/api";
const Sport = () => {
  // const sportData = useSelector((state) => state?.blog?.sport);
  const [loading, setLoading] = useState(true);
  const [sportData, setSportData] = useState([]);
  const [page, setPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const regex = /(<([^>]+)>)/gi;

  useEffect(() => {
    try {
      get(`/published_blogs?limit=11&page=${page}&category=sport`).then(
        (response) => {
          const sortDateData = response?.data?.data?.sort((a, b) =>
            a.date > b.date ? 1 : -1
          );
          setSportData(sortDateData);
          console.log(sortDateData);
          setTotalPages(response?.data?.pagination?.totalPages);
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  return (
    <div className="flex flex-col-reverse gap-5 w-full flex-wrap text-white justify-center items-center p-5 max-w-[1300px] mx-auto my-20 md:flex-nowrap">
      {/* Pagination */}
      <Center my={"lg"}>
        <Pagination
          total={totalPages}
          onChange={setPage}
          value={page}
          styles={{
            control: {
              color: "white",
              borderColor: "transparent",

              "&[data-active]": {
                borderColor: "white",
                backgroundColor: "#3D3F3D",
              },
              "&[data-active]&:not([data-disabled]):hover": {
                backgroundColor: "#3D3F3D70",
              },
              "&:not([data-disabled]):hover": {
                backgroundColor: "gray",
              },
            },
            dots: {
              color: "white",
            },
          }}
        />
      </Center>
      {sportData?.map((el) => {
        return (
          <div
            key={el.id}
            onClick={() => {
              nav("/detail");
              dispatch(detail(el));
            }}
            className="grid grid-cols-12 text-white hover:bg-white/20 rounded-md duration-200 transition-all border border-slate-50/20"
          >
            {/* left side  */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <img
                className="aspect-square rounded-md"
                src={el?.images?.url}
                alt=""
              />
            </div>
            {/* right side  */}
            <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-5 p-5">
              {/* title and author  */}
              <div className="gap-3 flex flex-col">
                <h1 className="md:text-sm lg:text-2xl text-lg font-bold">
                  {el?.title}
                </h1>
                <p className="md:text-sm lg:text-base text-sm italic">
                  {el?.author}
                </p>
              </div>
              {/* content  */}
              <div className="flex flex-col justify-between h-full">
                <div className=" text-sm lg:text-base">
                  {el?.description
                    .replace(regex, "")
                    .replace(
                      /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
                      " "
                    )
                    .substring(0, 300)}
                  ...
                </div>
                <span className="text-end underline text-sm lg:font-bold cursor-pointer">
                  Read More . . .
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sport;
