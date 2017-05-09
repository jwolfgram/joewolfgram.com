/**
 * Created by joewolfgram on 3/9/17.
 */
 import Landing from './Landing';
 import ProjectRedirect from './ProjectRedirect';
 import OauthDemo from './OauthDemo';

const pages = {
    "Home": {
        href: "/",
        navbarItem: true,
        component: Landing
    },
    "Oauth Example": {
        href: "/oauthPage",
        navbarItem: false,
        component: OauthDemo
    },
    "Success Project": {
        href: "/success",
        navbarItem: true,
        component: ProjectRedirect
    },
    "Eins Project": {
        href: "/eins",
        navbarItem: true,
        component: ProjectRedirect
    }
};

export default pages;
