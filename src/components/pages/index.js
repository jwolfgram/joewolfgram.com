/**
 * Created by joewolfgram on 3/9/17.
 */
import Landing from './Landing';
import ProjectRedirect from './ProjectRedirect';
import OauthDemo from './OauthDemo';
import EinsProject from './EinsProject';
import SuccessProject from './SuccessProject';

const pages = {
  "Home": {
    href: "/",
    navbarItem: true,
    component: Landing
  },
  "Oauth Example": {
    href: "/oauthPage",
    navbarItem: true,
    component: OauthDemo
  },
  "Success Project": {
    href: "/success",
    navbarItem: true,
    component: SuccessProject
  },
  "Eins Project": {
    href: "/eins",
    navbarItem: true,
    component: EinsProject
  }
};

export default pages;
