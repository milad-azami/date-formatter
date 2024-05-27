const monthList = [
  "فروردين",
  "ارديبهشت",
  "خرداد",
  "تير",
  "مرداد",
  "شهريور",
  "مهر",
  "آبان",
  "آذر",
  "دي",
  "بهمن",
  "اسفند",
];

// return date in this format 👉 month name / day number
const getJalaliDate = (timeInput) => {
  const localeDate = timeInput.toLocaleDateString("fa-IR");
  const splitedDate = localeDate.split("/");
  const month = splitedDate[1];
  const monthName = monthList[month - 1];
  const day = splitedDate[2];
  const localeTime = timeInput.toLocaleTimeString("fa-IR");
  const splitedTime = localeTime.split(":");
  const time = `${splitedTime[0]}:${splitedTime[1]}`;

  return `${day} ${monthName} ${time}`;
};

// return spent time
const calculateSpentTime = (timeInput) => {
  const currentTime = Date.now();
  const messageTime = new Date(timeInput);

  const timeDiff = currentTime - messageTime.getTime();

  if (timeDiff < 60 * 1000) {
    return "چند لحظه پیش";
  }
  if (timeDiff < 60 * 2 * 1000) {
    return "۱ دقیقه پیش";
  }
  if (timeDiff < 60 * 60 * 1000) {
    return Math.floor(timeDiff / (1000 * 60)).toFixed() + " " + "دقیقه پیش";
  }
  if (timeDiff < 2 * 60 * 60 * 1000) {
    return "۱ ساعت پیش";
  }
  if (timeDiff < 24 * 60 * 60 * 1000) {
    return Math.floor(timeDiff / (1000 * 60 * 60)).toFixed() + " " + "ساعت پیش";
  }

  return getJalaliDate(messageTime);
};
