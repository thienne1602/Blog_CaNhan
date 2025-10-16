const formatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export const formatDate = (isoDate) => {
  try {
    return formatter.format(new Date(isoDate));
  } catch (error) {
    return isoDate;
  }
};
