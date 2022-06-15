const format = {
  getMonth: (date) => {
    const formatDate = new Date(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = formatDate.getMonth();
    const month = months[monthIndex];
    return month;
  },

  getDay: (date) => {
    const formatDate = new Date(date);
    const day = formatDate.getDate();
    return day;
  },

  today: () => {
    // todays date
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today;
  },

  time: (time) => {
    // format time
    const formatTime = time.slice(0, -3);
    var suffix = time >= 12 ? "PM" : "AM";
    var hours = formatTime + " " + suffix;
    return hours;
  },
};

export default format;
