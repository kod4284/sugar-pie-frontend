import { LoginForm, RegisterForm } from '@/modules/auth';

export interface AuthFormProps {
  type: string,
  form: RegisterForm | LoginForm,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}
