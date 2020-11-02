import React, { FC } from 'react'

import {
  LoaderContainer, LoaderItemOne,
  LoaderItemTwo, LoaderItemThree
} from './Loader.styles'

const Loader: FC = () => {
  return (
    <LoaderContainer>
      <LoaderItemOne />
      <LoaderItemTwo />
      <LoaderItemThree />
    </LoaderContainer>
  )
}

export default Loader
