class ArrayRandomValues
{
    private array: Array<Number>;
    private tamanho: Number

    constructor(tamanho :Number){
        this.setTamanho(tamanho)
        this.array=[];
    }

    public setTamanho(tamanho:Number) {
        if(typeof tamanho==='number'){
            this.tamanho=tamanho;
        }else{
            throw new Error('Invalid input');
        }
        
    }

    private abastecerArray() {
        const minValue = 0; 
        const maxValue = 100;
        const arrayLength = Number(this.tamanho);
    
        for (let i = 0; i < arrayLength; i++) {
          const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
          this.array.push(randomValue);
        }
    }

    public getArray(){
        this.abastecerArray();
        return this.array;
    }

}

export default ArrayRandomValues