window.addEventListener('DOMContentLoaded', async () => {
	const dataPi = {
		5: {
			value: -20.66,
		},
		6: {
			value: -20.71
		},
		7: {
			value: -20.76
		},
		8: {
			value: -20.81
		},
		9: {
			value: -20.86
		},
		10: {
			value: -20.9
		},
		11: {
			value: -21.4
		},
		12: {
			value: -22
		},
		13: {
			value: -22.5
		},
		14: {
			value: -23
		},
		15: {
			value: -23.4
		},
		16: {
			value: -25.4
		},
		17: {
			value: -27.4
		},
		18: {
			value: -29.4
		}
	}
	/* 
	
	const form = document.querySelector("#form")
	const inputData = document.querySelector("#formDataInput")
	const limmAll = document.querySelectorAll("#limm")
	const limmResAll = document.querySelectorAll("#limmRes")
	const yiResAll = document.querySelectorAll("#yiRes")
	const aiResAll = document.querySelectorAll("#aiRes")
	const p1All = document.querySelectorAll("#p1")

	form.addEventListener('submit', async (e) => {
		e.preventDefault()
		const inputValue = Number(inputData.value)
		const limmResData = []
		const yiResData = []
		const aiResData = []
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
			const p0 = Number(-20.58)
			const p1 = Number(p1All[i].innerText.replace(/,/g, '.'));
			const pAll = (p0) / (p1)
			const dataLog = Math.log(pAll) / Math.LN10
			yiResData.push(10 * dataLog / L)
		}
		for(let i = 0; i < yiResData.length; i++){
			yiResAll[i].innerHTML = yiResData[i]
		}
		for(let i = 0; i < aiResAll.length; i++){
			const p0 = Number(-20.58)
			const p1 = Number(p1All[i].innerText.replace(/,/g, '.'));
			const L = Number(limmResData[i]);
			const pAll = (p0 - p1)
			const aiAll = pAll / L
			aiResData.push(aiAll)
		}
		for(let i = 0; i < aiResData.length; i++){
			aiResAll[i].innerHTML = aiResData[i]
		}
	})
*/

	function for1Line(dataInput) {
		console.log(dataInput)
		if(dataInput > 18 || dataInput < 5){
			alert("Введите значение в диапазоне от 5 до 15")
		}else{
			const dt1 = document.querySelector("#dt1")
			dt1.textContent = dataPi[dataInput].value
			const dt11 = document.querySelector("#dt11")
			dt11.textContent = dataInput
			const dt111 = document.querySelector("#dt111")
			const L = dataInput;
			const D = 9
			const d = 20
			const dataAsin = Math.asin(D / Math.sqrt( (Math.pow(L, 2) + Math.pow(d, 2)))) * 180/Math.PI
			const dataAtan = Math.atan(L / d) * 180 / Math.PI
			dt111.textContent = Math.round(8 * D * (dataAsin + dataAtan))
			const dt1111 = document.querySelector("#dt1111")
			const L1 = dt111.textContent;
			const p0 = Number(-20.58)
			const p1 = Number(dt1.textContent);
			const pAll = (p0) / (p1)
			const dataLog = Math.log(pAll) / Math.LN10
			dt1111.textContent = 10 * dataLog / L1
			const dt11111 = document.querySelector("#dt11111")
			const p01 = Number(-20.58)
			const p11 = Number(dt1.textContent);
			const L2 = dt111.textContent;
			const pAll2 = (p01 - p11)
			const aiAll = pAll2 / L2
			dt11111.textContent = aiAll
		}
	}
	function for2Line(dataInput) {
		console.log(dataInput)
		if(dataInput > 16 || dataInput < 6){
			alert("Введите значение в диапазоне от 6 до 16")
		}else{
			const dt1 = document.querySelector("#dt2")
			dt1.textContent = dataPi[dataInput].value
			const dt11 = document.querySelector("#dt22")
			dt11.textContent = dataInput
			const dt111 = document.querySelector("#dt222")
			const L = dataInput;
			const D = 9
			const d = 20
			const dataAsin = Math.asin(D / Math.sqrt( (Math.pow(L, 2) + Math.pow(d, 2)))) * 180/Math.PI
			const dataAtan = Math.atan(L / d) * 180 / Math.PI
			dt111.textContent = Math.round(8 * D * (dataAsin + dataAtan))
			const dt1111 = document.querySelector("#dt2222")
			const L1 = dt111.textContent;
			const p0 = Number(-20.58)
			const p1 = Number(dt1.textContent);
			const pAll = (p0) / (p1)
			const dataLog = Math.log(pAll) / Math.LN10
			dt1111.textContent = 10 * dataLog / L1
			const dt11111 = document.querySelector("#dt22222")
			const p01 = Number(-20.58)
			const p11 = Number(dt1.textContent);
			const L2 = dt111.textContent;
			const pAll2 = (p01 - p11)
			const aiAll = pAll2 / L2
			dt11111.textContent = aiAll
		}
	}
	function for3Line(dataInput) {
		console.log(dataInput)
		if(dataInput > 17 || dataInput < 7){
			alert("Введите значение в диапазоне от 7 до 17")
		}else{
			const dt1 = document.querySelector("#dt3")
			dt1.textContent = dataPi[dataInput].value
			const dt11 = document.querySelector("#dt33")
			dt11.textContent = dataInput
			const dt111 = document.querySelector("#dt333")
			const L = dataInput;
			const D = 9
			const d = 20
			const dataAsin = Math.asin(D / Math.sqrt( (Math.pow(L, 2) + Math.pow(d, 2)))) * 180/Math.PI
			const dataAtan = Math.atan(L / d) * 180 / Math.PI
			dt111.textContent = Math.round(8 * D * (dataAsin + dataAtan))
			const dt1111 = document.querySelector("#dt3333")
			const L1 = dt111.textContent;
			const p0 = Number(-20.58)
			const p1 = Number(dt1.textContent);
			const pAll = (p0) / (p1)
			const dataLog = Math.log(pAll) / Math.LN10
			dt1111.textContent = 10 * dataLog / L1
			const dt11111 = document.querySelector("#dt33333")
			const p01 = Number(-20.58)
			const p11 = Number(dt1.textContent);
			const L2 = dt111.textContent;
			const pAll2 = (p01 - p11)
			const aiAll = pAll2 / L2
			dt11111.textContent = aiAll
		}
	}
	function for4Line(dataInput) {
		console.log(dataInput)
		if(dataInput > 18 || dataInput < 8){
			alert("Введите значение в диапазоне от 8 до 18")
		}else{
			const dt1 = document.querySelector("#dt4")
			dt1.textContent = dataPi[dataInput].value
			const dt11 = document.querySelector("#dt44")
			dt11.textContent = dataInput
			const dt111 = document.querySelector("#dt444")
			const L = dataInput;
			const D = 9
			const d = 20
			const dataAsin = Math.asin(D / Math.sqrt( (Math.pow(L, 2) + Math.pow(d, 2)))) * 180/Math.PI
			const dataAtan = Math.atan(L / d) * 180 / Math.PI
			dt111.textContent = Math.round(8 * D * (dataAsin + dataAtan))
			const dt1111 = document.querySelector("#dt4444")
			const L1 = dt111.textContent;
			const p0 = Number(-20.58)
			const p1 = Number(dt1.textContent);
			const pAll = (p0) / (p1)
			const dataLog = Math.log(pAll) / Math.LN10
			dt1111.textContent = 10 * dataLog / L1
			const dt11111 = document.querySelector("#dt44444")
			const p01 = Number(-20.58)
			const p11 = Number(dt1.textContent);
			const L2 = dt111.textContent;
			const pAll2 = (p01 - p11)
			const aiAll = pAll2 / L2
			dt11111.textContent = aiAll
		}
	}
	const input1 = document.querySelector("#inp1")
	const input2 = document.querySelector("#inp2")
	const input3 = document.querySelector("#inp3")
	const input4 = document.querySelector("#inp4")

	input1.addEventListener("keyup", (event) => {
		if(event.keyCode === 13){
				for1Line(input1.value)
		}
	})	
	input2.addEventListener("keyup", (event) => {
		if(event.keyCode === 13){
			for2Line(input2.value)
		}
	})
	input3.addEventListener("keyup", (event) => {
		if(event.keyCode === 13){
			for3Line(input3.value)
		}
	})
	input4.addEventListener("keyup", (event) => {
		if(event.keyCode === 13){
			for4Line(input4.value)
		}
	})
})
