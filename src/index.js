const oilIndexPriceInput = document.getElementById("oil-index-price")
const oilExportComodityInput = document.getElementById("oil-export-comodity")
const submitButton = document.getElementById("submit-button")
const itemsContainer = document.getElementsByClassName("items-container")[0]

function predictIndexPrice(oilIndexPrice, oilExportComodity) {
  const y1 = 0.5094395 * oilIndexPrice + 0.0010908 * oilExportComodity
  const y2 = 0.1197547 * oilIndexPrice + 0.0019881 * oilExportComodity
  const y3 = 0.5221328 * oilIndexPrice + 0.0010361 * oilExportComodity
  const y4 = 0.6581942 * oilIndexPrice + 0.0007665 * oilExportComodity
  const y5 = 0.5562195 * oilIndexPrice + 0.0008685 * oilExportComodity
  return [y1, y2, y3, y4, y5]
}

let oilIndexPrice = 0
let oilExportComodity = 0

if (submitButton) {
  submitButton.addEventListener('click', () => {
    if (oilIndexPriceInput && oilExportComodityInput) {
      oilIndexPrice = parseFloat(oilIndexPriceInput.value)
      oilExportComodity = parseFloat(oilExportComodityInput.value)
    }

    const [y1, y2, y3, y4, y5] = predictIndexPrice(oilIndexPrice, oilExportComodity)

    if (itemsContainer) {
      const result = `<div class="outer-container-hasil flex flex-col w-full justify-center items-center p-5">
        <div class="wrapper bg-white border-2 rounded-lg p-7 w-full max-w-4xl">
          <div class="formula">
            <h1 class="font-bold text-xl text-center mb-4">Hasil Prediksi</h1>
            <div class="text-center">
              Prediksi Food Index Price  = ${y1.toFixed(5)} <br> 
              Prediksi Meat Index Price = ${y2.toFixed(5)} <br>
              Prediksi Dairy Index Price = ${y3.toFixed(5)} <br>
              Prediksi Cereals Index Price = ${y4.toFixed(5)} <br>
              Prediksi Sugar Index Price = ${y5.toFixed(5)} <br>
            </div>
          </div>
        </div>
      </div>
      `

      itemsContainer.innerHTML += result
    }
  })
}
