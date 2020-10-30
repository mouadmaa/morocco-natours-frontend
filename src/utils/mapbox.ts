import mapboxgl from 'mapbox-gl'

import { Location } from '../models/tourModel'

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN!

const displayMap = (element: HTMLDivElement, locations: Location[]) => {

  const map = new mapboxgl.Map({
    container: element,
    style: 'mapbox://styles/mouadmaa/ckd0kt7x90asx1io6xdykaani', // stylesheet location
    // center: [-74.5, 40], // starting position [lng, lat]
    // zoom: 9 // starting zoom
    scrollZoom: false, // Change zoom level
    // interactive: false
  })

  const bounds = new mapboxgl.LngLatBounds()

  locations.forEach(location => {
    // Create marker
    const element = document.createElement('div')
    element.className = 'marker'

    // Add marker
    new mapboxgl.Marker({
      element,
      anchor: 'bottom'
    }).setLngLat(location.coordinates)
      .addTo(map)

    // Add popup
    new mapboxgl.Popup({ offset: 34 })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
      .addTo(map)

    // Extend map bounds to include current location
    bounds.extend(location.coordinates)
  })

  map.fitBounds(bounds, {
    padding: {
      top: 250,
      bottom: 200,
      left: 100,
      right: 100
    }
  })
}

export default displayMap
