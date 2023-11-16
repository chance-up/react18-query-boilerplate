import { Suspense } from "react";
import { PostComponent } from "../components/PostComponent";

export const OneQueryWithSuspense = () => {
  return (
    <>
      <div>
        <h2>검색 결과</h2>
        <span>총 {123}건</span>
      </div>
      <Suspense fallback={"loading!!"}>
        <PostComponent></PostComponent>
      </Suspense>
    </>
  );
};
