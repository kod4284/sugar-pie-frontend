export interface LoginInputs {
  username: string,
  password: string,
}

export interface RegisterInputs extends LoginInputs {
  passwordConfirm: string,
}

export interface AuthFormProps {
  type: string,
  onSubmit: (data: LoginInputs & RegisterInputs) => void,
}
