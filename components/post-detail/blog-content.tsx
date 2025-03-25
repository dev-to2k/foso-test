"use client";

import { useEffect } from "react";
import Blockquote from "./blockquote";
import FeaturedImage from "./featured-image";

export default function BlogContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            window.dispatchEvent(
              new CustomEvent("sectionInView", { detail: id })
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe both h2 and h3 elements
    document.querySelectorAll(".prose h2, .prose h3").forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Featured Image */}
      <FeaturedImage
        imageUrl="/images/post-detail/image-1.png"
        subtitle="Quy trình 5S là gì?"
      />

      {/* Quote */}
      <Blockquote
        isCustomBlockquote
        className="text-xl leading-6 font w-[778px]"
      >
        Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng
        5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông
        tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy
        trình bạn nhé.
      </Blockquote>
      <div className="prose max-w-none font-medium text-[#231F20]">
        <h2 id="section-1" className="text-2xl font-bold text-[#15AA7A] mb-4">
          1. Quy trình 5S là gì?
        </h2>

        <p className="mb-4">
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
          xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
        </p>

        <p className="mb-4">
          Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng
          bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu
          trong tiếng Nhật:
        </p>

        <ul className="list-none pl-0 mb-4">
          <li className="flex items-start mb-2">
            <span className="text-[#15AA7A] font-medium mr-2">•</span>
            <span>
              <span className="text-[#15AA7A] font-medium">Seiri</span> (Ngăn
              nắp)
            </span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#15AA7A] font-medium mr-2">•</span>
            <span>
              <span className="text-[#15AA7A] font-medium">Seiso</span> (Sạch
              sẽ)
            </span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#15AA7A] font-medium mr-2">•</span>
            <span>
              <span className="text-[#15AA7A] font-medium">Seiton</span> (Trật
              tự)
            </span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#15AA7A] font-medium mr-2">•</span>
            <span>
              <span className="text-[#15AA7A] font-medium">Shitsuke</span> (Kỷ
              luật)
            </span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-[#15AA7A] font-medium mr-2">•</span>
            <span>
              <span className="text-[#15AA7A] font-medium">Seiketsu</span> (Tiêu
              chuẩn hóa)
            </span>
          </li>
        </ul>

        <h2 id="section-2" className="text-2xl font-bold text-[#15AA7A] mb-4">
          2. Lợi ích quy trình 5S đem lại
        </h2>

        <p className=" mb-4">
          Quy trình 5S được kết hợp từ 5 chữ S, mỗi chữ S thể hiện cho một bước
          của quy trình với mục đích cải tiến môi trường làm việc của doanh
          nghiệp.
        </p>
        <p className=" mb-4">
          Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ
          tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm
          việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị
          trí quy định và dễ dàng tìm kiếm khi cần thiết.
        </p>
        <p className="">
          Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen
          tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa
          doanh nghiệp tích cực.
        </p>

        <FeaturedImage
          imageUrl="/images/post-detail/image-2.png"
          subtitle="Tại sao doanh nghiệp cần quy trình 5S?"
        />

        <h2 id="section-3" className="text-2xl font-bold text-[#15AA7A] mb-4">
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </h2>

        <p className="mb-4">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </p>

        <h3 id="section-3-1" className="text-xl font-bold text-[#15AA7A] mb-2">
          3.1 Cải thiện rõ nét môi trường làm việc
        </h3>
        <p className="mb-4">
          Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng
          hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu
          quả cho từng cá nhân trong doanh nghiệp.
        </p>

        <h3 id="section-3-2" className="text-xl font-bold text-[#15AA7A] mb-2">
          3.2 Tiết kiệm thời gian đáng kể
        </h3>
        <p className="mb-4">
          Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời
          gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy
          móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự,
          mọi sự tìm kiếm đều trở nên dễ dàng.
        </p>

        <h3 id="section-3-3" className="text-xl font-bold text-[#15AA7A] mb-2">
          3.3 Tăng năng suất làm việc
        </h3>
        <p className="mb-4">
          Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng
          cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng
          các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng
          năng suất làm việc.
        </p>

        <h3 id="section-3-4" className="text-xl font-bold text-[#15AA7A] mb-2">
          3.4 Tiết kiệm chi phí
        </h3>
        <p className="mb-4">
          Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử
          dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí
          vận hành đáng kể cho doanh nghiệp của mình.
        </p>

        <h3 id="section-3-5" className="text-xl font-bold text-[#15AA7A] mb-2">
          3.5 Tăng chất lượng sản phẩm
        </h3>
        <p className="mb-4">
          5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó,
          giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không
          mong muốn.
        </p>

        <FeaturedImage
          imageUrl="/images/post-detail/image-3.png"
          subtitle="Quy trình 5s gồm các bước"
        />

        <h2 id="section-4" className="text-2xl font-bold text-[#15AA7A] mb-4">
          4. Quy trình 5S gồm các bước
        </h2>

        <p className="mb-4">
          5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả
          làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ
          bản sau:
        </p>

        <h3 id="section-4-1" className="text-xl font-bold text-[#15AA7A] mb-2">
          4.1 Seiri (Ngăn nắp)
        </h3>
        <p className="mb-4">
          Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm
          tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một
          không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
        </p>

        <h3 id="section-4-2" className="text-xl font-bold text-[#15AA7A] mb-2">
          4.2 Seiton (Sắp xếp)
        </h3>
        <p className="mb-4">
          Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài
          liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng
          chúng một cách dễ dàng.
        </p>

        <h3 id="section-4-3" className="text-xl font-bold text-[#15AA7A] mb-2">
          4.3 Seiso (Vệ sinh)
        </h3>
        <p className="mb-4">
          Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong
          doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ
          sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và
          tăng cường sức khỏe cho mỗi nhân viên.
        </p>

        <h3 id="section-4-4" className="text-xl font-bold text-[#15AA7A] mb-2">
          4.4 Seiketsu (Tiêu chuẩn hóa)
        </h3>
        <p className="mb-4">
          Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp
          đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các
          dụng cụ, thiết bị, tài liệu.
        </p>

        <h3 id="section-4-5" className="text-xl font-bold text-[#15AA7A] mb-2">
          4.5 Shitsuke (Kỷ luật)
        </h3>
        <p className="mb-4">
          Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai
          trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài
          hạn. Bước này đò hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt
          chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy
          trình.
        </p>

        <FeaturedImage
          imageUrl="/images/post-detail/image-4.png"
          subtitle="Các bước thực hiện quy trình 5s"
        />

        <h2 id="section-5" className="text-2xl font-bold text-[#15AA7A] mb-4">
          5. Quy trình được thực hiện như sau:
        </h2>

        <p className="mb-4">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </p>

        <h3 id="section-5-1" className="text-xl font-bold text-[#15AA7A] mb-2">
          5.1 Giai đoạn chuẩn bị
        </h3>
        <p className="mb-4">
          Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng để
          điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bố cụ
          thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
        </p>

        <h3 id="section-5-2" className="text-xl font-bold text-[#15AA7A] mb-2">
          5.2 Triển khai rộng rãi
        </h3>
        <p className="mb-4">
          Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S
          cho tất cả mọi người trong doanh nghiệp để nắm rõ kiến thức cũng như
          cách áp dụng như thế nào vào doanh nghiệp của bạn.
        </p>

        <h3 id="section-5-3" className="text-xl font-bold text-[#15AA7A] mb-2">
          5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
        </h3>
        <p className="mb-4">
          Đây là bước có thể khiến mọi người không hào hứng trong các bước của
          quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào
          hứng cho từng cá nhân.
        </p>

        <h3 id="section-5-4" className="text-xl font-bold text-[#15AA7A] mb-2">
          5.4 Sàng lọc, sắp xếp và đánh giá
        </h3>
        <p className="mb-4">
          Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh
          nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện
          sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm
          kiếm sau này.
        </p>

        <h3 id="section-5-5" className="text-xl font-bold text-[#15AA7A] mb-2">
          5.5 Đánh giá
        </h3>
        <p className="mb-4">
          Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình
          cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá
          trình thực hiện quy trình 5S.
        </p>

        <h2 id="section-6" className="text-2xl font-bold text-[#15AA7A] mb-4">
          6. Quy trình 5S có giống với Kaizen?
        </h2>

        <p className="mb-4">
          Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
          không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
          chúng có mối quan hệ chặt chẽ với nhau.
        </p>

        <Blockquote
          wrapBlockquoteClassName="pl-0"
          className="pl-6 text-start py-3"
        >
          Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
          doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang
          tính liên tục và bền vững.
        </Blockquote>

        <Blockquote
          wrapBlockquoteClassName="pl-0"
          className="pl-6 text-start py-3"
        >
          Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
          trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu
          chuẩn hóa và kỷ luật trong môi trường làm việc.
        </Blockquote>

        <p className="mb-4">
          Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
          này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch
          sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong
          quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền
          tảng vững chắc cho các hoạt động cải tiến tiếp theo.
        </p>

        <h2 id="section-7" className="text-2xl font-bold text-[#15AA7A] mb-4">
          7. Đối tượng nào nên áp dụng 5S?
        </h2>

        <p className="mb-4">
          Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở
          nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên,
          5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành
          chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
        </p>

        <p className="mb-4">
          Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
          các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
        </p>

        <FeaturedImage
          imageUrl="/images/post-detail/image-5.png"
          subtitle="Các yếu tố tạo nên thành công cho quy trình 5S"
        />

        <h2 id="section-8" className="text-2xl font-bold text-[#15AA7A] mb-4">
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </h2>

        <p className="mb-4">
          Và những nhân tố quyết định đến quá trình thành công của quy trình
          nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
        </p>

        <ul className="list-none pl-0 mb-4">
          <li className="flex items-start mb-2">
            <span className="font-medium mr-2">•</span>
            <span>
              Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi
              đây là yếu tố quan trọng nhất để quyết định doanh nghiệp có áp
              dụng quy tắc này hay không.
            </span>
          </li>
          <li className="flex items-start mb-2">
            <span className="font-medium mr-2">•</span>
            <span>
              Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo
              đồng ý, doanh nghiệp cần bộ phận đưa ra ý tưởng, kế hoạch thực
              hiện triển khai 5S.
            </span>
          </li>
          <li className="flex items-start mb-2">
            <span className="font-medium mr-2">•</span>
            <span>
              Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy
              động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích
              chung của tổ chức, của doanh nghiệp.
            </span>
          </li>
        </ul>

        <p className="mb-4">
          Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
          các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
          khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
          ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
          phát triển, cải tiến vượt bậc trong tương lai.
        </p>
      </div>
    </>
  );
}
