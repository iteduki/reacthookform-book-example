import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import type { DefaultValues, FieldValues } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import type * as Yup from 'yup'

interface FormProps<T> {
  schema: Yup.AnyObjectSchema
  defaultValues?: DefaultValues<T>
  children?: React.ReactNode
}

export const Form = <T extends FieldValues = never>({
  schema,
  children,
  defaultValues,
}: FormProps<T>): ReturnType<React.FC> => {
  const methods = useForm<T>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  })
  return (
    <FormProvider {...methods}>
      <InnerForm>{children}</InnerForm>
    </FormProvider>
  )
}

const InnerForm: React.FC = ({ children }) => {
  const { handleSubmit } = useFormContext()
  const [result, setResult] = useState('')
  const submit = handleSubmit((e) => {
    setResult(JSON.stringify(e))
  })
  return (
    <>
      <form method="post" onSubmit={submit}>
        {children}
      </form>
      <textarea readOnly value={result} />
    </>
  )
}
