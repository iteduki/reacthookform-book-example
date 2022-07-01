import * as Yup from 'yup'

import { Checkbox } from '@/components/Form/Input/Checkbox'
import { ErrorMessage } from '@/components/Form/Input/ErrorMessage'

export const agreementSchema = {
  agreement: Yup.boolean()
    .required('同意は必須です')
    .test('not agreement', '同意は必須です', (value) => {
      return !!value
    }),
}

const yupObject = Yup.object(agreementSchema)
type AgreementFormValues = Yup.InferType<typeof yupObject>

export const Agreement: React.VFC = () => {
  return (
    <>
      <h3>規約への同意</h3>
      <label>
        <Checkbox<AgreementFormValues> name="agreement" />
        <span>規約に同意します</span>
      </label>
      <ErrorMessage<AgreementFormValues> name="agreement" />
    </>
  )
}
