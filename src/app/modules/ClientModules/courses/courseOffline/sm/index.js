import React from "react";
import useSiteTitle from "core/hooks/useSiteTitle";

import { pr } from "../../assets/images/chuong-trinh-huan-luyen/offline";
import { ph } from "../../assets/images/chuong-trinh-huan-luyen/offline";
import "./styles/styles.scss";
import UiApplyCourse from "share/uiApplyCourse";
import { useEffect } from "react";

const data_value = [
  "Hiểu được căn nguyên của những mối quan hệ xấu dẫn đến sự căng thẳng và bệnh tật như thế nào ",
  "Trải nghiệm cách chuẩn đoán và tư vấn trị liệu cho những người xung quanh, để giúp chữa lành các mối quan hệ của họ",
  "Chữa lạnh mối quan hệ của bạn với Chính Bản Thân Bạn và những người quan trọng trong đời",
  "Thuần thục sử dụng quyền năng của cơ thể và sức mạnh của niềm tin để chữa lành bệnh tật",
  "Được chuyên gia hướng dẫn các quy trình chữa lành sức khỏe, tinh thần từ cơ bản đến nâng cao",
  "Làm chủ hoàn toàn tâm trí, vô hiệu hóa mọi cảm xúc tiêu cực không để chúng chi phối bạn",
];
function SelfMastery() {
  useSiteTitle("sefl_mastery");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pr">
      <div className="container-fluid p-0">
        <img src={pr.pr01} alt={pr.pr01} />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 offset-md-3 mt-3">
              <iframe
                height="315"
                src="https://www.youtube.com/embed/vGlxwkAx-E4?si=fA7TYQEGWIHiA8ig"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-md-8 offset-md-2 mt-5">
              <h2 className="quote">
                Chúng ta không thể tồn tại một mình trên thế giới này
              </h2>
            </div>
          </div>

          <div className="row mt-3 flex-alignitem">
            <div className="col-md-6">
              <img src={pr.pr05} alt={pr.pr05} />
            </div>
            <div className="col-md-6">
              <p>
                Mỗi ngày trôi qua chúng ta đều phải tiếp xúc với người khác: gia
                đình, bạn bè, đồng nghiệp, sếp, nhân viên, hàng xóm, người bán
                hàng, … Và mọi vấn đề xảy ra đều bắt nguồn từ bất hoà trong các
                mối quan hệ này. Người mà chúng ta trò chuyện nhiều nhất là
                chính bản thân mình. Trước bất kỳ quyết định nào, chúng ta cũng
                suy nghĩ và tự hỏi bản thân mình nhiều điều. Đôi lúc, ta nghĩ
                bụng sẽ làm nhưng rồi lại không làm, ta trì hoãn, ta bắt đầu mà
                không hoàn thành, … Đó là lúc mối quan hệ với chính mình không
                hoà hợp.
              </p>
            </div>
          </div>
          <div className="row mt-3 flex-alignitem">
            <div className="col-md-6">
              <img src={pr.pr06} alt={pr.pr06} />
              <p className="problem">
                Hầu hết mọi người đều nghĩ phải cần có ít nhất HAI NGƯỜI để mối
                quan hệ trở nên tốt đẹp. Ai cũng mong chờ người kia thay đổi,
                người kia hiểu mình, người kia nên làm thế này/thế kia, …Mọi
                quyết định luôn đúng ngay tại thời điểm chúng ta đưa ra quyết
                định. Nhưng khi có vấn đề xảy ra thì chúng ta thường nhìn thấy
                lỗi từ người khác, vì những yếu tố tác động bên ngoài, …Chỉ vì
                tin điều này, nhiều cuộc hôn nhân đổ vỡ, kinh doanh thất bại,
                chiến tranh xảy ra,... Câu hỏi tất cả chúng ta đặt ra là làm thế
                nào để thiết lập những mối quan hệ bền vững và hoàn hảo. Chúng
                ta tìm kiếm câu trả lời bằng nhiều cách khác nhau: đọc sách,
                tham gia khoá học, tìm nhà tư vấn, … Nhưng đến bây giờ, các mối
                quan hệ của chúng ta ra sao? Đâu mới là câu trả lời thực sự?
              </p>
            </div>
            <div className="col-md-6">
              <img src={pr.pr07} alt={pr.pr07} />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-8 offset-2">
              <h2 className="quote">vấn đề chúng ta là gì?</h2>
            </div>
          </div>

          <div className="row flex-alignitem">
            <div className="col-md-7">
              <strong>Với bản thân:</strong> Hầu hết chúng ta đều chưa hiểu và
              chưa đối xử thật sự tử tế với chính bản thân mình. Chúng ta chưa
              chịu lắng nghe bản thân cần gì, có khả năng gì, chúng ta bỏ lơ bản
              thân, mải mê chạy theo thế giới bên ngoài. Chúng ta chưa chăm sóc
              tốt cho bản thân, chúng ta chỉ chú ý tới bản thân khi nó gặp phải
              những vấn đề sức khỏe, bệnh tật, tai nạn… Cơ thể phản ứng lại bằng
              những dấu hiệu tiêu cực về thể chất lẫn tinh thần.
            </div>
            <div className="col-md-5">
              <img src={pr.pr09} alt={pr.pr09} />
            </div>
          </div>

          <div className="row mt-3">
            <img
              src={ph.ph04}
              alt={ph.ph04}
              className="col-10 offset-1 hidden-sm-xs"
            />

            <img
              src={ph.ph05}
              alt={ph.ph05}
              className="col-8 offset-2 visible-sm-xs"
            />
          </div>

          <div className="row flex-alignitem">
            <div className="col-md-7 order-last">
              <strong>Với người khác:</strong> Hàng ngày, chúng ta phải tương
              tác với nhiều mối quan hệ như gia đình, người yêu, bạn bè, đồng
              nghiệp, cộng đồng xung quanh,… và mỗi cá nhân lại có một tính
              cách, tư duy và quan điểm khác nhau, rất khó tránh khỏi những bốc
              đồng, xung đột, nếu không biết dung hòa, mối quan hệ sẽ trở nên
              nặng nề, thậm chí là đỗ vỡ. Mất đi những mối quan hệ tốt, chúng ta
              mất đi rất nhiều niềm vui và cơ hội trong cuộc đời.
            </div>
            <div className="col-md-5">
              <img src={pr.pr10} alt={pr.pr10} />
            </div>
          </div>

          <div className="row">
            <div className="col-10 offset-1 ">
              <UiApplyCourse
                data={data_value}
                title="Những giá trị mà bạn nhận được từ chương trình"
                minHeight={210}
              />
            </div>
          </div>

          <div className="row mt-5">
            <h2 className="quote col-8 offset-2">
              Chia sẻ của học viên đã tham gia chương trình
            </h2>
            <div className="col-10 offset-1">
              <img src={pr.pr16} alt={pr.pr16} />
            </div>
            <h3 className=" mt-3 mb-5 col-10 offset-1 quote">
              Đầu tư cho những mối quan hệ chính là đầu tư “SINH LỜI” nhiều
              nhất. Đừng chần chừ, hãy cho THE ORIGINS cơ hội được giúp bạn sống
              hòa hợp và hạnh phúc hơn với cuộc đời !
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfMastery;
