import { useState, useEffect, useRef, MouseEvent } from 'react'
import ColorPicker from './ColorPicker'
import PencilPicker from './PencilPicker'

function DrawPage() {
  const [prevX, setPrevX] = useState(0)
  const [prevY, setPrevY] = useState(0)
  const [currentColor, setCurrentColor] = useState('#000000')
  const [currentThickness, setCurrentThickness] = useState(3)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.strokeStyle = currentColor
    ctx.lineWidth = currentThickness
  }, [currentColor, currentThickness])

  const getRelativeCoordinates = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { offsetX: 0, offsetY: 0 }

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const offsetX = (e.clientX - rect.left) * scaleX
    const offsetY = (e.clientY - rect.top) * scaleY
    return { offsetX, offsetY }
  }

  const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = getRelativeCoordinates(e)
    setPrevX(offsetX)
    setPrevY(offsetY)

    // Draw a dot at the initial position
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.beginPath()
    ctx.arc(offsetX, offsetY, currentThickness / 2, 0, Math.PI * 2)
    ctx.fillStyle = currentColor
    ctx.fill()
  }

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (e.buttons !== 1) return // Only draw when the left mouse button is pressed

    const { offsetX, offsetY } = getRelativeCoordinates(e)
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()

    setPrevX(offsetX)
    setPrevY(offsetY)
  }

  const handleColorChange = (newColor: string) => {
    setCurrentColor(newColor)
  }

  const handleThicknessChange = (newThickness: number) => {
    setCurrentThickness(newThickness)
  }

  return (
    <div className="flex justify-center flex-col w-full items-center h-screen">
      <div style={{ position: 'relative' }}>
        <ColorPicker
          selectedColor={currentColor}
          onSelectColor={handleColorChange}
        />
        <PencilPicker
          selectedThickness={currentThickness}
          onSelectThickness={handleThicknessChange}
        />
        <canvas
          ref={canvasRef}
          width={1600}
          height={900}
          style={{ width: '800px', height: '450px' }}
          className="rounded-2xl bg-white"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        ></canvas>
      </div>
      <div className="rounded-2xl bg-white max-w-[800px] w-2/3 h-auto mt-4 font-gloria text-xl p-4">
        Lorem ipsum dolor, sit amet consectetur asdas awdas weads wea dsawed cwd
        wad
      </div>
    </div>
  )
}

export default DrawPage
