import { FC } from "react";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="bg-white w-full flex justify-between items-center h-[90px] shadow-sm px-20 fixed z-30 top-0">
      <div className="text-[24px] font-bold">
        <img
          src="/logo/Eratani-Logo.png"
          alt="Logo"
          className="h-[46px] mr-2"
        />
      </div>
      <div className="flex justify-center items-center gap-14">
        <div className="text-sm-1 leading-[30px] tracking-[1.7px] font-lato cursor-pointer hover:font-bold">
          Beranda
        </div>
        <div className="text-sm-1 leading-[30px] tracking-[1.7px] font-lato cursor-pointer hover:font-bold">
          Tentang Kami
        </div>
        <div className="text-sm-1 leading-[30px] tracking-[1.7px] font-lato cursor-pointer hover:font-bold">
          Tips & Berita Pertanian
        </div>
        <div className="text-sm-1 leading-[30px] tracking-[1.7px] font-lato cursor-pointer hover:font-bold">
          Kegiatan
        </div>
        <div className="flex bg-yellow-400 rounded-md">
          <div className="my-2 mx-4 text-sm-1 leading-[30px] tracking-[1.7px]">
            Mitra Petani
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
