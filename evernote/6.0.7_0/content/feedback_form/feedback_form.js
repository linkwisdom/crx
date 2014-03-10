var closeButton,systemInfo,title,details,rating,sInfo=generateSystemInfo();
window.addEventListener("DOMContentLoaded",function(){closeButton=document.querySelector("#close");systemInfo=document.querySelector("#systemInfo");title=document.querySelector("#title");details=document.querySelector("#details");rating=document.querySelector("#rating");GlobalUtils.localize(document.body);systemInfo.innerText+=":\n"+sInfo.browser+"\n"+sInfo.os+"\n"+navigator.language;closeButton.addEventListener("click",closeForm);closeButton.addEventListener("keypress",function(a){13==a.keyCode&&
closeForm()});document.querySelector("#send").addEventListener("click",submit);title.addEventListener("keypress",function(a){13==a.keyCode&&submit()});Browser.sendToExtension({name:"main_getConfig",bootstrapInfo:{name:null},returnName:"feedbackFormConfig"})});function closeForm(){window.parent.postMessage({name:"closeFeedbackForm"},"*")}
function generateSystemInfo(){var a;a=SAFARI?"Safari "+/Version\/(.+?)\s/.exec(navigator.userAgent)[1]:OPERA?"Opera "+/OPR\/(.+?)\s/.exec(navigator.userAgent)[1]+"/"+/Chrome\/(.+?)\s/.exec(navigator.userAgent)[1]:YANDEX?"Yandex "+/YaBrowser\/(.+?)\s/.exec(navigator.userAgent)[1]+"/"+/Chrome\/(.+?)\s/.exec(navigator.userAgent)[1]:"Chrome "+/Chrome\/(.+?)\s/.exec(navigator.userAgent)[1];var b,d=/\((.+?)\)/g,c=d.exec(navigator.userAgent);a:for(;c;){for(var c=c[1].split(/;\s?/),e=0;e<c.length;e++)if(b=
GlobalUtils.parseOperatingSystem(c[e]))break a;c=d.exec(navigator.userAgent)}b||(b="Unknown OS");a||(a="Unknown browser");return{browser:a,os:b}}function msgHandlerConfig(a,b,d){/china/i.test(a.bootstrapInfo.name)&&(document.body.className+=" china")}
function submit(){var a=title.value.trim(),b=details.value.trim();""==a||""==b?alert(Browser.i18n.getMessage("allFieldsRequired")):(Browser.sendToExtension({name:"sendAppFeedback",title:a,details:b,os:sInfo.os,browser:sInfo.browser,rating:parseInt(rating.selectedOptions[0].value)}),closeForm())}Browser.addMessageHandlers({feedbackFormConfig:msgHandlerConfig});