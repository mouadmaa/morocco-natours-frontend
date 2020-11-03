import React, { FC, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useForm } from 'react-hook-form'

import {
  UserSettingsContainer, UserSettingsFormContainer, UserSettingsLine,
  FormGroupContainer, FormGroupImageContainer, FormGroupImage,
  FormGroupContainerButton, UserImageUpload, UserImageUploadLabel
} from './UserSettings.styles'
import UserPassword from '../UserPassword/UserPassword.component'
import Heading from '../../UI/Heading/Heading.component'
import Button from '../../UI/Button/Button.component'
import Input from '../../UI/Input/Input.component'
import { useAuthContext } from '../../../hooks/useAuthHook'

interface UserInputs {
  name: string
  email: string
}

const UserSettings: FC = () => {
  const data = useStaticQuery(query)

  const { register, setValue, handleSubmit, errors } = useForm<UserInputs>()

  const { user, updateUser } = useAuthContext()

  const [photo, setPhoto] = useState<File>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setValue('name', user.name)
      setValue('email', user.email)
    }
  }, [user])

  const handleImageChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length) {
      setPhoto(event.currentTarget.files[0])
    }
  }

  const onSubmit = async (userInputs: UserInputs) => {
    const formData = new FormData()
    if (user.name !== userInputs.name) formData.append('name', userInputs.name)
    if (user.email !== userInputs.email) formData.append('email', userInputs.email)
    if (photo) formData.append('photo', photo)
    if (!formData.has('name') && !formData.has('email') && !formData.has('photo')) return

    setLoading(true)
    const success = await updateUser(formData)
    if (success) setPhoto(undefined)
    setLoading(false)
  }

  return (
    <UserSettingsContainer>
      <UserSettingsFormContainer>
        <Heading type='Secondary'>
          Your profile settings
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroupContainer>
            <Input
              name='name'
              label='Your Name'
              placeholder='your'
              error={errors.name}
              register={register({
                required: true,
                minLength: {
                  value: 3,
                  message: 'Please tell us your name. at least 8 characters.',
                },
              })}
            />
          </FormGroupContainer>

          <FormGroupContainer>
            <Input
              name='email'
              label='Your Email'
              placeholder='you@exemple.com'
              error={errors.email}
              register={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
          </FormGroupContainer>

          <FormGroupImageContainer>
            <FormGroupImage
              src={photo ? URL.createObjectURL(photo) : user?.photo ?
                user.photo : data.userSvg.publicURL}
              alt='User Photo'
            />
            <UserImageUpload
              type='file'
              id='photo'
              name='photo'
              accept='image/*'
              onChange={handleImageChange}
            />
            <UserImageUploadLabel htmlFor='photo'>
              Choose new photo
            </UserImageUploadLabel>
          </FormGroupImageContainer>

          <FormGroupContainerButton>
            <Button type='buttonSmall'>
              {!loading ? 'Save settings'
                : 'Saving...'}
            </Button>
          </FormGroupContainerButton>
        </form>
      </UserSettingsFormContainer>
      <UserSettingsLine>&nbsp;</UserSettingsLine>
      <UserPassword />
    </UserSettingsContainer>
  )
}

export default UserSettings

const query = graphql`
  {
    userSvg: file(relativePath: {eq: "user.svg"}) {
      publicURL
    }
  }
`
