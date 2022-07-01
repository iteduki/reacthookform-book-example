import * as Yup from 'yup'

import { Checkbox } from '../Form/Input/Checkbox'
import { ErrorMessage } from '../Form/Input/ErrorMessage'

export const favoriteSchema = {
  fruit: Yup.array()
    .of(Yup.string().required())
    .required('好きな果物を1つ以上選んでください')
    .min(1, '好きな果物を1つ以上選んでください')
    .nullable(),
}

const yupObject = Yup.object(favoriteSchema)
type FavoriteFormValues = Yup.InferType<typeof yupObject>

const fruits = ['orange', 'banana', 'apple']

export const Favorite: React.VFC = () => {
  return (
    <>
      <h3>好きな果物</h3>
      {fruits.map((fruit, index) => {
        return (
          <label key={index}>
            <Checkbox<FavoriteFormValues> name="fruit" value={fruit} />
            {fruit}
          </label>
        )
      })}
      <ErrorMessage<FavoriteFormValues> name="fruit" />
    </>
  )
}
