if you want to use custom theme, u must

1. import theme.js from theme folder
2. import ThemeProvider from '@mui/material';
3. wrap your component in <ThemeProvider theme={theme}> <ThemeProvider/>
4. you can see other default properties at https://mui.com/customization/default-theme/
5. if you want to add default properties to mui components, u can add components object in theme.js
