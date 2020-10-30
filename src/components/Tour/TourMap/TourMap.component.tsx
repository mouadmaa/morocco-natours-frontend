import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { SectionMapContainer, Map } from './TourMap.styles'
import { Location } from '../../../models/tourModel'
import displayMap from '../../../utils/mapbox'

interface TourMap {
  locations: Location[]
}

const TourMap: React.FC<TourMap> = props => {
  const { locations } = props

  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      displayMap(mapRef.current, locations)
    }
  }, [locations])

  const data = useStaticQuery(query)

  return (
    <SectionMapContainer
      image={data.file.publicURL}
    >
      <Map ref={mapRef} />
    </SectionMapContainer>
  )
}

export default TourMap

const query = graphql`
  {
    file(relativePath: {eq: "pin.png"}) {
      publicURL
    }
  }
`
