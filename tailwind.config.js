/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "**/**.{js,jsx}"
  ],
  theme: {
    extend: {
      margin:{
        "-100": "-100px"
      },
      height:{
        "1": "1px"
      },
      maxHeight:{
        "400": "400px"
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'body': ['"Open Sans"']
      }
    },
  },
}
