import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";

const WatchPage=()=>{
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex w-full">
      <div className="">
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <CommentsContainer />
  </div>
  )
  

};

export default WatchPage;