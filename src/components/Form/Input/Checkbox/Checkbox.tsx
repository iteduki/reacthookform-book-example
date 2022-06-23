import type { FieldValues, Path } from 'react-hook-form'
import { Controller, useFormContext } from 'react-hook-form'

type CheckboxProps<T> = {
  name: Path<T>
  title?: string
}

export const Checkbox = <T extends FieldValues = never>({ name, title }: CheckboxProps<T>): ReturnType<React.VFC> => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <label htmlFor={name}>
            <input type="checkbox" onChange={onChange} onBlur={onBlur} value={value} id={name} />
            {title}
          </label>
        )
      }}
    />
  )
}
