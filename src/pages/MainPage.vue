<template>
    <div v-if="!isAuth" class="scroll-bg"></div>
    <div class="main_page">
        <div v-if="loadPage" class="preloader">
            <div class="preloader__row">
                <div class="preloader__item"></div>
                <div class="preloader__item"></div>
            </div>
        </div>

        <DownloadProjectsPage v-if="isAuth"></DownloadProjectsPage>
        <div v-else class="auth_page">
            <div class="container auth_page_content">
                <div class="row">
                    <div class="col-lg-6 auth-page-text">
                        <p>Для скачивания загрузчика демонстрационных проектов авторизуйтесь или зарегистрируйте новую
                            учетную запись. Подробно рассмотреть процесс загрузки можно в <a href="./gui.pdf"
                                target="_blank">инструкции</a></p>
                    </div>
                    <div class="col-lg-6">
                        <UserAuth class="user_auth"></UserAuth>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store'
import DownloadProjectsPage from './DownloadProjectsPage.vue'
import UserAuth from '@/components/UserAuth.vue'


export default {
    data() {
        return {
            loadPage: false,
            loginStatus: false
        }
    },
    beforeCreate() {
        try {
            this.loginStatus = localStorage.getItem('login_status')
        } catch {
            this.loginStatus = false
        }
    },
    computed: {
        isAuth() {
            return store.getters.getAuthBool
        }
    },
    components: {
        DownloadProjectsPage,
        UserAuth
    }
}
</script>

<style scoped>
.auth_page {
    height: 90vh;
    display: flex;
    flex-direction: column;
}

.auth_page .user_auth {
    margin-top: 60px;
}

.auth-page-text {
    font-family: 'Rostelecom Basic Light', Helvetica, Arial, sans-serif;
    margin-top: 10%;
    text-align: center;
}

.auth-page-text p {
    font-size: 2.1rem;
    color: rgb(255, 255, 255);
    text-align: right;
}

.auth-page-text a {
    color: #007bff;
    text-decoration: none;
    transition: all .1s ease;
    background-color: #dedede;
    padding: .1rem .8rem;
    border-radius: .6rem;

}

.auth-page-text a:hover {
    cursor: pointer;
    color: #0b4c92;
    background-color: #b6b6b6;
}

.auth_page_content {
    margin-top: auto;
    margin-bottom: auto;
}

/* плавающая картинка */
@keyframes scrollBg {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(-100px);
    }

    100% {
        transform: translateX(0px);
    }
}

.scroll-bg {
    height: 110%;
    width: 120%;
    position: fixed;
    top: -10vh;
    z-index: -99;
    background-color: #212529;
    background-image: url('../assets/plane_backgound.jpg');
    background-size: cover;
    animation: scrollBg 40s linear forwards infinite;
    background-repeat: repeat-x;
    background-repeat: repeat-y;
}

/* */
.main-page {
    font-family: 'Rostelecom Basic Light', Helvetica, Arial, sans-serif;
    background-color: #212529;
    background: url("../assets/slider/projects1.png");
    background-attachment: fixed;
    background-repeat: repeat-x;

}

.preloader {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #212529;
    z-index: 1001;
}

.preloader__row {
    position: relative;
    margin: auto;
    top: 45%;
    width: 10%;
    height: 10%;
    text-align: center;
    animation: preloader-rotate 2s infinite linear;
}

.preloader__item {
    position: absolute;
    display: inline-block;
    top: 0;
    background-color: #337ab7;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    animation: preloader-bounce 2s infinite ease-in-out;
}

.preloader__item:last-child {
    top: auto;
    bottom: 0;
    animation-delay: -1s;
}

@keyframes preloader-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes preloader-bounce {

    0%,
    100% {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }
}

.loaded_hiding .preloader {
    transition: 0.3s opacity;
    opacity: 0;
}

.loaded .preloader {
    display: none;
}



.download-projects-button {
    width: 300px;
}

.download-projects-button:hover {
    cursor: pointer;
}

@media only screen and (max-width : 991px) {
    .auth_page {
        height: auto;
    }
}</style>