import React from "react";
// import PropTypes from "prop-types";
import enTranslation from "../locales/en/translation.json";
import afTranslation from "../locales/af/translation.json";
import arTranslation from "../locales/ar/translation.json";
import haTranslation from "../locales/ha/translation.json";
import igTranslation from "../locales/ig/translation.json";
import piTranslation from "../locales/pi/translation.json";
import shTranslation from "../locales/sh/translation.json";
import soTranslation from "../locales/so/translation.json";
import swTranslation from "../locales/sw/translation.json";
import xhTranslation from "../locales/xh/translation.json";
import yoTranslation from "../locales/yo/translation.json";
import zuTranslation from "../locales/zu/translation.json";

// import other language translation files as needed

const LanguageSwitcher = ({ changeLanguage }) => {
const languages = [
{ code: "af", name: "Afrikaans" },
{ code: "ar", name: "العربية" },
{ code: "en", name: "English" },
{ code: "ha", name: "Hausa" },
{ code: "ig", name: "Igbo" },
{ code: "pi", name: "Pigin" },
{ code: "sh", name: "Shona" },
{ code: "so", name: "Somali" },
{ code: "sw", name: "Kiswahili" },
{ code: "xh", name: "Xhosa" },
{ code: "yo", name: "Yoruba" },
{ code: "zu", name: "Zulu" },
];

const handleChange = (event) => {
const languageCode = event.target.value;
changeLanguage(languageCode);
};

const getTranslation = (langCode) => {
switch (langCode) {
case "af":
return afTranslation;
case "ar":
return arTranslation;
case "en":
return enTranslation;
case "ha":
return haTranslation ;
case "ig":
return igTranslation ;
case "pi":
return piTranslation;
case "sh":
return shTranslation;
case "so":
return soTranslation ;
case "sw":
return swTranslation ;
case "xh":
return xhTranslation ;
case "yo":
return yoTranslation;
case "zu":
return zuTranslation;
default:
return enTranslation;
}
};

return (
<div className="language-switcher">
<select onChange={handleChange}>
{languages.map(({ code, name }) => (
<option key={code} value={code}>
{name}
</option>
))}
</select>
<ul>
{Object.entries(getTranslation()).map(([key, value]) => (
<li key={key}>
{key}: {value}

</li>
))}
</ul>
</div>
);
}
export default LanguageSwitcher;