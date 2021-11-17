import React, { useState } from "react";
import { useTranslation } from "../../langs/useTranslation";
import mapLg from "../../assets/images/map_lg.png";
import mapXl from "../../assets/images/map_xl.png";
import mapMd from "../../assets/images/map_md.png";
import mapSm from "../../assets/images/map_sm.png";
import mapXs from "../../assets/images/map_xs.png";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import RoomIcon from "@mui/icons-material/Room";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import ClickBtn from "../common/ClickBtn";
import { emailValidator } from "../../helpers/validator";

const Contact = (props) => {
  const { t } = useTranslation("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [check, setCheck] = useState(false);

  const emailHandler = (e) => {
    setEmailFormatError(false);
    setEmail(e);
  };

  const submit = () => {
    setCheck(true);
    if (!name) {
      setCheck(true);
      return;
    }
    if (!email) {
      setCheck(true);
      return;
    }
    if (!content) {
      setCheck(true);
      return;
    }
    if (emailValidator().test(email) === false) {
      setEmailFormatError(true);
      return;
    }
    setCheck(false);

  };

  return (
    <div className="contact section">
      <div className="title">
        <div className="title-inner">{t("contact")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <div className="map">
          <img src={mapXl} alt="map" className="map-xl" />
          <img src={mapLg} alt="map" className="map-lg" />
          <img src={mapMd} alt="map" className="map-md" />
          <img src={mapSm} alt="map" className="map-sm" />
          <img src={mapXs} alt="map" className="map-xs" />
        </div>
        <div className="contact-bottom">
          <div className="contact-content">
            <div className="contact-title">{t("contact")}</div>
            <div className="address">
              <div className="icon">
                <RoomIcon />
              </div>
              <div className="name">{t("address")}</div>
              <div className="value">{t("addressValue")}</div>
            </div>
            <div className="phone-email">
              <div className="phone">
                <div className="icon">
                  <PhoneInTalkIcon />
                </div>
                <div className="name">{t("phone")}</div>
                <div className="value">
                  <div>{t("phoneValue1")}</div>
                  <div>{t("phoneValue2")}</div>
                </div>
              </div>
              <div className="email">
                <div className="icon">
                  <EmailIcon />
                </div>
                <div className="name">{t("email")}</div>
                <div className="value">
                  <div>guanweisu@itri.org.tw</div>
                  <div>guanweisu514@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="survey">
            <div className="contact-title">{t("input.title")}</div>
            <div>
              <div className="name-phone">
                <div className="name">
                  <FormControl error={check && !name} variant="standard">
                    <TextField
                      required
                      label={t("input.name")}
                      placeholder={t("input.placeholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {check && !name && (
                      <FormHelperText id="component-error-text">
                        {t("input.noName")}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>
                <div className="phone">
                  <FormControl variant="standard">
                    <TextField
                      label={t("input.phone")}
                      placeholder={t("input.placeholder")}
                      value={phone}
                      type="number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>
              <div className="email">
                <FormControl
                  error={(check && !email) || emailFormatError}
                  variant="standard"
                >
                  <TextField
                    required
                    label={t("input.email")}
                    placeholder={t("input.placeholder")}
                    value={email}
                    onChange={(e) => emailHandler(e.target.value)}
                  />
                  {check && !email && (
                    <FormHelperText id="component-error-text">
                      {t("input.noEmail")}
                    </FormHelperText>
                  )}
                  {emailFormatError && (
                    <FormHelperText id="component-error-text">
                      {t("input.emailErrorFormat")}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="content">
                <FormControl error={check && !content} variant="standard">
                  <TextareaAutosize
                    required
                    minRows={10}
                    value={content}
                    placeholder={t("input.content")}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  {check && !content && (
                    <FormHelperText id="component-error-text">
                      {t("input.noContent")}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="btn">
                <ClickBtn
                  type="primaryBtn"
                  text={t("input.sendMail")}
                  onClick={submit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;