export function secondsToDhms(seconds: number, type?: boolean) {

    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    function formatLabel(
        value: number,
        type: "day" | "hour" | "minute" | "second",
    ) {
        const day = type === "day";
        const hour = type === "hour";
        const minute = type === "minute";
        const second = type === "second";
        /* if (value == 1) {
             if (day) return " день ";
             if (hour) return " час ";
             if (minute) return " минута ";
             if (second) return " секунда";
         }
         if (value > 1 && value <= 4) {
             if (day) return " дня ";
             if (hour) return " часа ";
             if (minute) return " минуты ";
             if (second) return " секунды";
         }
         if (value > 4) {
             if (day) return " дней ";
             if (hour) return " часов ";
             if (minute) return " минут ";
             if (second) return " секунд";
         }*/
        if (day) return " д. ";
        if (hour) return " час. ";
        if (minute) return " мин. ";
        if (second) return " сек.";
        return "";
    }

    var dDisplay = d > 0 ? d + formatLabel(d, "day") : "";
    var hDisplay = h > 0 ? h + formatLabel(h, "hour") : "";
    var mDisplay = m > 0 ? m + formatLabel(m, "minute") : "";
    var sDisplay = s > 0 ? s + formatLabel(s, "second") : "";

    if (type) {
        if (dDisplay) return dDisplay
        if (!dDisplay && hDisplay) return hDisplay
        if (!dDisplay && !hDisplay && mDisplay) return mDisplay
        if (!dDisplay && !hDisplay && !mDisplay && sDisplay) return sDisplay
    }
    return dDisplay + hDisplay + mDisplay + sDisplay;

}
