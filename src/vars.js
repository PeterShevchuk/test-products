import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

export const status = ["ALL", "RUN OUT", "HAVE"];

export const fixDate = (date) => {
  return new Date(date).toUTCString();
};

export const colorsPriority = ["", "red", "orange", "fuchsia", "purple", "blue"];

export const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export const nav = {
  home: "/",
  edit: "/edit",
};
