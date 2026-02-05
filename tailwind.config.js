
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: { type
      colors: {
        homebiro: {
          primary: '#000000', 
          accent: '#2ecc71',  
          muted: '#f4f4f4',   
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}