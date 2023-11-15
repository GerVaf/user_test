import { Carousel } from "@mantine/carousel";
import React from "react";
import RecentCard from "./RecentCard";
const RecentCarousel = ({ recentNews }) => {
  return (
    <Carousel
      height={600}
      slideSize="33.333333%"
      slideGap="md"
      align="start"
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
      styles={{
        control: {
          width: "40px",
          height: "40px",
          right: 0,
          opacity: 1,
          backgroundColor: "#fff !important",
          border:'1px solid #333'
        },
      }}
    >
      {recentNews?.map((blog, i) => {
        return (
          <Carousel.Slide key={i}>
            <RecentCard blog={blog} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default RecentCarousel;
