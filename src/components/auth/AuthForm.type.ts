import { LoginForm, RegisterForm } from '@/modules/auth';

export interface LoginInputs {
  username: string,
  password: string,
}

export interface RegisterInputs extends LoginInputs {
  passwordConfirm: string,
}

export interface AuthFormProps {
  type: string,
  form: RegisterForm | LoginForm,
  onSubmit: (data: LoginInputs & RegisterInputs) => void,
}
