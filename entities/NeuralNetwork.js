class NeuralNetwork {
    constructor(neuronsList) {
        this.neuronsList = neuronsList;
    }

    getNeuronsList() {
        return this.neuronsList;
    }

    sum() {
        let total = 0;
        for(let index = 0; index < this.neuronsList.length; index++) {
            total += this.neuronsList[index].multiply();
        }
        return total;
    }
}