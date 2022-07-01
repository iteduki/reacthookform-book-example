import type { InputHTMLAttributes } from 'react'
import type { FieldValues, Path } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

type CheckboxProps<T> = {
  name: Path<T>
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = <T extends FieldValues = never>({ name, ...props }: CheckboxProps<T>): ReturnType<React.FC> => {
  const { register } = useFormContext()

  return <input type="checkbox" {...register(name)} {...props} />
}
