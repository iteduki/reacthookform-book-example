import * as Yup from 'yup'

import { ErrorMessage } from '@/components/Form/Input/ErrorMessage'
import { TextInput } from '@/components/Form/Input/TextInput'

export const userNameSchema = {
  last_name: Yup.string().trim().required('姓を入力してください').max(30, '姓は30文字以内で入力してください'),
  first_name: Yup.string().trim().required('名を入力してください').max(30, '名は30文字以内で入力してください'),
}

const yupObject = Yup.object(userNameSchema)
type UserNameFormValues = Yup.InferType<typeof yupObject>

export const UserName: React.VFC = () => {
  return (
    <>
      <div>お名前</div>
      <div>
        <label>姓</label>
      </div>
      <TextInput<UserNameFormValues> name="last_name" />
      <ErrorMessage<UserNameFormValues> name="last_name" />
      <div>
        <label>名</label>
      </div>
      <TextInput<UserNameFormValues> name="first_name" />
      <ErrorMessage<UserNameFormValues> name="first_name" />
    </>
  )
}
