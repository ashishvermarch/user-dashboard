export type FormDataTypes = {
  email: string;
  password: string;
};

export type AuthFormProps = {
  onSubmit: (formData: FormDataTypes) => void;
  buttonText?: string;
};

export type UserDetailsTypes = {
  name: string;
  imageUrl: string;
  email: string;
};

export type InputProps = {
  value: string;
  onChange: (e: {
    target: {
        name: string;
        value: string;
    };
}) => void;
  label: string;
  type?: string;
  required?: boolean;
};
