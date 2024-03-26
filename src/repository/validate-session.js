
class ValidateSession {
    async validateSession(email, password) {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
                   if (password !== '1234') {
                       reject(new Error('Password no coincide!!!'));
                   }
                   resolve({
                       userName: 'Gael',
                       fullName: 'Cristian Val',
                       email: email,
                   });
               }
               , 2000);
        });
    }
}

export default validateSession = new ValidateSession();
