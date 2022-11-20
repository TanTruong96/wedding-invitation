import moment from "moment";

export const VuQuyIntroduceData = {
  mainTitle: "Thúy & Nhân",
  bride: "Thúy",
  groom: "Nhân",
  dateTime: {
    date: 26,
    month: "Dec",
    year: 2022
  }
};
export const TanHonIntroduceData = {
  mainTitle: "Nhân & Thúy",
  bride: "Thúy",
  groom: "Nhân",
  dateTime: {
    date: "01",
    month: "Jan",
    year: 2023
  }
}
export const FamilyInfoData = {
  vuQuyTitle: "Nhà Gái",
  vuQuyParents: "Nguyễn Xuân Hương & Nguyễn Thị Ngà",
  vuQuyAddress: "Thôn Mỹ Xuân 2, X. Hoà Thịnh, H. tây Hoà, Phú Yên",
  vuQuyVocative: "Út Nữ",
  vuQuyBride: "Nguyễn Thị Thúy",
  vuQuyTime: "7h00",
  vuQuyDate: "26/12/2022",
  vuQuyNegativeDate: "Nhằm ngày 4 tháng Chạp năm Nhâm Dần",
  vuQuyWedding: "Lễ Vu Quy",

  tanHonTitle: "Nhà Trai",
  tanHonParents: "Trương Văn Lập & Võ Thị Thuộc",
  tanHonAddress: "Thôn 2, X. Đức Hạnh, H. Đức Linh, Bình Thuận",
  tanHonVocative: "Út Nam",
  tanHonGroom: "Trương Võ Hoài Nhân",
  tanHonTime: "9h00",
  tanHonDate: "01/01/2023",
  tanHonNegativeDate: "Nhằm ngày 10 tháng Chạp năm Nhâm Dần",
  tanHonWedding: "Lễ Tân Hôn",

  noticeTitle: "Trân trọng báo tin",
  noticeWedding: "Hôn lễ được cử hành tại",
  weddingPlace: "Tư gia",

}
export const PartyInfoData = {
  mainTitle: "Trân trọng kính mời:",
  guess: "Quý khách",
  meetingNote: "Đến dự buổi tiệc",
  withFamily: "chung vui cùng gia đình chúng tôi tại",
  weddingPlace: "Tư gia",
  weddingTimeTitle: "Vào lúc:",
  vuQuyTime: "8h30",
  vuQuyWeekDays: "Thứ 2",
  vuQuyDate: 26,
  vuQuyMonth: "Tháng 12",
  vuQuyYear: "Năm 2022",
  vuQuyNegativeDate: "04",
  vuQuyNegativeMonth: "Chạp",
  vuQuyNegativeYear: "Nhâm Dần",

  tanHonTime: "11h00",
  tanHonWeekDays: "Chủ nhật",
  tanHonDate: "01",
  tanHonMonth: "Tháng 1",
  tanHonYear: "Năm 2023",
  tanHonNegativeDate: "10",
  tanHonNegativeMonth: "Chạp",
  tanHonNegativeYear: "Nhâm Dần",

  presetTitle: "Sự hiện diện của",
  fun: "là niềm vinh dự cho gia đình chúng tôi!",
}
export const VUQUY_PATHNAME = "thuynguyen-nhantruong";
export const TANHON_PATHNAME = "nhantruong-thuynguyen";
export const VuQuyData = {
  introduce: VuQuyIntroduceData,
  familyInfo: FamilyInfoData,
  partyInfo: PartyInfoData,
  timeStamp: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  finalDate: moment('2022-12-26 08:30:00', 'YYYY-MM-DD HH:mm:ss'),
  location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d913.9439692469674!2d109.2393768!3d12.9274845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fe6e16f4bbe35%3A0x8e5d54b2111c354e!2zUXXDoW4gQ8OgIFBow6og4bqkbiBUxrDhu6NuZw!5e1!3m2!1svi!2s!4v1668928210582!5m2!1svi!2s",
}
export const TanHonData = {
  introduce: {...TanHonIntroduceData},
  familyInfo: {...FamilyInfoData},
  partyInfo: {...PartyInfoData},
  timeStamp: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  finalDate: moment('2023-01-01 11:00:00', 'YYYY-MM-DD HH:mm:ss'),
  location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3680.2830906243307!2d107.5038147!3d11.1311724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317443a070d6c59d%3A0xcbcfa28653d08a48!2zU2hvcCBUaOG7nWkgVHJhbmcgTmjGsCBIYW5h!5e1!3m2!1svi!2s!4v1668928166108!5m2!1svi!2s",
}
