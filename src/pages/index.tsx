import { FC, useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Slider from "react-slick";
import HeaderSection from "../components/HeaderSection";
import CardSection from "../components/CardSection";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: FC<HomeProps> = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const bottomPosition = document.documentElement.offsetHeight - 100; // Add some tolerance (100px) before the bottom

    // Show the element when user reaches the bottom
    if (scrollPosition >= bottomPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsReview = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    nextArrow: currentSlide >= 3 ? undefined : <NextArrow />,
    prevArrow:
      currentSlide <= 0 ? undefined : <PrevArrow currentSlide={currentSlide} />,
  };
  return (
    <div className="w-[100vw] flex justify-center flex-col overflow-hidden relative">
      <NavBar></NavBar>
      <section>
        <Slider className="banner" {...settings}>
          <div className="h-full max-h-[900px] bg-gray-300 overflow-hidden">
            <div className="flex relative w-full h-full overflow-hidden">
              <div className="absolute text-white text-[30px] flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mt-11">
                <span className="font-lato font-bold text-center text-[50px]">
                  #SelaluAdaUntukPetani
                </span>
                <span className="font-lato text-[36px] text-center mt-6 leading-[49px] w-[80%] tracking-[0.8px]">
                  Eratani adalah perusahaan startup Agri-tech yang fokus <br />{" "}
                  membangun sebuah ekosistem pertanian yang kuat dengan <br />
                  mendigitalisasi proses pertanian dari hulu hingga ke hilir.
                  Eratani berupaya memberikan kemudahan akses kepada petani
                  melalui <br /> teknologi yang kami miliki untuk meningkatkan
                  produktivitas dan kesejahteraan ekosistem pertanian.
                </span>
              </div>
              <img
                className="w-full object-cover"
                src="/images/Photo.png"
                alt="image-slider1"
              />
            </div>
          </div>
          <div className="h-full max-h-[900px] bg-gray-300 overflow-hidden">
            <div className="flex relative w-full h-full overflow-hidden">
              <div className="absolute text-white text-[30px] flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mt-11">
                <span className="font-lato font-bold text-center text-[50px]">
                  #SelaluAdaUntukPetani
                </span>
                <span className="font-lato text-[36px] text-center mt-6 leading-[49px] w-[80%] tracking-[0.8px]">
                  Eratani adalah perusahaan startup Agri-tech yang fokus <br />{" "}
                  membangun sebuah ekosistem pertanian yang kuat dengan <br />
                  mendigitalisasi proses pertanian dari hulu hingga ke hilir.
                  Eratani berupaya memberikan kemudahan akses kepada petani
                  melalui <br /> teknologi yang kami miliki untuk meningkatkan
                  produktivitas dan kesejahteraan ekosistem pertanian.
                </span>
              </div>
              <img
                className="w-full object-cover"
                src="/images/Photo.png"
                alt="image-slider1"
              />
            </div>
          </div>
          <div className="h-full max-h-[900px] bg-gray-300 overflow-hidden">
            <div className="flex relative w-full h-full overflow-hidden">
              <div className="absolute text-white text-[30px] flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mt-11">
                <span className="font-lato font-bold text-center text-[50px]">
                  #SelaluAdaUntukPetani
                </span>
                <span className="font-lato text-[36px] text-center mt-6 leading-[49px] w-[80%] tracking-[0.8px]">
                  Eratani adalah perusahaan startup Agri-tech yang fokus <br />{" "}
                  membangun sebuah ekosistem pertanian yang kuat dengan <br />
                  mendigitalisasi proses pertanian dari hulu hingga ke hilir.
                  Eratani berupaya memberikan kemudahan akses kepada petani
                  melalui <br /> teknologi yang kami miliki untuk meningkatkan
                  produktivitas dan kesejahteraan ekosistem pertanian.
                </span>
              </div>
              <img
                className="w-full object-cover"
                src="/images/Photo.png"
                alt="image-slider1"
              />
            </div>
          </div>
        </Slider>
      </section>
      <section className="flex w-full mt-10 flex-col mb-10">
        {/* <div className="text-xl text-center font-lato text-secondary w-full justify-center">
          <span className="font-bold text-[40px] leading-[3rem] text-center"></span>
        </div> */}
        <HeaderSection
          text={
            <span>
              Menuju Ekosistem yang <br />
              Lebih Kuat Bersama Eratani
            </span>
          }
        ></HeaderSection>
        <div className="w-full flex flex-col justify-center items-center mt-12">
          <div className="flex w-3/4">
            <div className="flex justify-center w-full gap-20">
              <div className="flex flex-col justify-center items-center w-[260px]">
                <div className="w-[125px] h-[125px]">
                  <img src="/logo/people.png" className="object-cover" alt="" />
                </div>
                <div className="font-lato font-[800] text-[35px] text-secondary mt-14 tracking-[1px]">
                  500+
                </div>
                <div className="font-lato text-primary text-[25px]">
                  Petani Binaan
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-[260px]">
                <div className="w-[125px] h-[125px]">
                  <img src="/logo/invest.png" className="object-cover" alt="" />
                </div>
                <div className="font-lato font-[800] text-[35px] text-secondary mt-14 tracking-[1px]">
                  {`>`} Rp 5 Miliar
                </div>
                <div className="font-lato text-primary text-[25px]">
                  Pendanaan Tersalurkan
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-3/4 mt-12">
            <div className="flex justify-center w-full gap-10">
              <div className="flex flex-col justify-center items-center w-[300px]">
                <div className="w-[125px] h-[125px]">
                  <img src="/logo/chart.png" className="object-cover" alt="" />
                </div>
                <div className="font-lato font-[800] text-[35px] text-secondary mt-14 tracking-[1px]">
                  {`>`} 15%
                </div>
                <div className="font-lato text-primary text-[25px]">
                  Peningkatan Pendapatan
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-[300px]">
                <div className="w-30 h-28">
                  <img src="/logo/plant.png" className="object-cover" alt="" />
                </div>
                <div className="font-lato font-[800] text-[35px] text-secondary mt-14 tracking-[1px]">
                  750 Ha +
                </div>
                <div className="font-lato text-primary text-[25px]">
                  Luas Wilayah Binaan
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-[300px]">
                <div className="w-[125px] h-[125px]">
                  <img src="/logo/gear.png" className="object-cover" alt="" />
                </div>
                <div className="font-lato font-[800] text-[35px] text-secondary mt-14 tracking-[1px]">
                  {`>`} 20%
                </div>
                <div className="font-lato text-primary text-[25px]">
                  Peningkatan Produktivitas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-10 container mx-auto mb-10">
        <HeaderSection text="Peduli Petani Bersama Eratani" />
        <div className="flex mt-14 flex-col w-full">
          <CardSection
            iconName="fund"
            title="Pembiayaan"
            text="Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi
          bagi para petani yang mengalami kesulitan permodalan untuk
          meningkatkan produktivitas pertanian."
          ></CardSection>
          <CardSection
            iconName="cycle-move"
            title="Manajemen Rantai Pasok"
            text="Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi."
          ></CardSection>
          <CardSection
            iconName="data-share"
            title="Distribusi & Penjualan"
            text="Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi
          bagi para petani yang mengalami kesulitan permodalan untuk
          meningkatkan produktivitas pertanian."
          ></CardSection>
        </div>
      </section>
      <section className="flex flex-col mt-10 container mx-auto mb-40">
        <HeaderSection text="Kata Mereka" />
        <div className="container mt-20">
          <Slider className="review" {...settingsReview}>
            <div className="!flex justify-center items-center">
              <div className="flex flex-row bg-[#F3F3F3] h-[391px]">
                <div className="w-auto">
                  <div className="w-[428px]">
                    <img src="/logo/people_1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start p-20">
                  <div className="flex justify-center items-center">
                    <span className="font-lato text-[35px]">Wasroni |</span>{" "}
                    <span className="font-lato font-extralight text-[25px] ml-3">
                      Petani
                    </span>
                  </div>
                  <div className="mt-1 font-lato text-[23px] w-[463px] leading-[30px] tracking-[1px]">
                    Harapan saya Eratani semakin meluas karena petani sangat
                    amat dibantu dengan adanya Eratani. Terima kasih Eratani!
                  </div>

                  <div className="w-full mt-8">
                    <div className="bg-primary float-end flex py-2 px-6 rounded-md justify-center items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M7.42773 6.81976V17.1798C7.42773 17.9698 8.29773 18.4498 8.96773 18.0198L17.1077 12.8398C17.7277 12.4498 17.7277 11.5498 17.1077 11.1498L8.96773 5.97976C8.29773 5.54976 7.42773 6.02976 7.42773 6.81976Z"
                          fill="black"
                        />
                      </svg>

                      <span className="font-lato text-[25px] tracking-[1px]">
                        Putar Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!flex justify-center items-center">
              <div className="flex flex-row bg-[#F3F3F3] h-[391px]">
                <div className="w-auto">
                  <div className="w-[428px]">
                    <img src="/logo/people_1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start p-20">
                  <div className="flex justify-center items-center">
                    <span className="font-lato text-[35px]">Wasroni |</span>{" "}
                    <span className="font-lato font-extralight text-[25px] ml-3">
                      Petani
                    </span>
                  </div>
                  <div className="mt-1 font-lato text-[23px] w-[463px] leading-[30px] tracking-[1px]">
                    Harapan saya Eratani semakin meluas karena petani sangat
                    amat dibantu dengan adanya Eratani. Terima kasih Eratani!
                  </div>

                  <div className="w-full mt-8">
                    <div className="bg-primary float-end flex py-2 px-6 rounded-md justify-center items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M7.42773 6.81976V17.1798C7.42773 17.9698 8.29773 18.4498 8.96773 18.0198L17.1077 12.8398C17.7277 12.4498 17.7277 11.5498 17.1077 11.1498L8.96773 5.97976C8.29773 5.54976 7.42773 6.02976 7.42773 6.81976Z"
                          fill="black"
                        />
                      </svg>

                      <span className="font-lato text-[25px] tracking-[1px]">
                        Putar Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!flex justify-center items-center">
              <div className="flex flex-row bg-[#F3F3F3] h-[391px]">
                <div className="w-auto">
                  <div className="w-[428px]">
                    <img src="/logo/people_1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start p-20">
                  <div className="flex justify-center items-center">
                    <span className="font-lato text-[35px]">Wasroni |</span>{" "}
                    <span className="font-lato font-extralight text-[25px] ml-3">
                      Petani
                    </span>
                  </div>
                  <div className="mt-1 font-lato text-[23px] w-[463px] leading-[30px] tracking-[1px]">
                    Harapan saya Eratani semakin meluas karena petani sangat
                    amat dibantu dengan adanya Eratani. Terima kasih Eratani!
                  </div>

                  <div className="w-full mt-8">
                    <div className="bg-primary float-end flex py-2 px-6 rounded-md justify-center items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M7.42773 6.81976V17.1798C7.42773 17.9698 8.29773 18.4498 8.96773 18.0198L17.1077 12.8398C17.7277 12.4498 17.7277 11.5498 17.1077 11.1498L8.96773 5.97976C8.29773 5.54976 7.42773 6.02976 7.42773 6.81976Z"
                          fill="black"
                        />
                      </svg>

                      <span className="font-lato text-[25px] tracking-[1px]">
                        Putar Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!flex justify-center items-center">
              <div className="flex flex-row bg-[#F3F3F3] h-[391px]">
                <div className="w-auto">
                  <div className="w-[428px]">
                    <img src="/logo/people_1.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start p-20">
                  <div className="flex justify-center items-center">
                    <span className="font-lato text-[35px]">Wasroni |</span>{" "}
                    <span className="font-lato font-extralight text-[25px] ml-3">
                      Petani
                    </span>
                  </div>
                  <div className="mt-1 font-lato text-[23px] w-[463px] leading-[30px] tracking-[1px]">
                    Harapan saya Eratani semakin meluas karena petani sangat
                    amat dibantu dengan adanya Eratani. Terima kasih Eratani!
                  </div>

                  <div className="w-full mt-8">
                    <div className="bg-primary float-end flex py-2 px-6 rounded-md justify-center items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M7.42773 6.81976V17.1798C7.42773 17.9698 8.29773 18.4498 8.96773 18.0198L17.1077 12.8398C17.7277 12.4498 17.7277 11.5498 17.1077 11.1498L8.96773 5.97976C8.29773 5.54976 7.42773 6.02976 7.42773 6.81976Z"
                          fill="black"
                        />
                      </svg>

                      <span className="font-lato text-[25px] tracking-[1px]">
                        Putar Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="flex flex-col mt-10 container mx-auto mb-12">
        <HeaderSection text="Mitra Kami" />
        <div className="flex flex-row mt-12 gap-x-5 justify-center items-center">
          <div className="flex">
            <img src="/logo/BULOG.png" className="object-cover" alt="" />
          </div>
          <div className="flex max-h-[254px]">
            <img src="/logo/PI Pangan.png" className="object-cover" alt="" />
          </div>
          <div className="flex">
            <img src="/logo/MDBT.png" className="object-cover" alt="" />
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-20 container mx-auto mb-12 justify-center items-center">
        <HeaderSection text="Ingin Menjadi Bagian dari Kami? " />
        <div className="font-lato text-[35px] mt-10 text-center max-w-[822px] leading-[60px] tracking-[1px]">
          Bersama kami membangun pertanian Indonesia karena Eratani
          <span className="font-bold bg-primary ml-1">
            #SelaluAdaUntukPetani
          </span>
        </div>
        <div className="mt-16">
          <div className="flex p-4 px-6 bg-secondary justify-center items-center gap-4 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4988 14.382C17.1994 14.233 15.7313 13.515 15.458 13.415C15.1847 13.316 14.9858 13.267 14.7858 13.565C14.5869 13.861 14.0151 14.531 13.8413 14.729C13.6665 14.928 13.4926 14.952 13.1942 14.804C12.8958 14.654 11.9332 14.341 10.7927 13.329C9.90544 12.541 9.30557 11.568 9.13173 11.27C8.9579 10.973 9.11264 10.812 9.26236 10.664C9.39701 10.531 9.56079 10.317 9.71051 10.144C9.86022 9.97002 9.90946 9.84602 10.0089 9.64703C10.1094 9.44903 10.0592 9.27603 9.98382 9.12703C9.90946 8.97803 9.3126 7.51503 9.06341 6.92003C8.82125 6.34103 8.57507 6.42003 8.39219 6.41003C8.21736 6.40203 8.0184 6.40003 7.81945 6.40003C7.6205 6.40003 7.29695 6.47403 7.02364 6.77203C6.74932 7.06903 5.97863 7.78803 5.97863 9.25103C5.97863 10.713 7.04775 12.126 7.19747 12.325C7.34719 12.523 9.30255 15.525 12.2979 16.812C13.0113 17.118 13.567 17.301 14.0001 17.437C14.7155 17.664 15.3666 17.632 15.8811 17.555C16.4538 17.47 17.6475 16.836 17.8967 16.142C18.1449 15.448 18.1449 14.853 18.0705 14.729C17.9962 14.605 17.7972 14.531 17.4978 14.382H17.4988ZM12.0507 21.785H12.0467C10.2676 21.7853 8.52118 21.3094 6.99048 20.407L6.62875 20.193L2.86874 21.175L3.87255 17.527L3.63642 17.153C2.64179 15.5774 2.11543 13.7538 2.11814 11.893C2.12015 6.44303 6.57549 2.00904 12.0547 2.00904C14.7074 2.00904 17.2014 3.03904 19.0764 4.90703C20.0012 5.82361 20.7342 6.9136 21.233 8.11392C21.7318 9.31425 21.9864 10.6011 21.9823 11.9C21.9803 17.35 17.5249 21.785 12.0507 21.785ZM20.5032 3.48804C19.3961 2.37896 18.0788 1.49958 16.6277 0.90084C15.1766 0.302104 13.6206 -0.00407624 12.0497 4.09775e-05C5.46417 4.09775e-05 0.102491 5.33503 0.100481 11.892C0.0994764 13.988 0.649109 16.034 1.69512 17.837L0 24L6.33434 22.346C8.0866 23.2961 10.0502 23.794 12.0457 23.794H12.0507C18.6363 23.794 23.9979 18.459 23.9999 11.901C24.0048 10.3383 23.6983 8.79013 23.0981 7.34606C22.4978 5.902 21.6159 4.5907 20.5032 3.48804Z"
                fill="#F3F3F3"
              />
            </svg>

            <span className="font-lato text-[25px] text-white tracking-[1px]">
              Hubungi Kami
            </span>
          </div>
        </div>
      </section>
      <section className="flex gap-8 flex-row mt-20 container mx-auto mb-12 justify-center items-center w-full h-[586px]">
        <div className="w-3/5 relative h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.654235056198!2d106.82768611476882!3d-6.175392395527519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1623144960747!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-[2.5rem] left-1/2 translate-x-[-50%]">
            <button
              type="submit"
              className="bg-primary px-4 font-lato leading-[40px] h-[62px] w-[286px] rounded-md text-[25px]"
            >
              Lokasi
            </button>
          </div>
        </div>
        <div className="w-[40%] h-full overflow-hidden">
          <div className="flex w-full h-full bg-[#F3F3F3] flex-col justify-center items-center p-8">
            <div className="font-lato text-[35px] mb-6">Kritik & Saran</div>

            <form action="" className="flex flex-col w-full gap-y-5">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full h-[53px] p-2 text-[18px] font-lato"
                  placeholder="Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full h-[53px] p-2 text-[18px] font-lato"
                  placeholder="Email"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full h-[53px] p-2 text-[18px] font-lato"
                  placeholder="Nomor Handphone"
                />
              </div>
              <div className="w-full">
                <textarea
                  className="w-full p-2 text-[18px] font-lato"
                  rows={3}
                  placeholder="Pesan Anda"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="bg-primary px-4 font-lato leading-[40px] h-[62px] w-[286px] rounded-md text-[25px]"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="max-h-[400px] relative flex flex-col mt-20 mx-auto justify-center items-center w-full bg-secondary">
        <div className="container mt-12 flex flex-row">
          <div className="w-1/2 flex flex-col">
            <div className="">
              <img src="/logo/Eratani.png" className="object-cover" alt="" />
            </div>
            <div className="flex flex-row mt-5 gap-x-24">
              <div className="font-[300]">
                <div className="flex font-lato text-[12px] max-w-[214px] text-white leading-[20px] tracking-[1px]">
                  Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet,
                  Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI
                  Jakarta 12870, Indonesia
                </div>
                <div className="flex font-lato text-[12px] max-w-[214px] mt-8 text-white leading-[20px] tracking-[1px]">
                  Email : info.eratani@eratani.co.id
                </div>
                <div className="flex font-lato text-[12px] max-w-[214px] mt-2 text-white leading-[20px] tracking-[1px]">
                  Telepon : +62 811 952 2577
                </div>
              </div>
              <div className="text-white">
                <div className="font-lato font-[400] tracking-[0.8px] text-[18px]">
                  Menu
                </div>
                <div className="flex gap-y-1 flex-col mt-5 font-lato font-[300] text-[12px] tracking-[1px]">
                  <a>Tim Kami</a>
                  <a href="">Mitra Eratani</a>
                  <a href="">Tips & Berita Pertanian</a>
                  <a href="">Karir</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between py-10 ml-24">
            <div className="flex flex-row gap-x-2 justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12C8 17.5228 9.79086 22 12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2C9.79086 2 8 6.47715 8 12Z"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="relative font-lato text-white text-[18px] before:absolute before:w-full before:h-[2px] before:bg-primary before:bottom-0 before:left-0 before:content-['']">
                IN
              </div>
              <div className="font-lato text-white text-[18px]">EN</div>
            </div>

            <div className="flex flex-row gap-x-10 justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5899 6.69C18.5931 6.47079 17.6913 5.94144 17.014 5.17789C16.3367 4.41435 15.9186 3.45587 15.8199 2.44V2H12.3699V15.67C12.3706 16.2766 12.1804 16.868 11.8263 17.3604C11.4722 17.8529 10.9722 18.2215 10.397 18.414C9.82175 18.6065 9.20056 18.6131 8.62138 18.4329C8.0422 18.2527 7.5344 17.8948 7.1699 17.41C6.84335 16.9808 6.64339 16.4689 6.59263 15.932C6.54187 15.3951 6.64234 14.8548 6.88268 14.372C7.12302 13.8892 7.49363 13.4834 7.95261 13.2003C8.4116 12.9172 8.94063 12.7681 9.4799 12.77C9.77814 12.7683 10.0749 12.8121 10.3599 12.9V9.4C10.0282 9.35893 9.69401 9.34222 9.3599 9.35C8.12921 9.38288 6.93482 9.77393 5.92299 10.4753C4.91115 11.1766 4.12579 12.1578 3.66308 13.2986C3.20036 14.4395 3.08038 15.6905 3.31782 16.8986C3.55526 18.1066 4.13981 19.2191 4.9999 20.1C5.88139 20.9962 7.00939 21.6101 8.24059 21.8638C9.4718 22.1175 10.7506 21.9994 11.9146 21.5246C13.0785 21.0498 14.075 20.2397 14.7775 19.1973C15.48 18.1548 15.8568 16.9271 15.8599 15.67V8.67C17.2514 9.66395 18.9199 10.1956 20.6299 10.19V6.79C20.294 6.79139 19.9589 6.75787 19.6299 6.69H19.5899Z"
                  fill="#F3F3F3"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z"
                  fill="#F3F3F3"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z"
                  fill="#F3F3F3"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_980)">
                  <path
                    d="M23.4999 6.50708C23.364 6.02231 23.0993 5.58342 22.7339 5.23708C22.3582 4.88008 21.8977 4.62471 21.3959 4.49508C19.5179 4.00008 11.9939 4.00008 11.9939 4.00008C8.85721 3.96439 5.72131 4.12135 2.60388 4.47008C2.10208 4.60929 1.64245 4.87036 1.26588 5.23008C0.895885 5.58608 0.627885 6.02508 0.487885 6.50608C0.151578 8.31782 -0.0118232 10.1574 -0.000115239 12.0001C-0.0121152 13.8411 0.150885 15.6801 0.487885 17.4941C0.624885 17.9731 0.891885 18.4101 1.26288 18.7631C1.63388 19.1161 2.09588 19.3711 2.60388 19.5061C4.50689 20.0001 11.9939 20.0001 11.9939 20.0001C15.1345 20.0358 18.2744 19.8789 21.3959 19.5301C21.8977 19.4004 22.3582 19.1451 22.7339 18.7881C23.1039 18.4351 23.3669 17.9961 23.4989 17.5181C23.844 15.707 24.0118 13.8667 23.9999 12.0231C24.0258 10.1717 23.8583 8.32264 23.4999 6.50608V6.50708ZM9.60188 15.4241V8.57708L15.8619 12.0011L9.60188 15.4241Z"
                    fill="#F3F3F3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_980">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.4988 14.382C17.1994 14.233 15.7313 13.515 15.458 13.415C15.1847 13.316 14.9858 13.267 14.7858 13.565C14.5869 13.861 14.0151 14.531 13.8413 14.729C13.6665 14.928 13.4926 14.952 13.1942 14.804C12.8958 14.654 11.9332 14.341 10.7927 13.329C9.90544 12.541 9.30557 11.568 9.13173 11.27C8.9579 10.973 9.11264 10.812 9.26236 10.664C9.39701 10.531 9.56079 10.317 9.71051 10.144C9.86022 9.97002 9.90946 9.84602 10.0089 9.64703C10.1094 9.44903 10.0592 9.27603 9.98382 9.12703C9.90946 8.97803 9.3126 7.51503 9.06341 6.92003C8.82125 6.34103 8.57507 6.42003 8.39219 6.41003C8.21736 6.40203 8.0184 6.40003 7.81945 6.40003C7.6205 6.40003 7.29695 6.47403 7.02364 6.77203C6.74932 7.06903 5.97863 7.78803 5.97863 9.25103C5.97863 10.713 7.04775 12.126 7.19747 12.325C7.34719 12.523 9.30255 15.525 12.2979 16.812C13.0113 17.118 13.567 17.301 14.0001 17.437C14.7155 17.664 15.3666 17.632 15.8811 17.555C16.4538 17.47 17.6475 16.836 17.8967 16.142C18.1449 15.448 18.1449 14.853 18.0705 14.729C17.9962 14.605 17.7972 14.531 17.4978 14.382H17.4988ZM12.0507 21.785H12.0467C10.2676 21.7853 8.52118 21.3094 6.99048 20.407L6.62875 20.193L2.86874 21.175L3.87255 17.527L3.63642 17.153C2.64179 15.5774 2.11543 13.7538 2.11814 11.893C2.12015 6.44303 6.57549 2.00904 12.0547 2.00904C14.7074 2.00904 17.2014 3.03904 19.0764 4.90703C20.0012 5.82361 20.7342 6.9136 21.233 8.11392C21.7318 9.31425 21.9864 10.6011 21.9823 11.9C21.9803 17.35 17.5249 21.785 12.0507 21.785ZM20.5032 3.48804C19.3961 2.37896 18.0788 1.49958 16.6277 0.90084C15.1766 0.302104 13.6206 -0.00407624 12.0497 4.09775e-05C5.46417 4.09775e-05 0.102491 5.33503 0.100481 11.892C0.0994764 13.988 0.649109 16.034 1.69512 17.837L0 24L6.33434 22.346C8.0866 23.2961 10.0502 23.794 12.0457 23.794H12.0507C18.6363 23.794 23.9979 18.459 23.9999 11.901C24.0048 10.3383 23.6983 8.79013 23.0981 7.34606C22.4978 5.902 21.6159 4.5907 20.5032 3.48804Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center font-lato font-[300] tracking-[0.8px] text-[12px] text-white mb-5 ">
          Copyright © 2021 by PT Eratani Teknologi Nusantara
        </div>
      </section>
      <div
        className={`fixed z-40 right-20 bottom-56 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <div className="h-[72px] w-[72px] flex justify-center items-center bg-primary rounded-full">
          <svg
            width="34"
            height="20"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0002 19.4L17.0002 7.39995L5.0002 19.4L0.200195 17L17.0002 0.199951L33.8002 17L29.0002 19.4Z"
              fill="#121212"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
