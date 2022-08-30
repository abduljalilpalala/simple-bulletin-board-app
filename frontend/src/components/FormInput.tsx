import { TextField } from '@mui/material'
import { FieldError } from 'react-hook-form'

type Props = {
  label: string
  errors: FieldError | undefined
  register: any
  disabled?: boolean
  [inputProps: string]: any
}

const FormInput: React.FC<Props> = ({
  label,
  errors,
  register,
  disabled,
  ...inputProps
}) => {
  return (
    <TextField
      label={label}
      error={!!errors}
      disabled={disabled}
      helperText={errors ? errors.message : null}
      {...register}
      {...inputProps}
    />
  )
}

export default FormInput
