/**
 * Created by joewolfgram on 3/9/17.
 */
 import Landing from './Landing';
 import ProjectRedirect from './ProjectRedirect';

const pages = {
    "Home": {
        href: "/",
        navbarItem: true,
        component: Landing
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
