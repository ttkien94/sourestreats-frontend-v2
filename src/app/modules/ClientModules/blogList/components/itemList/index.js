import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import LPESecondaryBlog from "../secondaryBlog";
import LPEPrimaryBlog from "../primaryBlog";
import LoadingSkeletionBlog from "../skeletonBlog";

function ItemList({ loading, data }) {
  return (
    <>
      <h1 className="blog-topic">
        {loading ? <Skeleton width={200} height={70} /> : "Trạm đọc & cảm"}
      </h1>

      <div className="row blog-list">
        {loading ? (
          <LoadingSkeletionBlog />
        ) : (
          <>
            {data.map((blog, index) => {
              return (
                <Fragment key={index}>
                  {index > 1 ? (
                    <LPESecondaryBlog data={blog} />
                  ) : (
                    <LPEPrimaryBlog data={blog} />
                  )}
                </Fragment>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default ItemList;
