"use client";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { FiMail, FiPhone } from "react-icons/fi";
import Header from "./components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAFAFA] text-black">
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className="flex justify-center items-center gap-[120px] pt-[44px] pb-[50px]">
        <Image
          src="/phone-mockup.png"
          alt="banner"
          width={456}
          height={535}
          priority
        />
        <div>
          <h2 style={{ fontFamily: "Cubano" }} className="text-[28px]">
            TIẾNG VIỆT CHO TRẺ EM GỐC VIỆT Ở NƯỚC NGOÀI
          </h2>
          <h1 style={{ fontFamily: "Cubano" }} className="text-[60px] pb-4">
            VIỆT GURU
          </h1>
          <p
            style={{ fontFamily: "Baloo", lineHeight: 1.3 }}
            className="max-w-[477px] text-[24px] pb-5 text-[#424242]"
          >
            Tạo ra môi trường học tiếng Việt gần gũi, giúp bé tiếp xúc và luyện
            tập tiếng Việt mỗi ngày ngay tại nhà
          </p>
          <div className="flex items-center gap-[15px]">
            <Image
              src="/appstore.png"
              alt="store"
              width={135}
              height={40}
              priority
              className="cursor-pointer"
            />
            <Image
              src="/googleplay.png"
              alt="store"
              width={135}
              height={40}
              priority
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Ve VietGuru */}
      <div id="section1" className="bg-[#fafafa] h-[67px]"></div>
      <div className="py-[60px] flex flex-col justify-center items-center w-full bg-[#FFFADF] relative overflow-hidden">
        <Image
          src="/flower.png"
          alt="Logo"
          width={474}
          height={466}
          priority
          className="absolute left-[-154px] top-[50px]"
        />
        <Image
          src="/flower.png"
          alt="Logo"
          width={474}
          height={466}
          priority
          className="absolute bottom-[313px] right-[-125px] rotate-90"
        />
        <Image
          src="/logo.svg"
          alt="Logo"
          width={84}
          height={56}
          priority
          className="mb-[60px]"
        />
        <Image src="/kid1.png" alt="Logo" width={734} height={339} priority />
        <p
          className="text-[24px] pt-[42px] pb-[120px] max-w-[934px] text-[#424242] text-center font-bold"
          style={{ fontFamily: "Nunito" }}
        >
          Bé học nói, học giao tiếp tiếng Việt, khám phá văn hóa vùng miền Việt
          Nam <br />
          một cách vui vẻ, đầy hứng thú mà vẫn hiệu quả.
        </p>
        <p className="text-[40px]" style={{ fontFamily: "Cubano" }}>
          VIỆT GURU đồng hành cùng
        </p>
        <div className="mt-[24px] mb-[50px] w-[696px] h-[180px] flex flex-col rounded-full justify-center items-center bg-[#FFFFF0]">
          <div className="flex justify-center items-center gap-[30px]">
            <Image
              src="/rating.png"
              alt="Logo"
              width={80}
              height={80}
              priority
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 1.3 }}
              className="text-[80px]"
            >
              360.000 <span className="text-[20px]">bé</span>
            </p>
          </div>
          <p
            className="text-[#424242] font-bold text-[20px]"
            style={{ fontFamily: "Nunito" }}
          >
            đang sử dụng để học Tiếng Việt
          </p>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="bg-[#FFFFF0] rounded-[45px] w-[219px] h-[300px] flex flex-col justify-center items-center gap-[15px]">
            <Image
              src="/earth-globe.png"
              alt="Logo"
              width={80}
              height={80}
              priority
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 0.8 }}
              className="text-[80px]"
            >
              25 <span className="text-[20px] ml-[-10px]">nước</span>
            </p>
            <p
              className="text-[#424242] text-[20px] h-[40px] text-center font-bold mt-[10px]"
              style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
            >
              Việt Guru đã có mặt
            </p>
          </div>
          <div className="bg-[#FFFFF0] rounded-[45px] w-[219px] h-[300px] flex flex-col justify-center items-center gap-[15px]">
            <Image
              src="/smile.png"
              alt="Logo"
              width={80}
              height={80}
              priority
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 0.8 }}
              className="text-[80px]"
            >
              96 <span className="text-[20px] ml-[-10px]">%</span>
            </p>
            <p
              className="text-[#424242] text-[20px] h-[40px] text-center font-bold mt-[10px]"
              style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
            >
              Độ hài lòng
              <br />
              của phụ huynh
            </p>
          </div>
          <div className="bg-[#FFFFF0] rounded-[45px] w-[219px] h-[300px] flex flex-col justify-center items-center gap-[15px]">
            <Image src="/star.png" alt="Logo" width={80} height={80} priority />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 0.8 }}
              className="text-[80px]"
            >
              4.8 <span className="text-[20px] ml-[-10px]">điểm</span>
            </p>
            <p
              className="text-[#424242] text-[20px] h-[40px] text-center font-bold mt-[10px]"
              style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
            >
              Đánh giá trên
              <br />
              cửa hàng ứng dụng
            </p>
          </div>
        </div>
      </div>

      {/* Ve ung dung */}
      <div className="bg-[#9bd8ff] relative">
        <Image
          src="/cloud.png"
          alt="bg"
          width={419}
          height={208}
          className="absolute left-[-91px] top-[300px]"
        />
        <Image
          src="/cloud.png"
          alt="bg"
          width={419}
          height={208}
          className="absolute right-[-91px] top-[1100px]"
        />
        <Image
          src="/cloud.png"
          alt="bg"
          width={419}
          height={208}
          className="absolute left-[-45px] bottom-[800px]"
        />
        <Image
          src="/cloud.png"
          alt="bg"
          width={419}
          height={208}
          className="absolute right-[-107px] bottom-[0px]"
        />
        <Image
          src="/huyen.png"
          alt="bg"
          width={133}
          height={145}
          className="absolute right-[107px] top-[860px] z-20"
        />
        <Image
          src="/hoi.png"
          alt="bg"
          width={126}
          height={120}
          className="absolute left-[150px] top-[1100px] z-20"
        />
        <Image
          src="/nang.png"
          alt="bg"
          width={105}
          height={112}
          className="absolute right-[209px] top-[1800px] z-20"
        />
        <Image
          src="/sac.png"
          alt="bg"
          width={228}
          height={185}
          className="absolute left-[68px] top-[2250px] z-20"
        />
        <Image
          src="/nag.png"
          alt="bg"
          width={244}
          height={170}
          className="absolute right-[138px] bottom-[300px] z-20"
        />
        <div className="w-full h-[100px] mb-[200px] relative">
          <Image
            src="/bg-yellow-header.png"
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>

        <p
          className="text-center text-[50px] uppercase sticky top-1/2 z-10 -translate-y-1/2"
          style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
        >
          Cha mẹ chắp cánh con bay <br /> Để{" "}
          <span className="text-[#0a7bc2]">việt guru</span> nâng bước con về quê
          hương
        </p>
        <div className="w-full h-[4000px] relative">
          <Image
            src="/dots.png"
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
      <div className="bg-[#9bd8ff]">
        <div className="w-full h-[500px] relative">
          <Image
            src="/cloud-bottom.png"
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>

      {/* Co gi hay */}
      <div id="section2" className="bg-[#fafafa] h-[67px]"></div>
      <div className="bg-[#fafafa] pt-[30px]">
        <p
          style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
          className="text-center text-[40px] mb-[80px]"
        >
          VIỆT GURU có gì hay?
        </p>
        <div className="flex justify-center items-center gap-[25px] mb-[160px]">
          <div className="bg-[#FFF0EB] py-[25px] px-[30px] w-[275px] h-[436px] rounded-[20px] flex flex-col items-center gap-4 text-center">
            <Image
              src="/onboarding-graphic-02.png"
              alt="bg"
              width={100}
              height={100}
              style={{ width: "auto", height: "161px" }}
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
              className="text-[20px]"
            >
              Học tiếng việt cực vui
            </p>
            <p
              style={{ fontFamily: "Baloo", lineHeight: 1.2 }}
              className="text-[20px] text-[#616161]"
            >
              Nội dung chất lượng do Viện ngôn ngữ học biên soạn, đa dạng bài
              học dưới dạng trò chơi tương tác, sách đọc, video,.... không gây
              nhàm chán.
            </p>
          </div>
          <div className="bg-[#EBE4FF] py-[25px] px-[25px] w-[275px] h-[436px] rounded-[20px] flex flex-col items-center gap-4 text-center">
            <Image
              src="/onboarding-graphic-03.png"
              alt="bg"
              width={100}
              height={100}
              style={{ width: "auto", height: "161px" }}
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
              className="text-[20px]"
            >
              Tích điểm đổi vòng bay
            </p>
            <p
              style={{ fontFamily: "Baloo", lineHeight: 1.2 }}
              className="text-[20px] text-[#616161]"
            >
              Mang lại cơ hội trải nghiệm thực tế, đối vé máy bay về thăm quê
              hương thông qua các nhiệm vụ học mỗi ngày
            </p>
          </div>
          <div className="w-[275px] bg-[#FFFADF] py-[25px] px-[30px] h-[436px] rounded-[20px] flex flex-col items-center gap-4 text-center">
            <Image
              src="/onboarding-graphic-04.png"
              alt="bg"
              width={100}
              height={100}
              style={{ width: "auto", height: "161px" }}
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
              className="text-[20px]"
            >
              khám phá văn hóa
            </p>
            <p
              style={{ fontFamily: "Baloo", lineHeight: 1.2 }}
              className="text-[20px] text-[#616161]"
            >
              Thu hẹp khoảng cách, giúp bé tiếp cận và đến gần hơn với văn hóa
              địa phương, nâng cao khả năng giao tiếp đời sống
            </p>
          </div>
          <div className="w-[275px] bg-[#E7FFB4] py-[25px] px-[30px] h-[436px] rounded-[20px] flex flex-col items-center gap-4 text-center">
            <Image
              src="/onboarding-graphic-05.png"
              alt="bg"
              width={100}
              height={100}
              style={{ width: "auto", height: "161px" }}
            />
            <p
              style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
              className="text-[20px]"
            >
              kết nối về cội nguồn
            </p>
            <p
              style={{ fontFamily: "Baloo", lineHeight: 1.2 }}
              className="text-[20px] text-[#616161]"
            >
              Bé kết nối với gia đình, cội nguồn và phát triễn kĩ năng luyện nói
              thông qua tính năng gọi video call cho người thân và chấm điểm
              trực tiếp trên ứng dụng
            </p>
          </div>
        </div>
        <div className="w-full h-[100px] relative">
          <Image
            src="/pink-bottom.png"
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>

      {/* package */}
      <div
        id="section3"
        className="bg-[#feefeb] flex justify-center items-center gap-[100px] pt-[115px] pb-[160px]"
      >
        <Image src="/package.png" alt="bg" width={490} height={422} />
        <div>
          <span
            style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
            className="bg-[#FCD200] py-1 px-3 rounded-full text-[12px] font-bold"
          >
            Recommended
          </span>
          <p
            style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
            className="text-[28px] mt-[15px] mb-[5px]"
          >
            nâng cấp ngay
          </p>
          <p
            style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
            className="text-[60px] mb-[30px]"
          >
            full package
          </p>
          <ul
            style={{ fontFamily: "Baloo", lineHeight: 1.5 }}
            className="text-[20px] list-disc text-[#424242] pl-5"
          >
            <li>Truy cập không giới hạn tất cả các tài liệu học tập</li>
            <li>Sử dụng đồng thời lên đến 4 tài khoản của bé</li>
            <li>Cung cấp tính năng thông báo và báo cáo học tập</li>
            <li className="underline text-[#0A7BC2]">
              BỘ QUÀ TẶNG BỘ HỌC TẬP ĐẶC BIỆT
            </li>
          </ul>
          <p
            style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
            className="text-right mt-5 text-[16px] text-bold text-[#212121]"
          >
            chỉ từ{" "}
            <span
              style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
              className="text-[60px] text-[#F01141] pl-3"
            >
              20$
            </span>
            /tháng
          </p>
        </div>
      </div>

      {/* Contact */}
      <div
        id="section4"
        className="pt-[80px] pb-[120px] text-center bg-[#FAFAFA]"
      >
        <p
          style={{ fontFamily: "Cubano", lineHeight: 1.2 }}
          className="text-[40px] mb-5"
        >
          CONTACT US
        </p>
        <p
          style={{ fontFamily: "Baloo", lineHeight: 1.2 }}
          className="text-[#424242] text-[24px] mb-[60px]"
        >
          Ba mẹ có thắc mắc về Việt Guru? Liên hệ ngay với chúng tôi để được tư
          vấn miễn phí 24/24
        </p>
        <div className="flex justify-center items-center gap-[120px]">
          <div
            className="max-w-[700px] flex-1 flex flex-col gap-5"
            style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
          >
            <div className="flex gap-5">
              <input
                className="border-[#757575] border rounded-full flex-1 h-10 px-4"
                type="text"
                placeholder="Họ và tên"
              />
              <input
                className="border-[#757575] border rounded-full flex-1 h-10 px-4"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="border-[#757575] w-full border rounded-full flex-1 h-10 px-4"
                type="text"
                placeholder="Tiêu đề"
              />
            </div>
            <div>
              <textarea
                className="border-[#757575] border py-4 w-full rounded-[30px] flex-1 h-[100px] px-4"
                type="text"
                placeholder="Nội dung"
              />
            </div>

            <button className="w-full font-bold hover:bg-[#1FA2F4] hover:text-[#FAFAFA] bg-[#FCD200] h-10 border border-[#212121] rounded-full">
              Gửi
            </button>
          </div>
          <div
            style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
            className="w-[358px] text-left px-[25px] py-[30px] rounded-[30px] bg-[#1FA2F4] text-[#FAFAFA]"
          >
            <p
              style={{ fontFamily: "Baloo", lineHeight: 1.2 }}
              className="pb-4 text-[20px]"
            >
              VietGuru Vietnam Co.Ltd
            </p>
            <div className="flex flex-col gap-4 text-[16px]">
              <p className="flex gap-4 items-start">
                <span className="w-[24px]">
                  <SlLocationPin size={24} />
                </span>
                Số 18, ngõ 127, đường Hào Nam, phường Ô Chợ Dừa, quận Đống Đa,
                Hà Nội
              </p>
              <p className="flex gap-4 items-center">
                <span className="w-[24px]">
                  <FiPhone size={24} />
                </span>
                1900.6789
              </p>
              <p className="flex gap-4 items-center">
                <span className="w-[24px]">
                  <FiMail size={24} />
                </span>
                support@vietguru.com
              </p>
            </div>
            <div className="flex justify-end items-center gap-3 mt-[35px]">
              <Image src="/facebook.svg" alt="bg" width={24} height={24} />
              <Image src="/instagram.svg" alt="bg" width={24} height={24} />
              <Image src="/youtube.svg" alt="bg" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#212121] text-center py-4">
        <p
          className="text-[12px] text-[#FAFAFA]"
          style={{ fontFamily: "Nunito", lineHeight: 1.2 }}
        >
          2023 © All Rights Reserved | Designed by VietGuru
        </p>
      </div>
    </main>
  );
}
