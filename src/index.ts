import { Config } from "./types";
import {
  sexyContainer,
  sexyHeader,
  sexyText,
  sexyLink,
  sexyCode,
  sexyListItem,
  sexySummary,
  sexyListContainer,
  makeSexyList,
  ejaculate,
} from "./methods";

function SexyMail(this, config: Config): void {
  if (!config) throw new Error("Config is missing");
  Object.assign(this, config);
}

SexyMail.prototype = {
  sexyContainer,
  sexyHeader,
  sexyText,
  sexyLink,
  sexyCode,
  sexyListItem,
  sexySummary,
  sexyListContainer,
  makeSexyList,
  ejaculate,
};

export { SexyMail, Config };
