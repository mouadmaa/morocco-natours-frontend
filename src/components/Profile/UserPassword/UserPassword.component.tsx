import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  UserSettingsFormContainer, FormGroupContainer, FormGroupContainerButton
} from './UserPassword.styles'
import Button from '../../UI/Button/Button.component'
import Heading from '../../UI/Heading/Heading.component'
import Input from '../../UI/Input/Input.component'
import { useAuthContext, UserPasswordInputs } from '../../../hooks/useAuthHook'

const UserPassword: FC = () => {
  const { register, handleSubmit, errors, getValues, reset } = useForm<UserPasswordInputs>()

  const { updatePassword } = useAuthContext()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (userInputs: UserPasswordInputs) => {
    setLoading(true)
    const success = await updatePassword(userInputs)
    if (success) {
      toast.success('Your password has been changed')
      reset()
    }
    setLoading(false)
  }

  return (
    <UserSettingsFormContainer>
      <Heading type='Secondary'>
        Password change
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroupContainer>
          <Input
            type='password'
            name='passwordCurrent'
            label='Current Password'
            placeholder='********'
            error={errors.passwordCurrent}
            register={register({
              required: true,
              minLength: {
                value: 8,
                message: 'Please enter current password.',
              }
            })}
          />
        </FormGroupContainer>

        <FormGroupContainer>
          <Input
            type='password'
            name='passwordNew'
            label='New Password'
            placeholder='********'
            error={errors.passwordNew}
            register={register({
              required: true,
              minLength: {
                value: 8,
                message: 'Please enter a new password, at least 8 characters.',
              }
            })}
          />
        </FormGroupContainer>

        <FormGroupContainer>
          <Input
            type='password'
            name='passwordConfirm'
            label='Confirm Your Password'
            placeholder='********'
            error={errors.passwordConfirm}
            register={register({
              required: true,
              minLength: {
                value: 8,
                message: 'Please confirm your password.',
              },
              validate: value => {
                const isNotSame = value === getValues('passwordNew')
                if (!isNotSame) toast.warning('Passwords are not the same!',
                  { hideProgressBar: true, toastId: 'signup-toast' },
                )
                return isNotSame
              }
            })}
          />
        </FormGroupContainer>

        <FormGroupContainerButton>
          <Button type='buttonSmall'>
            {!loading ? 'Save password' : 'Saving...'}
          </Button>
        </FormGroupContainerButton>
      </form>
    </UserSettingsFormContainer>
  )
}

export default UserPassword
