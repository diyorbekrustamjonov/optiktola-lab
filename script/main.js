window.addEventListener('DOMContentLoaded', async () => {
	const form = document.querySelector("#form")
	const inputData = document.querySelector("#formDataInput")
	const limmAll = document.querySelectorAll("#limm")
	const limmResAll = document.querySelectorAll("#limmRes")
	const yiResAll = document.querySelectorAll("#yiRes")
	const q1All = document.querySelectorAll("#q1")
	form.addEventListener('submit', async (e) => {
		e.preventDefault()
		const inputValue = Number(inputData.value)
		const limmResData = []
		const yiResData = []
		for(let lim of limmAll){
			const L = Number(lim.innerText);
			const d = 20
			const dataAsin = Math.asin(inputValue / Math.sqrt( (Math.pow(L, 2) + Math.pow(d, 2)))) * 180/Math.PI
			const dataAtan = Math.atan(L / d) * 180 / Math.PI
			limmResData.push(Math.round(8 * inputValue * (dataAsin + dataAtan)))
		}
		for(let i = 0; i < limmResData.length; i++){
			limmResAll[i].innerHTML = limmResData[i]
		}
	
		for(let i  = 0; i <  limmAll.length; i++){
			const L = Number(limmResData[i]);
			const q0 = Number(-20.58)
			const q1 = Number(q1All[i].innerText.replace(/,/g, '.'));
			const qAll = (q0) / (q1)
			const dataLog = Math.log(qAll) / Math.LN10
			yiResData.push(10 * dataLog / L)
		}
		for(let i = 0; i < yiResData.length; i++){
			yiResAll[i].innerHTML = yiResData[i]
		}
	})


})
