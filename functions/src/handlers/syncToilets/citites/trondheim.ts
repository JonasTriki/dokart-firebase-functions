import Toilet from "../../../models/Toilet";

const openingHour = { from: 'all', to: 'all' }
const openingHours = {
    weekday: openingHour,
    saturday: openingHour,
    sunday: openingHour,
}

export function fetchToilets(): Toilet[] {
    return [
        {
            latitude: 63.42183,
            longitude: 10.394552,
            price: 10,
            placement: "7-Eleven Elgeseter",
            address: "Elgesetergate 2",
            openingHours,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
        {
            latitude: 63.4324135,
            longitude: 10.4079336,
            price: 10,
            placement: "Bakke Bru",
            address: "Verftsgata 1",
            openingHours,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
        {
            latitude: 63.4275643,
            longitude: 10.3945298,
            price: 10,
            placement: "Bispegata",
            address: "Bispegata 6",
            openingHours,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
        {
            latitude: 63.428672,
            longitude: 10.3689871,
            price: 10,
            placement: "Ilaparken",
            address: "Ilevollen 32B",
            openingHours,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
        {
            latitude: 63.4345343,
            longitude: 10.397568,
            price: 10,
            placement: "Fjordgata",
            address: "Fjordgata 54",
            openingHours,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
        {
            latitude: 63.4300108,
            longitude: 10.3953618,
            price: 10,
            placement: "Trondheim Torg",
            address: "Munkegata 19",
            openingHours,
            accessible: true,
            babycare: true,
            pissoir: true,
        },
    ].map(toilet => ({ ...toilet, city: "trondheim" }))
}