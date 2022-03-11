import type { InputHTMLAttributes } from 'react'
import type { FieldValues, Path } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

export interface TextInputProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: Path<T>
}

export const TextInput = <T extends FieldValues = never>({
  name,
  ...props
}: TextInputProps<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext()

  return <input type="text" {...register(name)} {...props} />
}
