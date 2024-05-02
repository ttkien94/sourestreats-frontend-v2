import React from "react";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollTopButton from "app/components/scrollToTop";
// import ContactForm from "share/contactForm";
// import { LEFT_MENU, RIGHT_MENU } from "app/const/Footer";

import "./styles/styles.scss";

function LPEFooter() {
  const { t } = useTranslation("common");

  return (
    <div>
      <footer className="wrapperFooter ">
        <section className="wrapperInfo">
          <div className="container mb-3">
            <div className="row mt-3">
              <div className="col-12 col-md-6 col-lg-4">
                <h4 className="heading">{t("lifeuni_company")}</h4>
                <p>
                  <i className="fas fa-location-arrow mr-2"></i>
                  {t("lifeuni_company_address")}
                </p>
                <p>
                  <i className="fas fa-clock mr-2"></i>
                  {t("lifeuni_company_timeworking")}
                </p>
                <p>
                  <i className="fas fa-phone-alt mr-2"></i>0906 880 917 - 0901
                  883 917
                </p>

                <p>
                  <i className="fa fa-envelope mr-2"></i>
                  studentcare@soulreteats.info
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h4 className="heading">{t("connect_us")}</h4>
                <a
                  href="https://www.facebook.com/lifeunivietnam"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f mr-3"></i>
                </a>

                <a
                  href="https://www.youtube.com/@LifeUniVN-lt1ik"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube mr-3"></i>
                </a>

                <a
                  href="https://zalo.me/0906880917"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube mr-3"></i>
                </a>

                <h4 className="heading2 mt-3">{t("customer_support")}</h4>
                <p>
                  Đối với các thắc mắc về Dịch vụ Khách hàng. Chúng tôi cố gắng
                  trả lời tất cả các câu hỏi trong vòng 2 ngày làm việc.
                </p>
              </div>
              {/**
          <div className="col-12 col-md-6 col-lg-5 mt-3 mt-lg-0">
              <div className="row">
                <div className="col-12">
                  <ul
                    className="wrapperMenu"
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {LEFT_MENU.map((item, index) => {
                      return (
                        <li className="itemMenu" key={index}>
                          <Link to={item.path}>{t(item.name)}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-6">
                  <ul
                    className="wrapperMenu"
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {RIGHT_MENU.map((item, index) => {
                      return (
                        <li className="itemMenu" key={index}>
                          <Link to={item.path}>{t(item.name)}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
              <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0">
              <ContactForm />
            </div>
      */}
            </div>
          </div>
        </section>
      </footer>

      <ScrollTopButton />
    </div>
  );
}

export default LPEFooter;
