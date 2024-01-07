module.exports = {
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx',],
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {
            fontSize:{
                DEFAULT: '12px'
            },
            textColor: {
                DEFAULT: '#dfe1e5', // Define a cor padrão do texto para branco
            },

            backgroundColor: {
                DEFAULT: '#2b2d30',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
