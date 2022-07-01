import * as Yup from 'yup'

import { ErrorMessage } from '@/components/Form/Input/ErrorMessage'
import { TextInput } from '@/components/Form/Input/TextInput'

export const userTelSchema = {
  tel: Yup.string()
    .required('電話番号を入力してください')
    .transform((value) => {
      return `${value}`.replace(/-|ー|\s/g, '').replace(/[０-９]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) - 65248)
      })
    })
    .matches(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/, '正しい電話番号を入力し直してください'),
}

const yupObject = Yup.object({ customer: Yup.object(userTelSchema) })
type UserTelFormValues = Yup.InferType<typeof yupObject>

export const UserTel: React.VFC = () => {
  return (
    <>
      <h3>電話番号</h3>
      <TextInput<UserTelFormValues> name="customer.tel" placeholder="例：09012345678" />
      <ErrorMessage<UserTelFormValues> name="customer.tel" />
    </>
  )
}
