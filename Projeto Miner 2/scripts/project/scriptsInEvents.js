

const scriptsInEvents = {

	async FolhaDeEventosJogo_Event8_Act4(runtime, localVars)
	{
		//obter valor da vida variavel global vidas
		let Vidas = runtime.globalVars.Vidas;
		
		//reduzir 1 Vida
		Vidas --;
		
		//atualiza a variavel global do construct 3
		
		runtime.globalVars.Vidas = Vidas;
		
		//Se vidas chegar em a 0, vá para game over
		
		if(Vidas <= 0) {
			console.log ("TELA GAME OVER");
			runtime.goToLayout ("TELA GAME OVER");
		}
	},

	async FolhaDeEventosJogo_Event9_Act3(runtime, localVars)
	{
		//obter valor da vida variavel global vidas
		let Vidas = runtime.globalVars.Vidas;
		
		//reduzir 1 Vida
		Vidas --;
		
		//atualiza a variavel global do construct 3
		
		runtime.globalVars.Vidas = Vidas;
		
		//Se vidas chegar em a 0, vá para game over
		
		if(Vidas <= 0) {
			console.log ("TELA GAME OVER");
			runtime.goToLayout ("TELA GAME OVER");
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
