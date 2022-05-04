class Slider {
    constructor(rangeElement, valueElement, options) {
        this.rangeElement = rangeElement
        this.valueElement = valueElement
        this.options = options

        this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }

    init() {
        this.rangeElement.setAttribute('min', this.options.min)
        this.rangeElement.setAttribute('max', this.options.max)
        this.rangeElement.value = this.options.cur

        this.updateSlider()
    }

    asMoney(value) {
        return parseFloat(value)
        .toLocaleString('en-US', {
            maximumFractionDigits: 2
        })
    }

    generateBackground(rangeElement) {
        if(this.rangeElement.value === this.options.min) {
            return
        }

        let percentage = (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
        return 'background: linear-gradient(to right, #50299c, #932e3e ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
    }

    updateSlider(newValue) {
        this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
        this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
}

let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.range .range_value span')

let options = {
    min: 0,
    max: 150,
    cur: 75
}

if(rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options)

    slider.init()
}