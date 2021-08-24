import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        background-color: var(--white);
    }

    *, button, input{
        border: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root{
        --lightBabyBlue: rgba(4, 191, 191, 0.5);
        --lightDarkBabyBlue: #04BFAD;
        --babyBlue: rgba(3, 127, 140, 0.7);
        --titleGreenBlue: #04BFBF;
        --red: #EB5757;
        --white: #ECFCFC;
        --realWhite: #ffffff;
    }
`;
