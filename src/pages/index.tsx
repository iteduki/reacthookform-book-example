import type { NextPage } from 'next'
import * as Yup from 'yup'

import { Form } from '@/components/Form'
import { Head } from '@/components/Head'
import { UserName, userNameSchema } from '@/components/UserName'
import { UserTel, userTelSchema } from '@/components/UserTel'

const schema = Yup.object({
  ...userNameSchema,
  ...userTelSchema,
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
