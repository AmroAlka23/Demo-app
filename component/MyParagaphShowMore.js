import { MyButton } from "./MyButton";
import { useState } from "react";


const SIZE_MSG_SHOW = 20;
export function MyParagraphMsgShowMore({ message }) {
  const [currentCount, setCurrentCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const len = message.length;
  const numPartMSG = len / SIZE_MSG_SHOW;
  const [tmp, setTemp] = useState("0");

  /* if (numPartMSG > currentCount) {
     setHasMore(true);
     let start = currentCount;
     let end =  SIZE_MSG_SHOW;
     setTemp (message.slice(start, end));
     setCurrentCount(currentCount + 1);
   } else {
     setHasMore(false);
     setTemp (message);
   }*/
  function showMore() {
    if (numPartMSG > currentCount) {
      setHasMore(true);
      let start = currentCount /* * SIZE_MSG_SHOW*/;
      let end = (currentCount + 1) * SIZE_MSG_SHOW;

      setTemp(message.slice(start, end));
      setCurrentCount(currentCount + 1);
    } else {
      setHasMore(false);
      setTemp(message);
    }
  }

  return (
    <p className="card">
      {tmp}
      {hasMore && <MyButton _onClick={showMore}> More</MyButton>}
    </p>
  );
}
