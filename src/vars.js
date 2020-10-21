export const status = ["All", "RUN OUT", "HAVE"];

export const fixDate = (date) => {
  return new Date(date).toUTCString();
};

export const colorsPriority = ["", "red", "orange", "fuchsia", "purple", "blue"];
const nav = {
  home: "/",
  edit: "/edit",
};
export default nav;
