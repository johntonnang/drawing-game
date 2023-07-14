import { useState, ChangeEvent } from 'react'

interface PencilPickerProps {
  selectedThickness: number
  onSelectThickness: (newThickness: number) => void
}

function PencilPicker({
  selectedThickness,
  onSelectThickness,
}: PencilPickerProps) {
  const [thicknessOptions] = useState<number[]>([1, 2, 3, 4, 5])

  const handleThicknessChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newThickness = parseInt(e.target.value, 10)
    onSelectThickness(newThickness)
  }

  return (
    <div className="flex items-center mb-4 font-gloria">
      <label htmlFor="thickness-picker" className="mr-2 text-xl text-white">
        Select thickness:
      </label>
      <select
        id="thickness-picker"
        value={selectedThickness}
        onChange={handleThicknessChange}
        className="rounded-md"
      >
        {thicknessOptions.map((thickness) => (
          <option key={thickness} value={thickness}>
            {thickness}px
          </option>
        ))}
      </select>
    </div>
  )
}

export default PencilPicker
