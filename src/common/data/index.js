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
  vuQuyTime: "8h30",
  vuQuyDate: "26/12/2022",
  vuQuyNegativeDate: "Nhằm ngày 4 tháng Chạp năm Nhâm Dần",
  vuQuyWedding: "Lễ Vu Quy",

  tanHonTitle: "Nhà Trai",
  tanHonParents: "Trương Văn Lập & Võ Thị Thuộc",
  tanHonAddress: "Thôn 2, X. Đức Hạnh, H. Đức Linh, Bình Thuận",
  tanHonVocative: "Út Nam",
  tanHonGroom: "Trương Võ Hoài Nhân",
  tanHonTime: "9h",
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
  vuQuyTime: "11:00",
  vuQuyWeekDays: "Thứ 2",
  vuQuyDate: 26,
  vuQuyMonth: "Tháng 12",
  vuQuyYear: "Năm 2022",
  vuQuyNegativeDate: "04",
  vuQuyNegativeMonth: "Chạp",
  vuQuyNegativeYear: "Nhâm Dần",

  tanHonTime: "11:00",
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
  finalDate: moment('2022-12-26 11:00:00', 'YYYY-MM-DD HH:mm:ss'),
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.676482773882!2d109.24225059999999!3d12.928502699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fe6e41cad2e81%3A0x7a62b9cf8c2d1020!2zQ2FuaCBUaW5oLCBIb8OgIFRo4buLbmgsIFTDonkgSMOyYSwgUGjDuiBZw6pu!5e0!3m2!1svi!2s!4v1667831518241!5m2!1svi!2s",
}
export const TanHonData = {
  introduce: {...TanHonIntroduceData},
  familyInfo: {...FamilyInfoData},
  partyInfo: {...PartyInfoData},
  timeStamp: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  finalDate: moment('2023-01-01 11:00:00', 'YYYY-MM-DD HH:mm:ss'),
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7608611819373!2d107.50461159999999!3d11.1311798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317443df4ea04ec5%3A0xfc0134e4a30b945f!2zTmjDoCBD4bunYSBIb8OgaSBOaMOibg!5e0!3m2!1svi!2s!4v1667832037520!5m2!1svi!2s",
}
