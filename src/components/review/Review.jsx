import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review_PR = () => {
  {
    /*Danh sách đánh giá .*/
  }
  const reviews = [
    {
      id: 1,
      name: "AdamMR",
      date: "2024-08-12",
      comment:
        "Dịch vụ massage rất tuyệt vời! Cảm giác thư giãn hoàn toàn sau khi kết thúc liệu trình, kỹ thuật massage rất chuyên nghiệp và nhẹ nhàng.",
      vote: 5,
    },
    {
      id: 2,
      name: "Vua Checker",
      date: "2024-02-07",
      comment:
        "Mình rất hài lòng với dịch vụ ở đây, massage cổ vai gáy giúp mình giảm đau nhức rất hiệu quả. Tuy nhiên, thời gian hơi ngắn.",
      vote: 4,
    },
    {
      id: 3,
      name: "Lê Quang Huy",
      date: "2024-07-29",
      comment:
        "Massage rất tuyệt vời! Chuyên viên rất tận tâm và kỹ thuật rất tốt. Đặc biệt là dịch vụ massage chân giúp thư giãn và giảm mệt mỏi cực kỳ hiệu quả.",
      vote: 5,
    },
    {
      id: 4,
      name: "Mr. Tuấn",
      date: "2024-03-11",
      comment:
        "Cảm giác thật sự thư giãn, đặc biệt là liệu trình massage toàn thân. Mình sẽ quay lại nhiều lần nữa.",
      vote: 4,
    },
    {
      id: 5,
      name: "Caubeloichoi",
      date: "2024-06-23",
      comment:
        "Chuyên viên massage rất chuyên nghiệp và tận tâm. Sau khi massage, tôi cảm thấy cơ thể nhẹ nhõm và thoải mái hơn rất nhiều. Dịch vụ tuyệt vời!",
      vote: 4,
    },
    {
      id: 6,
      name: "ThangPham",
      date: "2024-07-11",
      comment: "Rất đáng để trải nghiệm",
      vote: 5,
    },
    {
      id: 7,
      name: "HaiLong",
      date: "2024-12-09",
      comment: "Nhân viên tận tình , dịch vụ tốt",
      vote: 5,
    },
  ];

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("vi-VN", options).format(
      new Date(dateString)
    );
  };

  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <>
      <span className="lg:text-2xl md:text-lg text-base text-white font-semibold flex justify-center py-10">
        ______ĐÁNH GIÁ CỦA CÁC QUÝ ÔNG______
      </span>
      {reviews.map((item, index) => (
        <div
          key={item.id}
          className={`border-b text-sm md:text-lg border-gray-500 p-5 transition-colors duration-300 ease-in-out ${
            index % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900"
          } hover:bg-opacity-70`}
        >
          <div className="flex items-center ">
            <p className="font-semibold text-lg mr-5 text-white">{item.name}</p>
            {[...Array(5)].map((_, starIndex) => (
              <FontAwesomeIcon
                key={starIndex}
                icon={faStar}
                className={`text-white ml-1 md:text-xl text-sm ${
                  starIndex < item.vote
                    ? "text-yellow-500"
                    : "text-gray-300 opacity-50"
                }`}
              />
            ))}
          </div>
          <p className="text-md py-3 text-white">{item.comment}</p>

          <p className="text-sm italic text-right text-gray-200">
            {formatDate(item.date)}
          </p>
        </div>
      ))}
    </>
  );
};

export default Review_PR;
