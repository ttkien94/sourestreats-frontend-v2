import React, { useRef, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import LPEModal from "app/components/modal";

import RoadMap from "./assets/img/map.jpg";
import RoadMapMobile from "./assets/img/map_mobile.jpg";

import Dolphin from "./assets/img/dolphin.png";
import Whale from "./assets/img/whale.png";

import {
  big_island,
  small_island,
  big_island_mobile,
  small_island_mobile,
} from "./const";

import "./styles/styles.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LifeMap() {
  useSiteTitle("life_map");
  const { t } = useTranslation("common");
  const refModal = useRef(null);
  const [content, setContent] = useState([]);

  const handleOpenModal = (content) => {
    refModal.current.handleOpen();
    setContent(content);
  };

  return (
    <>
      <div className="lpe-lifemap">
        <div className="lpe-lifemap_wrapper">
          <img className="img-fluid " src={RoadMap} alt={RoadMap} />

          {big_island?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_big-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: island.position.y,
                }}
              >
                <div className="lpe-lifemap_big-island_outside">
                  <div className={island.className}>
                    <img src={island.island} alt={island.island} />
                    <div className="lpe-lifemap_big-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "20%",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        className="big_sign"
                      />

                      <div className={`big_popup ${island.contentPosition}`}>
                        {island.detail.map((text) => {
                          return (
                            <>
                              {text.type === "heading" && (
                                <h4>{t(text.text)}</h4>
                              )}
                              {text.type === "description" && (
                                <h6>{text.text}</h6>
                              )}
                              {text.type === "text" && <p>{text.text}</p>}
                            </>
                          );
                        })}
                        {island.link && <Link to={island.link}>Xem thêm</Link>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {small_island?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_small-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: island.position.y,
                }}
              >
                <div className="lpe-lifemap_small-island_outside">
                  <div className={island.className}>
                    <img
                      src={island.island}
                      alt={island.island}
                      className="img-fluid"
                    />

                    <div className="lpe-lifemap_small-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "43%",
                          position: "absolute",
                          top: "50%",
                          left: "60%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        className="img-fluid small_sign"
                      />

                      <div className={`small_popup ${island.contentPosition}`}>
                        {island.detail.map((text) => {
                          return (
                            <>
                              {text.type === "heading" && <h4>{text.text}</h4>}
                              {text.type === "description" && (
                                <h6>{text.text}</h6>
                              )}
                              {text.type === "text" && <p>{text.text}</p>}
                            </>
                          );
                        })}

                        {island.link && <Link to={island.link}>Xem thêm</Link>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <img src={Dolphin} alt={Dolphin} className="lpe-dolphin" />
          <img src={Whale} alt={Whale} className="lpe-whale" />
        </div>
      </div>

      <div className="lpe-lifemap-mobile">
        <div className="lpe-lifemap_wrapper">
          <img className="img-fluid " src={RoadMapMobile} alt={RoadMapMobile} />

          {big_island_mobile?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_big-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  className="lpe-lifemap_big-island_outside"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className={island.className}>
                    <img src={island.island} alt={island.island} />

                    <div className="lpe-lifemap_big-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "20%",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        onClick={() => {
                          handleOpenModal(island.detail);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {small_island_mobile?.map((island, index) => {
            return (
              <div
                className="lpe-lifemap_small-island"
                key={index}
                style={{
                  top: island.position.x,
                  left: island.position.y,
                }}
              >
                <div className="lpe-lifemap_small-island_outside">
                  <div className={island.className}>
                    <img src={island.island} alt={island.island} />

                    <div className="lpe-lifemap_small-island_inside">
                      <img
                        src={island.sign}
                        alt={island.sign}
                        style={{
                          width: "43%",
                          position: "absolute",
                          top: "50%",
                          left: "60%",
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          animation: "movingSign 1s linear infinite",
                        }}
                        onClick={() => {
                          handleOpenModal(island.detail);
                        }}
                      />

                      <div className={`small_popup ${island.contentPosition}`}>
                        <p>Pop up for content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LPEModal ref={refModal} width="90%">
        <div className="mobile-popup-modal">
          {content?.map((text) => {
            return (
              <>
                {text.type === "heading" && <h4>{t(text.text)}</h4>}
                {text.type === "description" && <h6>{text.text}</h6>}
                {text.type === "text" && <p>{text.text}</p>}

                {text.type === "link" && <Link to={text.link}>Xem thêm</Link>}
              </>
            );
          })}
        </div>
      </LPEModal>
    </>
  );
}

export default LifeMap;
