class NeuralNetwork {
    constructor(neuronsList, threshold) {
        this.neuronsList = neuronsList;
        this.threshold = threshold;
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

    activationFunction() {
        return this.sum() >= this.threshold;
    }
}