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
    <div className="flex font-gloria text-xl items-center text-white mb-4">
      <label htmlFor="color-picker" className="mr-2">
        Select color:
      </label>
      <input
        type="color"
        id="color-picker"
        value={selectedColor}
        onChange={handleColorChange}
        className="border rounded-md"
      />
    </div>
  )
}

export default ColorPicker
