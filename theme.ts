import {buildLegacyTheme} from 'sanity'

// const = {
//   "#fff":"#fff",
//   "#a1a1a1": "#a1a1a1",
//   "#f17abb": "#f17abba",
//   "#db4437": "#db4437",
//   "#FC6471": "#f4b4400",
//   "#2E5EAA": "#2E5EAA",
// };

export const lineCodeTheme = buildLegacyTheme({
  /*Principais cores do tema*/
  "--black": "#0C1B33",
  "--white": "#fff",

  "--gray": "#153243",
  "--gray-base": "#153243",
  
  "--component-bg": "#EEF0EB",
  "--component-text-color": "#020402",

  /*Cor de botões*/
  "--default-button-color": "#2E5EAA",
  "--default-button-primary-color": "#2E5EAA",
  "--default-button-success-color":"#2E5EAA",
  "--default-button-warning-color": "#FC6471",
  "--default-button-danger-color": "#E94250",

  /*Estado*/
  "--state-info-color": "#f17abb",
  "--state-success-color": "#2E5EAA",
  "--state-warning-color": "#FC6471",
  "--state-danger-color": "#E94250",

  /*Navbar*/
  "--main-navigation-color":"#0C1B33",
  "--main-navigation-color--inverted":"#fff",

  "--focus-color": "#f17abb",
});
