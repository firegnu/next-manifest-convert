_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Qetd:function(e,t,i){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RNiq:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),r=i.n(n);var a=function(e,t){var i={};return function(e,t){"name"in e?"string"!==typeof e.name&&(t.name="manifest name field type should be string"):t.name="manifest name field is required"}(e,i),function(e,t){"description"in e?"string"!==typeof e.description&&(t.description="manifest description field type should be string"):t.description="manifest description field is required"}(e,i),function(e,t){if("lang"in e){var i=e.lang;"string"!==typeof i?t.lang="manifest lang field type should be string!":/^\w*(-\w*)*$/.test(i)||(t.lang="manifest lang field type should be correct format!")}else t.lang="manifest lang field is required!"}(e,i),function(e,t){"theme_color"in e?"string"!==typeof e.theme_color&&(t.theme_color="manifest theme_color field type should be string"):t.theme_color="manifest theme_color field is required"}(e,i),function(e,t){if("orientation"in e)if("string"!==typeof e.orientation)t.orientation="manifest orientation field type should be string";else{var i=e.orientation;["any","natural","landscape","landscape-primary","landscape-secondary","portrait","portrait-primary","portrait-secondary"].includes(i)||(t.orientation="manifest orientation field value not correct")}else t.orientation="manifest orientation field is required"}(e,i),function(e,t){"start_url"in e?"string"!==typeof e.start_url&&(t.start_url="manifest start_url field type should be string"):t.start_url="manifest start_url field is required"}(e,i),function(e,t){if("icons"in e){var i=e.icons;if(Array.isArray(i)){var n=[];i.forEach((function(e){var t=function(e){var t={};if("src"in e?"string"!==typeof e.src&&(t.src="manifest icons field icon type should be string"):t.src="manifest icons field icon is required","sizes"in e){var i=e.sizes;"string"!==typeof i?t.sizes="manifest icons field size type should be string":/^\s*\d+x\d+(\s+\d+x\d+)*\s*$/.test(i)||(t.sizes="manifest icons field sizes should be correct format!")}else t.sizes="manifest icons field size is required!";return t}(e);Object.keys(t).length>0&&n.push(t)})),n.length>0&&(t.icons=n)}else t.icons="manifest icons field should be Array"}else t.icons="manifest icons field is required"}(e,i),i},s=function(e){var t={};return function(e,t){if("dir"in e)if("string"!==typeof e.dir)t.dir="manifest dir field type should be string";else{var i=e.dir;["rtl","ltr","auto"].includes(i)||(t.dir="manifest dir field value not correct")}else t.dir="manifest dir field is null"}(e,t),function(e,t){"scope"in e?"string"!==typeof e.scope&&(t.scope="manifest scope field type should be string"):t.scope="manifest scope field is null"}(e,t),function(e,t){if("display"in e)if("string"!==typeof e.display)t.display="manifest display field type should be string";else{var i=e.display;["fullscreen","standalone","minimal-ui","browser"].includes(i)||(t.display="manifest display field value not correct")}else t.display="manifest display field is null"}(e,t),function(e,t){"background_color"in e?"string"!==typeof e.background_color&&(t.background_color="manifest background_color field type should be string"):t.background_color="manifest background_color field is null"}(e,t),function(e,t){if("categories"in e){var i=e.categories;if(Array.isArray(i)){var n=[];i.forEach((function(e){"string"!==typeof e&&n.push({category:"manifest categories field category should be String"})})),n.length>0&&(t.categories=n)}else t.categories="manifest categories field should be Array"}else t.categories="manifest categories field is null"}(e,t),t};var o=i("Z4Yb"),l=i.n(o),c=r.a.createElement,d=function(e){return!!/^[\],:{}\s]*$/.test(e.value.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))},f=function(e){if(d(e)){var t=function(e){var t=a(e),i=s(e);return{RequiredFields:Object.keys(t).length>0?t:"Required fields have no error!!!",OptionalFields:Object.keys(i).length>0?i:"Optional fields have no error!!!"}}(JSON.parse(e.value)),i=JSON.stringify(t,void 0,2);document.getElementById("newmanifest").value=i}else document.getElementById("newmanifest").value="Your 2.5 Manifest format is incorrect! Please check and try again\uff01"},u=function(e){if(d(e)){var t=function(e){var t={};["name","short_name","description","theme_color","background_color","orientation"].forEach((function(i){i in e&&(t[i]=e[i],delete e[i])}));var i="";if("default_locale"in e?(i=e.default_locale,t.lang=e.default_locale,delete e.default_locale):(i="en-US",t.lang="en-US"),"locales"in e&&(t.name=e.locales[i].name,t.description=e.locales[i].description,delete e.locales),"launch_path"in e&&(t.start_url=e.launch_path,delete e.launch_path),"icons"in e){var n=e.icons,r=[];Object.keys(n).reduce((function(e,t){var i=n[t].split(".").pop(),r={src:n[t],type:"image/".concat(i),sizes:"".concat(t,"x").concat(t)};return e.push(r),e}),r),t.icons=r,delete e.icons}if(Object.keys(e).length>0){if(t.b2g_features=e,"type"in e){var a=e.type;"certified"!==a&&"priviliged"!==a||(t.b2g_features.core=!0)}t.b2g_features.version="version"in e?e.version:"0.1"}return t}(JSON.parse(e.value)),i=JSON.stringify(t,void 0,2);document.getElementById("newmanifest").value=i}else document.getElementById("newmanifest").value="Your 2.5 Manifest format is incorrect! Please check and try again\uff01"},p=function(e){u(document.getElementById("orimanifest"))},m=function(e){f(document.getElementById("orimanifest"))},g=function(e){var t=document.getElementById("orimanifest");if(d(t)){var i=JSON.stringify(JSON.parse(t.value),void 0,2);t.value=i}else document.getElementById("newmanifest").value="Your 2.5 Manifest format is incorrect! Please check and try again\uff01"};t.default=function(){return c(r.a.Fragment,null,c("div",null,c("h1",{className:l.a.headerTitle},"Convert Manifest from KaiOS2.5.4 to KaiOS3.0")),c("div",{className:l.a.convertcontainer},c("div",{className:l.a.converttextarea},c("div",{className:l.a.prettyWrapper},c("h3",null,"2.5.4 Manifest"),c("div",{className:l.a.buttonPretty,onClick:g},"Pretty")),c("textarea",{className:l.a.convertcontent,id:"orimanifest"})),c("div",{className:l.a.buttonWrapper},c("div",{className:l.a.buttonConvert,onClick:p},"CONVERT"),c("div",{className:l.a.buttonValidate,onClick:m},"VALIDATE")),c("div",{className:l.a.converttextarea},c("h3",null,"3.0 Manifest"),c("textarea",{className:l.a.convertcontent,id:"newmanifest",readOnly:!0}))))}},Z4Yb:function(e,t,i){e.exports={convertcontainer:"utils_convertcontainer__3j7-7",converttextarea:"utils_converttextarea__2cmBp",convertcontent:"utils_convertcontent__1W_pq",buttonConvert:"utils_buttonConvert__2ThEh",buttonValidate:"utils_buttonValidate__2OAw_",buttonWrapper:"utils_buttonWrapper__1j-Y3",headerTitle:"utils_headerTitle__1f_cl",prettyWrapper:"utils_prettyWrapper__1qlAD",buttonPretty:"utils_buttonPretty__iprP6"}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",0,1]]]);