module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundImage: theme => ({
        'star-pattern': "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')"
       }),

       backgroundSize: {
        "50%" : "100%"
       },
       backgroundPosition: {
        "center-50%" : " 50%  center",
        "bottom-50%" : " 10%  bottom"
       },

       textColor: theme => theme('colors'),
       textColor: {
         'gray': 'rgba(0,0,0,.56)',
         'icons-gray' : 'rgba(0,0,0,.87)',
         
       },

       backgroundColor: theme => ({
        ...theme('colors'),
        'background-gray': "#f7f7f7",
        "bg-cream" : "#f3f1e7",
        "bg-blue-main": "rgb(212, 233, 226)",
        "green-dark" : "#1e3932",
        "light-blue": "rgba(212,233,226,.33)"
       }),

       fontFamily : { 
        "family-star" : ["SoDoSans","Helvetica Neue","Helvetica","Arial","sans-serif"]
       },
       fontSize: {
        '18': '4.5rem'
       },

       margin: {
        '18': '4.5rem'
        
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
