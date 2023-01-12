import { probabilityZeroCustomer } from './probabilityZeroCustomer.js';
import { averageCustomer, averageCustomerInQueue } from './averageCustomer.js';
import {
    averageTimeSpent,
    averageTimeSpentInQueue,
} from './averageTimeSpent.js';
import { trafficIntensity } from './trafficIntensity.js';
import { probabilityServerBusy } from './probabilityServerBusy.js';

const inputLambda = document.getElementById("inputLambda")
const inputMicro = document.getElementById("inputMicro")
const inputServer = document.getElementById("inputServer")
const hasil = document.getElementById("hasil")
const P0 = document.getElementById("P0")
const Wq = document.getElementById("Wq")
const W = document.getElementById("W")
const L = document.getElementById("L")
const Lq = document.getElementById("Lq")
const Ro = document.getElementById("Ro")
const Pq = document.getElementById("Pq")

const form = document.getElementById("question")
const hasilP0 = document.getElementById("P0")
const hasilWq = document.getElementById("Wq")
const hasilW = document.getElementById("W")
const hasilL = document.getElementById("L")
const hasilLq = document.getElementById("Lq")
const hasilRo = document.getElementById("Ro")
const hasilPq = document.getElementById("Pq")

let lambda = 0
let micro = 0
let server = 0

inputLambda.addEventListener("change", function(event) {
    lambda = event.target.value
})
inputMicro.addEventListener("change", function(event) {
    micro = event.target.value
})
inputServer.addEventListener("change", function(event) {
    server = event.target.value
})
form.addEventListener("submit", function(event) {
    event.preventDefault()

    const P0 = probabilityZeroCustomer(lambda, micro, server);
    const Wq = averageTimeSpentInQueue(lambda, micro, server);
    const W = averageTimeSpent(lambda, micro, server);
    const L = averageCustomer(lambda, micro, server);
    const Lq = averageCustomerInQueue(lambda, micro, server);
    const Ro = trafficIntensity(lambda, micro, server);
    const Pq = probabilityServerBusy(lambda, micro, server);

    hasilP0.value = parseFloat(P0.toFixed(4)).toString()
    hasilWq.value = parseFloat(Wq.toFixed(4)).toString()
    hasilW.value = parseFloat(W.toFixed(4)).toString()
    hasilL.value = parseFloat(L.toFixed(4)).toString()
    hasilLq.value = parseFloat(Lq.toFixed(4)).toString()
    hasilRo.value = parseFloat(Ro.toFixed(4)).toString()
    hasilPq.value = parseFloat(Pq.toFixed(4)).toString()

})