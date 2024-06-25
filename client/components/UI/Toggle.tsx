import React, { useState } from 'react'

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className="toggle-switch relative h-12 w-24">
      <label className="switch-label block h-full w-full cursor-pointer rounded-full border-4 border-gray-800 bg-gray-800">
        <input
          type="checkbox"
          className="checkbox absolute hidden"
          checked={checked}
          onChange={toggleChecked}
        />
        <span
          className={`slider absolute block h-full w-full rounded-full ${checked ? 'bg-gray-300' : 'bg-gray-800'} transition duration-300`}
        />
      </label>
    </div>
  )
}

export default ToggleSwitch
