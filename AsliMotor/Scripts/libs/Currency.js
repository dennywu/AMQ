﻿Number.prototype.toCurrency = function (rounder) {
    aDigits = this.toFixed(rounder).split(".");
    aDigits[0] = aDigits[0].split("").reverse().join("")
                                    .replace(/(\d{3})(?=\d)/g, "$1,").split("").reverse().join("");
    return "<span class='currency'>Rp. " + aDigits.join(".") + "</span>";
}