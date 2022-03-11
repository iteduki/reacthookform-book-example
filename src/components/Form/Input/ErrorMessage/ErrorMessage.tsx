import { ErrorMessage as RHFErrorMessage } from '@hookform/error-message'
import type { FieldValues, Path } from 'react-hook-form'
import { useFormState } from 'react-hook-form'

interface ErrorMessageProps<T> {
  name: Path<T>
}

export const ErrorMessage = <T extends FieldValues = never>({ name }: ErrorMessageProps<T>): ReturnType<React.VFC> => {
  const { errors } = useFormState()
  return (
    <RHFErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => {
        return <p>{message}</p>
      }}
    />
  )
}
