import type { NextPage } from 'next'
import * as Yup from 'yup'

import { Agreement, agreementSchema } from '@/components/Agreement'
import { Favorite, favoriteSchema } from '@/components/Favorite'
import { Form } from '@/components/Form'
import { Head } from '@/components/Head'
import { UserName, userNameSchema } from '@/components/UserName'
import { UserTel, userTelSchema } from '@/components/UserTel'

const schema = Yup.object({
  ...userNameSchema,
  ...userTelSchema,
  ...favoriteSchema,
  ...agreementSchema,
})

export type FormSchemaType = Yup.InferType<typeof schema>

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <div>
        <main>
          <Form<FormSchemaType> schema={schema}>
            <UserName />
            <UserTel />
            <Favorite />
            <Agreement />
            <div>
              <input type="submit" />
            </div>
          </Form>
        </main>
      </div>
    </>
  )
}

export default Home
