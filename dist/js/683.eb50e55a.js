(self["webpackChunkwork_project"]=self["webpackChunkwork_project"]||[]).push([[683,918,439],{7045:function(s,e,t){var i=t(6339),a=t(3070);s.exports=function(s,e,t){return t.get&&i(t.get,e,{getter:!0}),t.set&&i(t.set,e,{setter:!0}),a.f(s,e,t)}},2062:function(s,e,t){"use strict";var i=t(9781),a=t(1702),r=t(7045),o=URLSearchParams.prototype,n=a(o.forEach);i&&!("size"in o)&&r(o,"size",{get:function(){var s=0;return n(this,(function(){s++})),s},configurable:!0,enumerable:!0})},4918:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var i=t(6252),a=t(9963),r=t(3577);const o=s=>((0,i.dD)("data-v-394c7879"),s=s(),(0,i.Cn)(),s),n=o((()=>(0,i._)("label",{for:"first-name"},"Имя",-1))),l=o((()=>(0,i._)("label",{for:"last-name"},"Фамилия",-1))),d=o((()=>(0,i._)("label",{for:"email"},"Email",-1))),c=["disabled"],u=o((()=>(0,i._)("label",{for:"password"},"Пароль",-1))),p=["disabled"],g=o((()=>(0,i._)("label",{for:"confirm-password"},"Повторите пароль",-1))),_={class:"resultString"},m={key:0},w={key:3,class:"spinner-border",style:{"margin-bottom":"10px"},role:"status"},h=o((()=>(0,i._)("span",{class:"sr-only"},null,-1))),f=[h],v=["disabled"],b={class:"signup-link"};function k(s,e,t,o,h,k){const y=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("form",{class:"login-form",onSubmit:e[9]||(e[9]=(0,a.iM)((s=>k.login()),["prevent"]))},[(0,i._)("h2",null,(0,r.zw)(h.isLoginMode?"Авторизация":"Регистрация"),1),h.isLoginMode?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,r.C_)(["form-group",{active_label_style:h.firstName}])},[n,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>h.firstName=s),type:"text",class:"form-control",id:"first-name",name:"first-name",required:""},null,512),[[a.nr,h.firstName]])],2)),h.isLoginMode?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,r.C_)(["form-group",{active_label_style:h.lastName}])},[l,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>h.lastName=s),type:"text",class:"form-control",id:"last-name",name:"last-name",required:""},null,512),[[a.nr,h.lastName]])],2)),(0,i._)("div",{class:(0,r.C_)(["form-group",{active_label_style:h.email}])},[d,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>h.email=s),type:"email",placeholder:" ",class:"form-control",id:"email",name:"email",disabled:h.isRequest,required:""},null,8,c),[[a.nr,h.email]])],2),(0,i._)("div",{class:(0,r.C_)(["form-group pass",{active_label_style:h.password}]),ref:"validation_result"},[u,(0,i.wy)((0,i._)("input",{onKeyup:e[3]||(e[3]=s=>k.validate()),"onUpdate:modelValue":e[4]||(e[4]=s=>h.password=s),type:"password",class:"form-control",ref:"password",id:"password",name:"password",disabled:h.isRequest,required:""},null,40,p),[[a.nr,h.password]]),(0,i._)("div",{ref:"password_control",onClick:e[5]||(e[5]=s=>k.viewPassword()),class:"password-control"},null,512),(0,i._)("p",null,(0,r.zw)(h.passwordTips),1)],2),h.isLoginMode?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:2,class:(0,r.C_)(["form-group",{active_label_style:h.password_confirmation}])},[g,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>h.password_confirmation=s),type:"password",class:"form-control",ref:"password_confirm",id:"confirm-password",name:"confirm-password",required:""},null,512),[[a.nr,h.password_confirmation]])],2)),(0,i._)("div",_,[h.isActiveResultString?((0,i.wg)(),(0,i.iD)("p",m,(0,r.zw)(h.resultString),1)):(0,i.kq)("",!0)]),h.loading?((0,i.wg)(),(0,i.iD)("div",w,f)):(0,i.kq)("",!0),(0,i._)("button",{type:"submit",class:"main_button login_button",disabled:h.isRequest},(0,r.zw)(h.isLoginMode?"Войти":"Зарегистрироваться"),9,v),h.sendEmailAgain?((0,i.wg)(),(0,i.iD)("button",{key:4,onClick:e[7]||(e[7]=s=>k.sendEmailConfirmLink()),class:"main_button login_button",style:{"margin-top":"5px"}}," Отправить ссылку на подтверждение повторно ")):(0,i.kq)("",!0),h.isLoginMode?((0,i.wg)(),(0,i.j4)(y,{key:5,class:"forgot-password",to:"/forgotPassword",exact:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Забыли пароль?")])),_:1})):(0,i.kq)("",!0),(0,i._)("div",b,[(0,i.Uk)((0,r.zw)(h.isLoginMode?"Нет аккаунта?":"Уже есть аккаунт?")+" ",1),(0,i._)("a",{class:"",onClick:e[8]||(e[8]=s=>k.changeMode()),exact:""},(0,r.zw)(h.isLoginMode?"Зарегистрируйтесь":"Войти"),1)])],32)}var y=t(576),L={data(){return{isLoginMode:!0,firstName:"",lastName:"",email:"",password:"",password_confirmation:"",resultString:"",isActiveResultString:!0,viewInput:!0,sendEmailAgain:!1,loading:!1,isRequest:!1,isValidPassword:!1,passwordTips:""}},methods:{changeMode(){this.isLoginMode=!this.isLoginMode,this.passwordTips="",this.resultString="",this.email="",this.password="",this.firstName="",this.lastName="",this.password_confirmation=""},login(){if(this.isLoginMode){if(this.resultString="",this.loading=!0,this.isRequest=!0,""===this.email||""===this.password)return this.loading=!1,this.isRequest=!1,this.resultString="Заполните все поля",void(this.isActive=!0);y.Z.dispatch("loginUser",{email:this.email,password:this.password}).then((()=>{this.isRequest=!1,this.resultString=y.Z.getters.getLoginResultMessage,this.loading=!1,"not confirmed"===y.Z.getters.getLoginStatus&&(this.sendEmailAgain=!0,this.viewInput=!1),y.Z.dispatch("getUserByEmailAction")}))}else{if(!this.isValidPassword)return;this.loading=!0,y.Z.dispatch("registerUser",{firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password,password_confirmation:this.password_confirmation}).then((()=>{this.loading=!1,this.isActive=!0,this.resultString=y.Z.getters.getRegResultString})).catch((()=>{console.log("Ошибка")}))}},sendEmailConfirmLink(){y.Z.dispatch("sendEmailConfirmLink",{email:this.email}).then((()=>{this.resultString=y.Z.getters.getLoginResultMessage}))},validate(){if(!this.isLoginMode){if(this.$refs.validation_result.classList.remove("valid_pass"),this.isValidPassword=!1,0===this.password.length)return void(this.passwordTips="");let s=/^.{8,}$/;if(!s.test(this.password))return void(this.passwordTips="Пароль меньше 8 символов");let e=/^(?=.*?[A-Z]).{8,}$/;if(!e.test(this.password))return void(this.passwordTips="Пароль не содержит заглавных букв");let t=/^(?=.*?[a-z]).{8,}$/;if(!t.test(this.password))return void(this.passwordTips="Пароль не содержит строчных букв");let i=/^(?=.*?[0-9]).{8,}$/;if(!i.test(this.password))return void(this.passwordTips="Пароль не содержит цифр");this.$refs.validation_result.classList.add("valid_pass"),this.passwordTips="Пароль надежный",this.isValidPassword=!0}},viewPassword(){"password"==this.$refs.password.getAttribute("type")?(this.$refs.password_control.classList.add("view"),this.$refs.password.setAttribute("type","text"),this.$refs.password_confirm.setAttribute("type","text")):(this.$refs.password_control.classList.remove("view"),this.$refs.password.setAttribute("type","password"),this.$refs.password_confirm.setAttribute("type","password"))}}},D=t(3744);const C=(0,D.Z)(L,[["render",k],["__scopeId","data-v-394c7879"]]);var x=C},8439:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var i=t(6252);const a=s=>((0,i.dD)("data-v-fcc9b682"),s=s(),(0,i.Cn)(),s),r={class:"download_back"},o={class:"description_header_wrapper"},n=a((()=>(0,i._)("div",{class:"description_header_background"},null,-1))),l={class:"container description_header_text"},d=a((()=>(0,i._)("div",null,null,-1))),c={class:"desc top_desc"},u=a((()=>(0,i._)("h1",{class:""},"Лаунчер для автоматизированной обучающей системы для подготовки специалистов ",-1))),p=a((()=>(0,i._)("p",{class:""},"Компания ООО «ЭСВО» обладает наработками, которые позволили создать обширный технический задел в области создания учебных компьютерных классов (УКК) для различных направлений деятельности, эксплуатируемые в государственных и гражданских структурах. Специалистами предприятия разработано приложение (лаунчер), позволяющее устанавливать демонстрационные версии УКК нового поколения, прямо к себе на персональный компьютер, в ознакомительных целях. Начать свое знакомство с нашими системами можно уже сейчас!",-1))),g={class:"button_download_group"},_={class:"row justify-content-center"},m={class:"col-lg-6 col-md-6"},w={class:"row"},h={class:"col-lg-6 col-sm-6 col-6"},f=a((()=>(0,i._)("span",null,"Скачать",-1))),v={key:0,class:"download-logo"},b={key:1,class:"launcher_loader"},k={class:"col-lg-6 col-sm-6 col-6"},y={class:"scroll_block"},L=a((()=>(0,i._)("span",null,"Узнать подробнее",-1))),D=a((()=>(0,i._)("div",{class:"scroll-svg"},null,-1))),C=[D],x={ref:"slider",class:"dowload_wrapper"},A=a((()=>(0,i._)("div",{class:"container desc"},[(0,i._)("p",{class:""},"Компания ООО «ЭСВО» обладает наработками, которые позволили создать обширный технический задел в области создания учебных компьютерных классов (УКК) для различных направлений деятельности, эксплуатируемые в государственных и гражданских структурах. Специалистами предприятия разработано приложение (лаунчер), позволяющее устанавливать демонстрационные версии УКК нового поколения, прямо к себе на персональный компьютер, в ознакомительных целях. Начать свое знакомство с нашими системами можно уже сейчас!")],-1)));function S(s,e,t,a,D,S){const q=(0,i.up)("SliderDownLoadPage");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",o,[n,(0,i._)("div",l,[d,(0,i._)("div",c,[u,p,(0,i._)("div",g,[(0,i._)("div",_,[(0,i._)("div",m,[(0,i._)("div",w,[(0,i._)("div",h,[(0,i._)("div",{onClick:e[0]||(e[0]=s=>S.downloadLauncher()),class:"main_button load_launcher_button justify-content-center"},[f,D.launcher_downloading?((0,i.wg)(),(0,i.iD)("span",b)):((0,i.wg)(),(0,i.iD)("div",v))])]),(0,i._)("div",k,[(0,i._)("div",{onClick:e[1]||(e[1]=s=>S.openPDF()),class:"instruction"}," Инструкция ")])])])])])]),(0,i._)("div",y,[L,(0,i._)("div",{onClick:e[2]||(e[2]=s=>S.scrollDown()),class:"scroll_down"},C)])])]),(0,i._)("div",x,[(0,i.Wm)(q,{class:"slider_component"})],512),A])}t(2062);var q=t(86),P=t.n(q),M=t(576),R=t(3577);const I={class:"container slider_wrapper"},U={ref:"carousel_wrapper",class:"carousel-wrapper"},Z=["src"],N={class:"tumb_group"},$=["onClick"],j=["src"];function E(s,e,t,a,r,o){return(0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("div",U,[(0,i._)("div",{onClick:e[0]||(e[0]=s=>o.previous()),class:"left"}),(0,i._)("div",{class:"image_center",onClick:e[1]||(e[1]=s=>o.large_image())}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.images,((s,e)=>((0,i.wg)(),(0,i.iD)("img",{class:(0,R.C_)(["slider_image slide",{active_image:o.isActive(e)}]),key:s,src:s.src,alt:""},null,10,Z)))),128)),(0,i._)("div",{onClick:e[2]||(e[2]=s=>o.next()),class:"right"})],512),(0,i._)("div",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.images,((s,e)=>((0,i.wg)(),(0,i.iD)("div",{onClick:s=>o.setActive(e),key:s,class:(0,R.C_)(["tumb",{active_tumb:o.isActive(e)}])},[(0,i._)("img",{src:s.src,alt:""},null,8,j)],10,$)))),128))])])}var V={data(){return{images:[{name:"img1",src:t(7568)},{name:"img2",src:t(777)},{name:"img3",src:t(485)},{name:"img4",src:t(8513)}],currentIndex:0}},methods:{isActive(s){return s===this.currentIndex},setActive(s){this.currentIndex=s},next(){this.currentIndex<this.images.length-1?this.currentIndex+=1:this.currentIndex=0},previous(){this.currentIndex>0?this.currentIndex-=1:this.currentIndex=this.images.length-1},large_image(){}}},T=t(3744);const z=(0,T.Z)(V,[["render",E]]);var H=z,K={data(){return{loadPage:!1,images:[{src:t(7568)},{src:t(777)},{src:t(485)},{src:t(8513)}],launcher_downloading:!1}},methods:{async downloadLauncher(){this.launcher_downloading=!0;const s=await fetch(P().SERVER_HOST+"/launcher/downloadLauncher");if(200===s.status){const e=await s.blob(),t=window.URL.createObjectURL(e),i=document.createElement("a");return i.href=t,i.download="setup.exe",document.body.appendChild(i),i.click(),i.remove(),void(this.launcher_downloading=!1)}400===s.status&&alert("Не удалось найти файл"),this.launcher_downloading=!1},scrollDown(){this.$refs.slider.scrollIntoView({behavior:"smooth"})},openPDF(){window.open("./gui.pdf","_blank")}},mounted(){M.Z.dispatch("setLinkListAction",[])},components:{SliderDownLoadPage:H}};const Y=(0,T.Z)(K,[["render",S],["__scopeId","data-v-fcc9b682"]]);var B=Y},6683:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var i=t(6252);const a=s=>((0,i.dD)("data-v-ccd71d82"),s=s(),(0,i.Cn)(),s),r={key:0,class:"scroll-bg"},o={class:"main_page"},n={key:0,class:"preloader"},l=a((()=>(0,i._)("div",{class:"preloader__row"},[(0,i._)("div",{class:"preloader__item"}),(0,i._)("div",{class:"preloader__item"})],-1))),d=[l],c={key:2,class:"auth_page"},u={class:"container auth_page_content"},p={class:"row"},g=a((()=>(0,i._)("div",{class:"col-lg-6 auth-page-text"},[(0,i._)("p",null,[(0,i.Uk)("Для скачивания загрузчика демонстрационных проектов авторизуйтесь или зарегистрируйте новую учетную запись. Подробно рассмотреть процесс загрузки можно в "),(0,i._)("a",{href:"./gui.pdf",target:"_blank"},"инструкции")])],-1))),_={class:"col-lg-6"};function m(s,e,t,a,l,m){const w=(0,i.up)("DownloadProjectsPage"),h=(0,i.up)("UserAuth");return(0,i.wg)(),(0,i.iD)(i.HY,null,[m.isAuth?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",r)),(0,i._)("div",o,[l.loadPage?((0,i.wg)(),(0,i.iD)("div",n,d)):(0,i.kq)("",!0),m.isAuth?((0,i.wg)(),(0,i.j4)(w,{key:1})):((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",u,[(0,i._)("div",p,[g,(0,i._)("div",_,[(0,i.Wm)(h,{class:"user_auth"})])])])]))])],64)}var w=t(576),h=t(8439),f=t(4918),v={data(){return{loadPage:!1,loginStatus:!1}},beforeCreate(){try{this.loginStatus=localStorage.getItem("login_status")}catch{this.loginStatus=!1}},computed:{isAuth(){return w.Z.getters.getAuthBool}},components:{DownloadProjectsPage:h["default"],UserAuth:f["default"]}},b=t(3744);const k=(0,b.Z)(v,[["render",m],["__scopeId","data-v-ccd71d82"]]);var y=k},7568:function(s,e,t){"use strict";s.exports=t.p+"img/projects1.a555048c.png"},777:function(s,e,t){"use strict";s.exports=t.p+"img/projects2.939e9499.png"},485:function(s,e,t){"use strict";s.exports=t.p+"img/projects3.b9a6afbf.png"},8513:function(s,e,t){"use strict";s.exports=t.p+"img/projects4.df41a226.png"}}]);
//# sourceMappingURL=683.eb50e55a.js.map