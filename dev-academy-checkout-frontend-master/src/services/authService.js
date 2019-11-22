import Amplify, { Auth } from 'aws-amplify';

const email = 'removido'
const password = 'removido'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'removido',
        userPoolWebClientId: 'removido',
        
    }
}

Amplify.configure(appConfig);

const authenticate = async () => {
    await Auth.signIn(email, password);
    const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
    saveAuthenticationToken(authenticationToken)
}

const saveAuthenticationToken = (authenticationToken) => {
    localStorage.setItem('authenticationToken', authenticationToken)
}

const getAuthenticationToken = () => {
    return localStorage.getItem('authenticationToken')
}

export default {
    authenticate,
    saveAuthenticationToken,
    getAuthenticationToken
}