export function validateEmail(email: string): string | void {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.trim().length === 0) return 'Please provide an email';
  if (email.length > 0 && !emailRegex.test(email.toLocaleLowerCase()))
    return 'Please provide a valid email address';
  return;
}

export function validatePassword(password: string): string | void {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (password.trim().length === 0) return 'Please provide a password';
  if (password.length > 0 && !passwordRegex.test(password.toLocaleLowerCase()))
    return 'Password must include 8 characters, one upercase letter, one lowercase letter, and one number';
  return;
}
