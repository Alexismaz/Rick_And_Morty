
export const validator = (userdata) => {
    const errors = {}
    if(!userdata.email) {
        errors.email = "El email esta vacio"
    } else if(!validateEmail(userdata.email)) {
        errors.email = "El email no es valido"
    } else if(userdata.email.length > 35) {
        errors.email = "El email no puede contener mas de 35 caracteres"
    }
    if(!userdata.password) {
        errors.password = "El password esta vacio"
    } else if(!validatePass(userdata.password)) {
        errors.password = "El password no es valido"
    } else if(userdata.password.length < 6 || userdata.password.length > 10) {
        errors.password = "El password debe tener entre 6 y 10 caracteres"
    }
    return errors
} 
    
const validateEmail = (email) => {
    const emailValidator = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    return emailValidator.test(email);
}
const validatePass = (password) => {
    const passValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/
    return passValidator.test(password)
}