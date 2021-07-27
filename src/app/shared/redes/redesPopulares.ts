import { RedSocialImpl } from '../model/red-social-impl';

export const redesPopulares: any = {
  facebook: new RedSocialImpl('facebook', 'fa fa-facebook'),
  twitter: new RedSocialImpl('twitter', 'fa fa-twitter'),
  blogger: new RedSocialImpl('Blogger', 'fab fa-blogger-b'),
  instagram: new RedSocialImpl('Instagram', 'fa fa-instagram'),
  linkedin: new RedSocialImpl('linkedin', 'fa fa-linkedin'),
  youtube: new RedSocialImpl('YouTube', 'fa fa-youtube'),
  snapchat: new RedSocialImpl('Snapchat', 'fab fa-snapchat-ghost'),
  twitch: new RedSocialImpl('twitch', 'fab fa-twitch'),
  rss: new RedSocialImpl('rss', 'fa fa-rss'),
  github: new RedSocialImpl('github', 'fa fa-github'),
  gitlab: new RedSocialImpl('gitlab', 'fa fa-gitlab'),
  bitbuckect: new RedSocialImpl('bitbuckect', 'fab fa-bitbucket'),
  wordPress: new RedSocialImpl('wordPress', 'fab fa-wordpress'),
  magento: new RedSocialImpl('wordPress', 'fab fa-magento'),
  whatsapp: new RedSocialImpl('whatsapp', 'fa fa-whatsapp'),
  slack: new RedSocialImpl('slack', 'fab fa-slack'),
  mail: new RedSocialImpl('mail', 'far fa-envelope')
};
