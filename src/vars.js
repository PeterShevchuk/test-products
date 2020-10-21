export const status = ["All", "RUN OUT", "HAVE"];

export const fixDate = (date) => {
  return new Date(date).toUTCString();
};
const nav = {
  home: "/",
  edit: "/edit",
};
export default nav;
