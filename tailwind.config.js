module.exports = {
  content: [
      './index.html',
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        "Soft-red": "hsl(7, 99%, 70%)",
        "Yuzu": "hsl(51, 100%, 49%)",
        "Dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "Dark-blue": "hsl(198, 62%, 26%)",
        "Dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "Light-cyan": "hsl(167 46% 60%)",
        "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "Dark-grayish-blue": "hsl(232, 10%, 55%)",
        "Grayish-blue": " hsl(210, 4%, 67%)",
        "Skyblue": "#3EBEFF"
      },
      fontFamily: {
        'fraunces': ['Fraunces'],
        'barlow': ['Barlow']
      }
    },
  },
  plugins: [],
}
