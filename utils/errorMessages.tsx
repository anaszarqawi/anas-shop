export const getErrorMsg = (error: string) => {
  console.log({ error });

  if (error == 'Invalid email') return 'Invalid email';
  if (error === 'String must contain at least 8 character(s)') return 'Password must be at least 8 characters';
};
