import OpeningHour from '../models/OpeningHour'

export const openAllDay: OpeningHour = { from: "00:00", to: "24:00" }
export const openAllWeek = {
    weekday: openAllDay,
    saturday: openAllDay,
    sunday: openAllDay,
}
export const closed: OpeningHour = { from: "closed", to: "closed" }

export function parseOpeningHour(timeStr: string): OpeningHour {
    const time = timeStr.toLocaleLowerCase()
    if (time === "null" || time === "stengt") {
        return closed
    } else if (time === "all" || time === "døgnåpent") {
        return openAllDay
    } else {
        const splitTime = time.replace(/ - /g, "-").split("-")
        const from = splitTime[0]
        const to = splitTime[1]
        if (from === to && (from === "00:00" || from === "24:00")) {
            return openAllDay
        }
        return { from, to }
    }
}
