// Function validating email
// 1. email is not empty, 2. email is valid format
export function validateEmail(email: string): string | boolean {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.trim().length === 0) return 'Please provide an email';
  else if (email.length > 0 && !emailRegex.test(email.toLocaleLowerCase()))
    return 'Please provide a valid email address';
  else return false;
}

// Function to validate password
// 1. password is not empty, 2. password must be > 7 chars long, 1 UC letter, 1 LC letter, 1 num
export function validatePassword(password: string): string | boolean {
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (password.trim().length === 0) return 'Please provide a password';
  else if (password.length > 0 && !passwordRegex.test(password))
    return 'Password: 8 characters, 1 upercase letter, 1 lowercase letter, 1 number, & 1 special character';
  else return false;
}
