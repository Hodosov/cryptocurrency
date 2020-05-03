import React from 'react'

export class Chart extends React.Component {

    data = this.props.history

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = this.props.color
    ctx.fillRect(0, 0, 1000, 100)

    ctx.fillStyle = 'red'
    for( let i = 0; i<this.data.length; i++){
        let d = this.data[i]

        ctx.lineTo(10 + i * 10, 100 - d * 50)
        ctx.stroke()
    }
        ctx.fillStyle = '#666'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(10, 10)
        ctx.lineTo(10, 90)
        ctx.lineTo(260, 90)
        ctx.stroke()
    
    }

    render() {
    return (
        <div>
            <canvas ref='canvas' width={1000} height={100}></canvas>
        </div>

    )}
}
