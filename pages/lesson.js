import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";


const lesson = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ fontSize: 100, color: "blue" }}
      />

      <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />

      <FontAwesomeIcon
        icon={faAnchor}
        style={{ fontSize: 100, color: "green" }}
      />


    </div>
  )
}

export default lesson