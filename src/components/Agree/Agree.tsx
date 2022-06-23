import * as Yup from 'yup'

import { Checkbox } from '@/components/Form/Input/Checkbox'
import { ErrorMessage } from '@/components/Form/Input/ErrorMessage'

export const agreeSchema = {
  agreement: Yup.boolean()
    .required('同意は必須です')
    .test((value) => {
      return !!value
    }),
}

const yupObject = Yup.object({ customer: Yup.object(agreeSchema) })
type AgreeFormValues = Yup.InferType<typeof yupObject>

export const Agree: React.VFC = () => {
  return (
    <>
      <div>規約への同意</div>
      <Checkbox<AgreeFormValues> name="customer.agreement" title="同意する" />
      <ErrorMessage<AgreeFormValues> name="customer.agreement" />
    </>
  )
}
