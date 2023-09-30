import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "app/const/Instance";
import LPELoading from "app/components/loading";
// import { API_ENDPOINT } from "app/const/Api";
import { BLOG } from "app/const/Api";
import { convertBlocksToHtml } from "core/utils/editorUtil";
import { convertFullDate } from "core/utils/dateUtil";
import { Avatar } from "@mui/material";

import "./styles/index.scss";

function BlogDetail() {
  let { url } = useParams();
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogInfo, setBlogInfo] = useState([]);

  const getBlogDetail = () => {
    setIsLoading(true);

    axiosClient
      .get(BLOG + url)
      .then((response) => {
        console.log("url", url);
        setIsLoading(false);
        const jsonConvert = JSON.parse(response.data.content);
        const newBlocks = convertBlocksToHtml(jsonConvert);
        setBlocks(newBlocks);
        setBlogInfo(response.data);
      })
      .catch((error) => {
        setIsLoading(false);

        console.log(error);
      });
  };

  useEffect(() => {
    getBlogDetail();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set title for website
  useEffect(() => {
    const prevTitle = document.title;
    document.title = blogInfo?.title;

    return () => {
      document.title = prevTitle;
    };
  });

  return (
    <>
      {isLoading ? (
        <LPELoading />
      ) : (
        <>
          {blogInfo ? (
            <div className="lpe-blog-detail">
              <div className="author-container">
                <div className="category">
                  {blogInfo.topicId && (
                    <Link to={`${blogInfo.topicId._id}`}>
                      {blogInfo.topicId.name}
                    </Link>
                  )}
                </div>

                {/* Title */}
                <h1 className="blog-title">{blogInfo.title}</h1>

                <div className="author-info-block">
                  {blogInfo.author?.avatar ? (
                    <img
                      src={blogInfo.author.avatar}
                      alt={blogInfo.author.avatar}
                      className="img-fluid mr-2"
                    />
                  ) : (
                    <div className="mr-2">
                      <Avatar />
                    </div>
                  )}

                  <div className="author-info-block_name">
                    <p className="name">
                      {blogInfo.author && (
                        <strong>{blogInfo.author.name}</strong>
                      )}
                    </p>

                    <p className="created-at">
                      Cập nhật lần cuối vào &nbsp;
                      {convertFullDate(blogInfo.updatedAt, "DD-MM-yyyy")}
                    </p>
                  </div>
                </div>
              </div>

              {blocks && (
                <div
                  className="content-container"
                  dangerouslySetInnerHTML={{ __html: blocks }}
                ></div>
              )}
            </div>
          ) : (
            <p>Empty</p>
          )}
        </>
      )}
    </>
  );
}

export default memo(BlogDetail);
