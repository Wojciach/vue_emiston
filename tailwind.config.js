/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          emilogo: ['emilogo', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        }
      },
      letterSpacing: {
        w: '0.3em',
        w2: '0.4em',
        m: '0.1em',
        m2: '0.2em',
      }
    },
    plugins: [],
  }