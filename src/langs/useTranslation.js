import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const useTranslation = (f) => {
  const languageContext = useContext(LanguageContext);
  const t = (text) => {
    if (languageContext.dictionary && languageContext.dictionary[f]) {
      return (
        text
          .split(".")
          .reduce((o, i) => o && o[i], languageContext.dictionary[f]) || text
      );
    } else {
      return text;
    }
  };

  return { t };
};
