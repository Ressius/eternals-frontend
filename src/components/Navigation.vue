<template>
    <header>
    <nav>
      <div class="branding">
        <a class="logo" href="/" alt="Accueil QCL">
          <img src="../assets/img/eternal-nobg.png" alt="Logo QCL" class="logo" />
        </a>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li class="socials"><a href="https://www.twitch.tv/eternalesportleague"><font-awesome-icon :icon="['fab', 'twitch']" /></a></li>
        <li class="socials"><a href="https://discord.gg/hRSvPaRFDd"><font-awesome-icon :icon="['fab', 'discord']" /></a></li>
        <li class="socials"><a href="https://www.youtube.com/channel/UCTWthJHVP2wc3zD7k2WXerA"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
        <li class="socials"><a href="https://x.com/eternales22"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a></li>
        <li class="socials"><a href="https://www.facebook.com/eternalesport2/"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
        <li><img src="../assets/img/dash.png" /></li>
        <li class="categories"><RouterLink to="/mission" class="link">Mission</RouterLink></li>
        <li class="categories"><RouterLink to="/equipe" class="link">L'équipe</RouterLink></li>
        <li class="categories"><RouterLink to="/hof" class="link">Hall of Fame</RouterLink></li>
      </ul>
      <!--
      <a v-if="store.token === ''" class="login" href="https://discord.com/oauth2/authorize?client_id=1239760825443684444&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fdiscord&scope=identify+connections+guilds+email+openid" >Connexion<font-awesome-icon :icon="['fab', 'discord']" /></a>
      <div v-else></div>
      -->
      <div class="far fa-bars" :class="{'icon-active': mobileNav}"></div>
      <div class="icon">
        <font-awesome-icon @click="toggleMobileNav" v-show="mobile" :icon="['fas', 'bars']" class="far fa-bars" :class="{'icon-active': mobileNav}"></font-awesome-icon>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
        <li><RouterLink to="/mission" class="link">Mission</RouterLink></li>
        <li><RouterLink to="/equipe" class="link">L'équipe</RouterLink></li>
        <li><RouterLink to="/hof" class="link">Hall of Fame</RouterLink></li>
        <div class="socials-container">
          <a href="https://www.twitch.tv/eternalesportleague"><font-awesome-icon :icon="['fab', 'twitch']" /></a>
          <a href="https://discord.gg/hRSvPaRFDd"><font-awesome-icon :icon="['fab', 'discord']" /></a>
          <a href="https://www.youtube.com/channel/UCTWthJHVP2wc3zD7k2WXerA"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
          <a href="https://x.com/eternales22"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
          <a href="https://www.facebook.com/eternalesport2/"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        </div>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
  import { store } from '../store.js'
</script>

<script>

    export default {
        name: "navigation",
        data() {
            return {
                mobile: null,
                mobileNav: null,
                windowWidth: null,
            }
        },
        created() {
          window.addEventListener('resize', this.checkScreen);
          this.checkScreen();
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            checkScreen() {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth < 1140) {
                    this.mobile = true;
                    return
                } else {
                    this.mobile = false;
                    this.mobileNav = false;
                    return;
                }
            }
        },
    }
</script>

<style scoped>

  header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.5s ease all;
    line-height: 1.5;
    width: 100%;
    background-color: #111;
    color: #F69201;
  }

  .branding {
    display: flex;
    align-items: center;
    padding-right: 40px;
    padding-left: 80px;
    @media (max-width: 1000px) {
      padding-left: 20px;
    }
  }

  .login{
      display: flex;
      align-items: center;
      position: absolute;
      top:15px;
      right: 50px;
      padding: 8px 15px;
      border-radius: 25px;
      font-size: 18px;
      background-color: rgba(0, 57, 210, 1);
  }

  .login svg{
    margin-left: 10px;
  }

  .login:hover{
    color: black;
    transition: 0.5s;
    background-color: white;
  }

  .branding .logo {
      transition: 0.5s ease all;
      padding: 0px;
    }

    .branding .logo img{
      height: 50px;
      margin-top: 5px;
    }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  nav 
  {
    position: relative;
    display: flex;
    text-align: left;
    flex-direction: row;
    padding: 20px 0;
    font-size: 18px;
    transition: 0.5s ease all;
    color:white;
    width: 90%;
    height: 80px;

    .categories a{
      font-weight: bolder;
      font-size: 1.8em;
      &:hover {
        color: white;
        transform: scale(1.2);
        transition: 0.5s ease all;
      }
    }

    a{
      &:hover {
        color: #F69201;
        transform: scale(1.2);
        transition: 0.5s ease all;
      }
    }

    .socials{
      padding-right: 2rem;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        color: white;
        transition: 0.5s ease all;
          &:hover {
          color: #F69201;
          transform: scale(1.2);
          transition: 0.5s ease all;
        }
      }
    }

    @media (min-width: 1140px) {
      width: 100%;
      
    }
    

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top:10px;
      right: 0;
      height: 75%;
      color: white;

      svg {
        cursor: pointer;
        height: 50%;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #111;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
        padding-top: 40px;
        text-align: left;
        .link {
          color: #F69201;
        }
      }

      .socials-container {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; /* Add spacing between logos */
        text-align: center;
        padding: 10px 0;
        gap: 10px;
      }

      .socials-container a {
        flex: 1 1 calc(50% - 10px);
        font-size: 35px;
        color: white;
        transition: 0.5s ease all;
      }

      .socials-container a:hover {
        color: #F69201;
        transform: scale(1.2);
      }
  }

  .mobile-nav-enter-active, .mobile-nav-leave-active {
        transition: 0.8s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        opacity: 0;
        transform: translateX(-100%);
    }

    .mobile-nav-enter-to {
        opacity: 1;
        transform: translateX(0);
    }
  }

  nav ul li {
    list-style: none;

    img{
      height: 90px;
      width: 25px;
    }
  }

  .fa-bars{
    color: #F69201;
  }


  nav li {
    padding-right: 4rem;
  }

</style>