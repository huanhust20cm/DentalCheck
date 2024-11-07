import Link from "next/link";
import React from "react";

export default function service() {
  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <figure className="image">
                    <img src="assets/images/resource/about-2.png" alt="" />
                  </figure>
                  <figure className="image mt_10">
                    <img src="assets/images/resource/nucuoi.png" alt="" />
                  </figure>
                  <figure className="image mobile-none">
                    <img src="assets/images/resource/about-4.png" alt="" />
                  </figure>
                </div>
                <div className="image_block_one mobile-block">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        className="img-service"
                        src="assets/images/resource/service-10.png"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="text-box mb_40">
                  <ul className="list-style-one clearfix">
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Độ trong mờ: 47.6%
                      </div>
                    </li>
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Độ bền uốn: 1300 MPa
                      </div>
                    </li>
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Ứng dụng: Phục hình nguyên khối, mão và cầu răng (lên
                        tới 18 đơn vị), implant...
                      </div>
                    </li>
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Thành phục hình tối thiểu: 0.4 mm
                      </div>
                    </li>
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="900ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Độ dày: 12 và 14mm
                      </div>
                    </li>
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="1200ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Đường kính: 98 mm
                      </div>
                    </li>
                    <li className="text-uppercase">
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="1500ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="mr-15"
                          src="assets/images/resource/service-1.png"
                          alt=""
                        />
                        Màu: Trắng lấp lánh (thành phần chứa tinh thể Vàng)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mobile-none image-column">
            <div className="image_block_one">
              <div className="image-box">
                <figure className="image">
                  <img
                    className="img-service"
                    src="assets/images/resource/service-10.png"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="orisdent">
            <figure>
              <img src="assets/images/resource/orisdent1.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
