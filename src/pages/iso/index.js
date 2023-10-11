import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Iso = () => {
  return (
    <div className="text-brand-50">
      <Breadcrumb name={"ISO"} router={"/iso"} />
      <div className="mt-4 max-w-[1400px] mx-auto bg-white">
        <Title name={"ISO/IEC 27001:2013 Олон улсын стандарт"} />
        <div className="px-14">
          "Гааль, Татвар, Санхүүгийн мэдээллийн технологийн төв" Улсын
          үйлдвэрийн газар нь Мэдээллийн Аюулгүй Байдлын Удирдлагын Тогтолцоог
          амжилттай нэвтрүүлж, ISO/IEC 27001:2013 Олон улсын стандартын
          батламжийг мэдээллийн технологийн чиглэлийн төрийн байгууллагууд
          дотроос анх удаа хүлээн авлаа.
        </div>
        <div className="border-t mt-8 p-8 px-14 flex gap-14">
          <div className="w-2/5">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <Image
                  priority={true}
                  className="object-none"
                  width={2000}
                  height={2000}
                  src={"/images/sertificate/sertificate1.png"}
                  //   src={"/images/news/news3.jpg"}
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  priority={true}
                  width={2000}
                  height={2000}
                  src={"/images/news/news3.jpg"}
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  priority={true}
                  width={2000}
                  height={2000}
                  src={"/images/news/news3.jpg"}
                  alt="slide_image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  priority={true}
                  width={2000}
                  height={2000}
                  src={"/images/news/news3.jpg"}
                  alt="slide_image"
                />
              </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="text-justify w-3/5">
            "Гааль, Татвар, Санхүүгийн мэдээллийн технологийн төв " Улсын
            үйлдвэрийн газар нь Цахим төлбөрийн баримтын систем /ebarimt.mn/,
            Цахим татварын систем /etax.mta.mn/, зэрэг төрийн байгууллагуудын 30
            гаруй системүүдийг хариуцан шаардлагатай нэмэлт хөгжүүлэлт,
            нэвтрүүлэлт, хэвийн найдвартай ажиллагагааг хангах чиг үүргийг
            хэрэгжүүлдэг бөгөөд үйл ажиллагаандаа мэдээллийн дэвшилтэт
            технологийг нэвтрүүлэн ашиглаж байна. Үүнтэй холбоотойгоор
            үйлдвэрийн газарт хэрэгжүүлж буй бүхий л үйл ажиллагаа болон
            мэдээллийн хөрөнгүүдийг хамруулан Мэдээллийн Аюулгүй Байдлын
            Удирдлагын Тогтолцоог амжилттай нэвтрүүлж, ISO/IEC 27001:2013 Олон
            улсын стандартын батламжийг төрийн байгууллагууд дотроос анх удаа
            хүлээн авлаа. ISO/IEC 27001:2013 бол мэдээллийн аюулгүй байдлыг
            хэрхэн удирдах олон улсын стандарт юм. Стандартыг анх Олон улсын
            стандартчиллын байгууллага /ISO/ ба Олон улсын цахилгаан техникийн
            комисс /IEC/ хамтран 2005 онд гарган 2013 онд шинэчлэн найруулж
            хэвлүүлсэн байна. Мэдээллийн аюулгүй байдлын удирдлагын тогтолцоог
            бий болгох, хэрэгжүүлэх, хадгалах, тасралтгүй сайжруулахад тавигдах
            шаардлагыг нарийвчлан тодорхойлж байгууллагын эзэмшиж буй мэдээллийн
            хөрөнгийн нууцлал, бүрэн бүтэн байдал, хүртээмжтэй байдлыг илүү
            найдвартай болгоход үндсэн зорилго нь байдаг. Стандартын шаардлагыг
            хангасан байгууллагууд олон улсын эрх бүхий байгууллагын аудитыг
            амжилттай хийж дууссаны дараа итгэмжлэгдсэн гэрчилгээг
            баталгаажуулан олгодог. Энэхүү стандартын шаардлагыг хангасан
            эсэхийг Олон улсад магадлан итгэмжлэгдсэн “LMS Certification Pvt
            Ltd.” байгууллагаас “Гааль, Татвар, Санхүүгийн мэдээллийн
            технологийн төв” Улсын үйлдвэрийн газрын үйл ажиллагаанд хөндлөнгийн
            аудит хийж, тус стандартын шаардлагуудыг бүрэн хангасан байгууллага
            хэмээн дүгнэснээр ISO/IEC27001:2013 Олон улсын стандартыг
            нэвтрүүлсэн байгууллага хэмээн гэрчилгээ олголоо.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Iso;
