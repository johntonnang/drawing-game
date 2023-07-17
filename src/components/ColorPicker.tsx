import { ChangeEvent } from 'react'

interface ColorPickerProps {
  selectedColor: string
  onSelectColor: (newColor: string) => void
}

function ColorPicker({ selectedColor, onSelectColor }: ColorPickerProps) {
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    onSelectColor(newColor)
  }

  return (
    <div className="mb-4 flex h-60 w-64 flex-col items-center justify-center rounded-md bg-blue font-gloria text-xl text-white">
      <span className="mb-2">Select color:</span>
      <div className="grid grid-flow-col grid-rows-4 gap-4">
        <label htmlFor="color-picker-black">
          <input
            type="radio"
            id="color-picker-black"
            value="black"
            checked={selectedColor === 'black'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-black bg-black text-black checked:bg-none checked:ring-4 checked:ring-black focus:outline-none focus:ring-4 focus:ring-black"
          />
        </label>
        <label htmlFor="color-picker-white">
          <input
            type="radio"
            id="color-picker-white"
            value="white"
            checked={selectedColor === 'white'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-white bg-white text-white checked:bg-none checked:ring-4 checked:ring-white focus:outline-none focus:ring-4 focus:ring-white"
          />
        </label>
        <label htmlFor="color-picker-green">
          <input
            type="radio"
            id="color-picker-green"
            value="green"
            checked={selectedColor === 'green'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-green-color bg-green-color text-green-color checked:bg-none checked:ring-4 checked:ring-green-color focus:outline-none focus:ring-4 focus:ring-green-color"
          />
        </label>
        <label htmlFor="color-picker-red">
          <input
            type="radio"
            id="color-picker-red"
            value="red"
            checked={selectedColor === 'red'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-red bg-red text-red checked:bg-none checked:ring-4 checked:ring-red focus:outline-none focus:ring-4 focus:ring-red"
          />
        </label>
        <label htmlFor="color-picker-blue">
          <input
            type="radio"
            id="color-picker-blue"
            value="blue"
            checked={selectedColor === 'blue'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-blue-color bg-blue-color text-blue-color checked:bg-none checked:ring-4 checked:ring-blue-color focus:outline-none focus:ring-4 focus:ring-blue-color"
          />
        </label>
        <label htmlFor="color-picker-yellow">
          <input
            type="radio"
            id="color-picker-yellow"
            value="yellow"
            checked={selectedColor === 'yellow'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-yellow bg-yellow text-yellow checked:bg-none checked:ring-4 checked:ring-yellow focus:outline-none focus:ring-4 focus:ring-yellow"
          />
        </label>
        <label htmlFor="color-picker-pink">
          <input
            type="radio"
            id="color-picker-pink"
            value="pink"
            checked={selectedColor === 'pink'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-pink bg-pink text-pink checked:bg-none checked:ring-4 checked:ring-pink focus:outline-none focus:ring-4 focus:ring-pink"
          />
        </label>
        <label htmlFor="color-picker-purple">
          <input
            type="radio"
            id="color-picker-purple"
            value="purple"
            checked={selectedColor === 'purple'}
            onChange={handleColorChange}
            className="mx-4 h-8 w-8 border-purple bg-purple text-purple checked:bg-none checked:ring-4 checked:ring-purple focus:outline-none focus:ring-4 focus:ring-purple"
          />
        </label>
      </div>
    </div>
  )
}

export default ColorPicker
